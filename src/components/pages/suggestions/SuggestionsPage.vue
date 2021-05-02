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
    import { defineComponent } from 'vue'

    // api
    import SuggestionsController from "../../../api/suggestions";
    import { Answer, formatSuggestion, Suggestion, User } from '../../../types';
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
                suggestions: Array<Suggestion>(),
                users: Array<User>(),
                color: "00ffff",

                displayAnswer: false,
                suggestionToAnswer: {
                id: "",
                message: "",
                user: {
                    id: "",
                    displayedName: "",
                    username: "",
                    email: "",
                },
                createdAt: ""
                } as Suggestion,
                
                answer: {
                    suggestion: null,
                    title: "",
                    message: "",
                },

                nbSuggestion: 10,
                page: 0,
            }
        },
        mounted() {
            SuggestionsController.getSuggestions(this.page, this.nbSuggestion).then((res:any) => {
                let suggestions = [];
                for(let datum of res){
                    suggestions.push(formatSuggestion(datum));
                }
                this.suggestions = suggestions;
            });
        },
        methods: {
            displayAnswerModale(suggestion:Suggestion) {
                this.suggestionToAnswer = suggestion;
                this.displayAnswer = true;
            },
            answerSent(answer:Answer){
                this.displayAnswer = false;
                if(answer){
                    this.suggestionToAnswer.answer = answer;
                    this.suggestions[this.suggestions.indexOf(this.suggestionToAnswer)].answer = answer;
                }
            },
            plusSuggestion(){
                this.page++;
                SuggestionsController.getSuggestions(this.page, this.nbSuggestion).then((res:any) => {
                    let suggestions = [];
                    for(let datum of res){
                        suggestions.push(formatSuggestion(datum));
                    }
                    this.suggestions = this.suggestions.concat(suggestions);
                });
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