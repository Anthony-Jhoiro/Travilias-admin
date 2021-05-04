<template>
    <div>
        <div class="container">
            <SuggestionCard v-for="(suggestion, index) of suggestions" v-bind:key="index" :suggestion="suggestion" @answer="displayAnswerModale"/>
        </div>
        
        <Button label="plus" class="p-button-primary buttonPlus" @click="plusSuggestion"/>

        <SuggestionAnswerModale :displayAnswer="displayAnswer" :suggestion="suggestionToAnswer" @answered="answerSent"/>

    </div>
</template>

<script lang="ts">
    import { useStore } from 'vuex';
    import { computed, defineComponent } from 'vue'

    // api
    import SuggestionsController from "../../../api/suggestions";
    import { Suggestion, User } from '../../../types';
    import { SuggestionCard, SuggestionAnswerModale } from './parts';

    // icons


    export default defineComponent({
        name: 'SuggestionsPage',
        components: {
                SuggestionCard,
                SuggestionAnswerModale

        },
        data() {
            return {
                users: Array<User>(),
                color: "00ffff",

                suggestionToAnswer: null as Suggestion | null,

                displayAnswer: false,
                
                answer: {
                    suggestion: null,
                    title: "",
                    message: "",
                },

                nbSuggestion: 10,
                page: 0,
            }
        },
        setup() {
            const store = useStore();

            SuggestionsController.getSuggestions(0, 10);

            return {
                suggestions: computed(() => store.getters.getSuggestions),
            }
        },
        methods: {
            /**
             * display the answer modale
             * @param suggestion the suggestion we answer
             */
            displayAnswerModale(suggestion:Suggestion) {
                this.suggestionToAnswer = suggestion;
                this.displayAnswer = true;
            },
            /**
             * called when an answer modale has sent an answer : close the modale and set the suggestion to answer to null
             */
            answerSent(){
                this.displayAnswer = false;
                this.suggestionToAnswer = null;
            },
            /**
             * add the number of displayed suggestions
             */
            plusSuggestion(){
                this.page++;
                SuggestionsController.addSuggestions(this.page, this.nbSuggestion);
            }
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
    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px;
        width: 90%;
        margin-left: 5%;
        margin-top: 5vh;
    }

    .answerForm {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }

    .answerForm input {
        width: 100%;
    }

    .answerForm > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;
        width: 100%;
        margin: 10px 0 10px 0;
    }

    .buttonPlus {
        margin: 25px 0 20px 50%;
        transform: translate(-50%, 0);
        width: 10%;
    }
</style>