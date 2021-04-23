<template>
  <Card>
    <template #header>
        <div class="action-btns">
            <div>
                <font-awesome-icon icon="language" />
            </div>
            <div>
                <font-awesome-icon icon="reply" @click="answer(suggestion)"/>
            </div>
        </div>
    </template>
    <template #content>
        <p>{{suggestion.message}}</p>
    </template>
    <template #footer>
        <p>le {{suggestion.date}}</p>
        <p>par <Tag :value="suggestion.user.username"></Tag></p>
    </template>
  </Card>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import {Suggestion} from "../../types";
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

    },
    watch: {

    },
  })
</script>

<style>
</style>