<template>
  <div class="scrollContainer">
    <div class="banwContainer" v-if="banList">
      <ban-word-component v-for="banword in banList" :banword="banword" :key="banword.id"/>
    </div>
  </div>
  <div class="addWordDiv">
    <InputText type="text" v-model="newWord" class="inputtext" />
    <Button label="Enregistrer" @click="register" class="button"/>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue';
  import { getBanWords, postBanWord } from '../../../api/banlist';
  import { BanWord, formatBanWord } from '../../../types';
  import { useStore } from "vuex";
  import BanWordComponent from './parts/BanWordComponent.vue';
  export default defineComponent({
    name: 'BanListPage',
    components: {
      BanWordComponent
    },
    data() {
      return {
         newWord: "",
      }
    },
    setup() {
      const store = useStore();

      getBanWords();

      return {
        banList: computed(() => store.getters.getBanList),
      }
    },
    methods: {
      register(){
        if(this.newWord){
          const newBanWord = {
            id: "",
            word: this.newWord,
            language: "fr-Fr",
          };
          this.newWord = "";
          postBanWord(newBanWord);
        }
        else {
          console.info("un mot vide ne peut être enregistré");
        }
      },
    },
    props: {

    },
    computed: {

    },
    watch: {

    },
  })
</script>

<style>

.scrollContainer {
  height: 90vh;
}

.banwContainer {
  display: flex;
  flex-wrap: wrap;
}

.addWordDiv {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(auto, auto);


  height: 7vh;
  padding: 10px 5px 5px 5px;
  width: 100%;

  border-top: 2px solid #333;


}

.inputtext {
  width: 100%;
  grid-column: 1 / 11;
  grid-row: 1 / 1;
}
</style>