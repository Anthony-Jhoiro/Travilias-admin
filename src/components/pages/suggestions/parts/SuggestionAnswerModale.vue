<template>
  <Dialog header="Répondre" v-model:visible="displayAnswer" :modal="true">
    <h5 v-if="suggestion && suggestion.user">à <Tag :value="suggestion.user.username ?? 'user name non chargé'"></Tag></h5>
    <h5 v-else><Tag :value="'username non chargé'"></Tag></h5>
    <div class="answerForm">
        <div>
            <label for="titreReponse">Titre :</label>
            <InputText id="titreReponse" type="text" v-model="answer.title"/>
        </div>
        <div>
            <label>message :</label>
            <Textarea cols="30" rows="10" v-model="answer.message"/>
        </div>
    </div>
    <template #footer>
        <Button label="Annuler" class="p-button-danger" @click="this.$emit('answered')"/>
        <Button label="Répondre"  @click="answerTo"/>
    </template>
  </Dialog>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import SuggestionsController from '../../../../controllers/suggestions.controller';
  import { Suggestion } from '/@/types';
  import { useToast } from "primevue/usetoast";
  export default defineComponent({
    name: 'SuggestionAnswerModale',
    components: {

    },
    data() {
      return {
        answer: {
            suggestion: {
              id: "",
              message: "",
              user: {
                id: "",
                displayedName: "pas de nom chargé",
                username: "pas de nom chargé",
                email: "pas de nom chargé",
              },
              date: ""
            } as Suggestion | undefined,
            title: "",
            message: ""
        },
      }
    },
    beforeMount() {
      if(this.suggestion){
        this.answer.suggestion = this.suggestion;
      }
      
    },
    methods: {
      answerTo() {       
        const toast = useToast(); 
          SuggestionsController.answer(this.answer).then((res) => {
              if(res.success){
                toast.add({severity:'success', summary: res.message, detail:res.detail, life: 1500});
              }
              else {
                toast.add({severity:'error', summary: res.message, detail:res.detail, life: 3000});
              }

              this.$emit('answered');
          });
      },
    },
    props: {
        displayAnswer: Boolean,
        suggestion: {
          type: Object as PropType<Suggestion>
        },
    },
    computed: {

    },
    watch: {

    },
  })
</script>

<style>
</style>