<template>
  <Card>
    <template #header>
      <div class="subHeader">
        <div class="action-btns">
            <div v-if="suggestion && suggestion.answer && suggestion.answer.suggestion_id" class="alreadyAnswered toAnswer">
                <font-awesome-icon v-if="suggestion && suggestion.answer" icon="reply" @click="answer(suggestion)"/>
            </div>
            <div v-else class="notalreadyAnswered toAnswer">
                <font-awesome-icon icon="reply" @click="answer(suggestion)"/>
            </div>
        </div>
      </div>
    </template>
    <template #content>
        <p>{{suggestion.message}}</p>
    </template>
    <template #footer>
      <div id="footerPerso">
        <p>par <Tag :value="suggestion.user.username"></Tag></p>
        <p>le {{ suggestionDate }}</p>
      </div>
    </template>
  </Card>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import {Suggestion} from "../../../../types";
  export default defineComponent({
    name: 'SuggestionCard',
    components: {

    },
    data() {
       return {
      }
    },
    methods: {
      answer(suggestion:Suggestion) {
        this.$emit('answer', suggestion);
      }
    },
    props: {
      suggestion: {
        type: Object as () => Suggestion,
      },
    },
    computed: {
      suggestionDate() {
        const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
        if(this.suggestion){
          
          const date:Date = new Date(this.suggestion.createdAt);
          let day:string = ("" + date.getDate()).length > 1 ? "" + date.getDate() : "0" + date.getDate();
          let month:string = mois[date.getMonth()];
          let year:string = "" + date.getFullYear();


          return day + " " + month + " " + year;
        }
      }
    },
    watch: {

    },
  })
</script>

<style>
  #footerPerso {
    display: flex;
    justify-content: space-between;
  }

  .subHeader {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  .action-btns {
    width: 10%;
    padding-top: 4px;
    display: flex;
    justify-content: space-around;
  }

  .toAnswer {
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
  }

  .alreadyAnswered {
    background-color: forestgreen;
    color: white;
  }

  .notalreadyAnswered {
    background-color: #CCC;
    color: black;
  }
</style>