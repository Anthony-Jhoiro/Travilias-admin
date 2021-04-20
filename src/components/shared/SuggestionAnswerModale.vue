<template>
  <Dialog header="Répondre" v-model:visible="displayAnswer" :style="{width: '25vw'}" :modal="true">
    <h5>à <Tag :value="answer.suggestion.user.username"></Tag></h5>
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
        <Button label="Annuler" class="p-button-danger" />
        <Button label="Répondre"  @click="answerTo"/>
    </template>
  </Dialog>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import SuggestionsController from '../../controllers/suggestions.controller';
  export default defineComponent({
    name: 'SuggestionAnswerModale',
    components: {

    },
    data() {
       return {
        answer: {
            suggestion: null,
            title: "",
            message: ""
        },
      }
    },
    methods: {
      answerTo() {
          SuggestionsController.answer(this.answer).then((res) => {
              if(res.success){
                  this.$toast.add({severity:'success', summary: res.message, detail:res.detail, life: 1500});
              }
              else {
                  this.$toast.add({severity:'error', summary: res.message, detail:res.detail, life: 3000});
              }
          });
      },
      close() {
        this.$emit('answered');
      }
    },
    props: {
        displayAnswer: Boolean
    },
    computed: {

    },
    watch: {

    },
  })
</script>

<style>
</style>