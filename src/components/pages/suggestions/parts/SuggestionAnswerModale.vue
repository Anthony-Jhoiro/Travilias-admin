<template>
  <Dialog :header="header" v-model:visible="displayAnswer" modal="true">
    <h5>à <Tag :value="suggestion.user?.username ?? 'Username non chargé'"></Tag></h5>
    <div class="answerForm">
        <div>
            <label for="titreReponse">Titre :</label>
            <InputText id="titreReponse" type="text" v-model="suggestion.answer.title" :disabled="disabled" />
        </div>
        <div>
            <label>Message :</label>
            <Textarea cols="30" rows="10" v-model="suggestion.answer.message" :disabled="disabled"/>
        </div>
    </div>
    <template v-if="disabled" #footer>
        <Button label="Ok" class="p-button-primary" @click="this.$emit('answered')"/>
    </template>
    <template v-else #footer>
        <Button label="Annuler" class="p-button-danger" @click="this.cancel"/>
        <Button label="Répondre" class="p-button-primary" @click="this.answerTo"/>
    </template>
  </Dialog>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import SuggestionsController from '../../../../api/suggestions';
  import { Answer, Suggestion } from '/@/types';
  import { useToast } from "primevue/usetoast";
  export default defineComponent({
    name: 'SuggestionAnswerModale',
    components: {

    },
    data() {
      return {
        header: "",
        disabled: false,
      }
    },
    methods: {
      answerTo() {       
        // const toast = useToast();
        if(this.suggestion && this.suggestion.answer){
          this.suggestion.answer.suggestion_id = this.suggestion.id;
          SuggestionsController.answer(this.suggestion.answer).then((ans:Answer) => {
              /* if(ans){
                toast.add({severity:'success', summary: ans.message, life: 3000});
              }
              else {
                toast.add({severity:'error', summary: "envoi avorté", life: 3000});
              } */
              //@ts-ignore
              this.$emit('answered', this.suggestion.answer);
          });
        }
      },
      cancel() {
        if(this.suggestion?.answer){
          this.suggestion.answer = null;
        }
        this.$emit('answered');

      }
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
      displayAnswer(newValue) {
        if(newValue){
          if(this.suggestion){
            this.header = this.suggestion.answer ? "Réponse déjà donnée" : "Répondre";
            this.disabled = this.suggestion.answer ? true : false;
            if(!this.suggestion.answer){
              this.suggestion.answer = {
                suggestion_id: "",
                title: "",
                message: "",
              };
            }
          }
        }
      }
    },
  })
</script>

<style>
</style>