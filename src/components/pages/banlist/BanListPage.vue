<template>
  <div class="banwContainer">

  </div>
  <div class="addWordDiv">
    <InputText type="text" v-model="newWord" class="inputtext"/>
    <Button label="Enregistrer" @click="register" class="button"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { getBanWords } from '../../../api/banlist';
  export default defineComponent({
    name: 'BanListPage',
    components: {

    },
    data() {
       return {
         banList: {
           type: Array,
         },
         newWord: "",
      }
    },
    mounted() {
      getBanWords().then(data => {
        console.log(data);        
      })
    },
    methods: {

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

.banwContainer {
  height: 90vh;
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