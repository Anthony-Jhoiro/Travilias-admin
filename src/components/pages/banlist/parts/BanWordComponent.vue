<template>
  <div class="elem">
    <span v-if="banword">{{banword.word}}</span>
    <font-awesome-icon icon="times" class="clickable" @click="remove"/>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
import { deleteBanWord } from '../../../../api/banlist';
  import { BanWord } from '/@/types';
  export default defineComponent({
    name: 'BanWordComponent',
    components: {

    },
    data() {
       return {

      }
    },
    methods: {
      remove(){
        if(this.banword && this.banword.id){
          deleteBanWord(this.banword.id).then((data:{banWords:BanWord[]}) => {
            this.$emit("removed", data.banWords);
          })
        }
      }
    },
    props: {
      banword: {
        type: Object as () => BanWord,
      },
    },
  })
</script>

<style>
  .elem {
    height: 20px;
    border-radius: 200px;
    background-color: #9fa8da;
    display: flex;
    align-items: center;

    padding: 20px;
    margin: 10px 5px 10px 5px;
  }

  .elem > span {
    margin-right: 10px;
  }

  .clickable {
    cursor: pointer;
  }

</style>