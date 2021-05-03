<template>
  <Dialog v-if="suggestion" :header="header" v-model:visible="displayAnswer" :modal="true">
    <h5>à <Tag :value="suggestion.user?.username ?? 'Username non chargé'"></Tag></h5>
    <div class="answerForm">
        <div>
            <label for="titreReponse">Titre :</label>
            <InputText id="titreReponse" type="text" v-model="answer.title" :disabled="disabled" />
        </div>
        <div>
            <label>Message :</label>
            <Textarea cols="30" rows="10" v-model="answer.message" :disabled="disabled"/>
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
  import { defineComponent } from 'vue'
  import SuggestionsController from '../../../../api/suggestions';
  import { Answer, Suggestion } from '/@/types';
  export default defineComponent({
    name: 'SuggestionAnswerModale',
    components: {

    },
    data() {
      return {
        header: "",
        disabled: false,
        answer: {
          title: "",
          message: "",
          suggestion_id: ""
        } as Answer,
      }
    },
    methods: {
      answerTo() {
        if(this.suggestion && this.answer){
          this.answer.suggestion_id = this.suggestion.id;
          SuggestionsController.answer(this.answer, this.suggestion).then((ans:Answer) => {
              /* if(ans){
                toast.add({severity:'success', summary: ans.message, life: 3000});
              }
              else {
                toast.add({severity:'error', summary: "envoi avorté", life: 3000});
              } */
              this.answer = {
                title: "",
                message: "",
                suggestion_id: ""
              }
              //@ts-ignore
              this.$emit('answered');
          });
        }
      },
      cancel() {
        console.log(this.suggestion);
        if(this.suggestion?.answer){
          this.suggestion.answer = null;
        }
        this.$emit('answered');

      }
    },
    props: {
        displayAnswer: Boolean,
        suggestion: {
          type: Object as () => Suggestion
        }
    },
    computed: {

    },
    watch: {
      displayAnswer(newValue) {
        if(newValue){
          if(this.suggestion){
            this.header = this.suggestion.answer ? "Réponse déjà donnée" : "Répondre";
            this.disabled = this.suggestion.answer ? true : false;
            this.answer = this.suggestion.answer ? this.suggestion.answer : {
                title: "",
                message: "",
                suggestion_id: ""
              }
          }
        }
      }
    },
  })
</script>

<style>
</style>