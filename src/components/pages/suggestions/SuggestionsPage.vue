<template>
    <div>
        <div class="container">
            <SuggestionCard v-for="(suggestion, index) of suggestions" v-bind:key="index" :suggestion="suggestion"/>
        </div>

        <SuggestionAnswerModale :displayAnswer="displayAnswer" @answered="displayAnswer = false"/>

    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    // api
    import SuggestionsController from "../../../controllers/suggestions.controller";
    import UsersController from "../../../controllers/users.controller";
    import { Suggestion, User } from '../../../types';
    import { SuggestionCard, SuggestionAnswerModale } from '../../shared';

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
                 
                 answer: {
                     suggestion: null,
                     title: "",
                     message: ""
                 }
            }
        },
        beforeMount() {
            SuggestionsController.getSuggestions().then((res) => {
                this.suggestions = res;
            });
            UsersController.getUsers().then((res) => {
                this.users = res
            });
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

    .container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 100px;
        grid-auto-rows: minmax(100px, auto);
        width: 90%;
        margin-left: 5%;
        margin-top: 5vh;
    }

    .action-btns {
        background-color: #9fa8da;
        width: 30%;
        margin-left: 70%;
        padding: 2px;
        display: flex;
        justify-content: space-around;
    }

    .action-btns > div {
        color: black;
        cursor: pointer;
        width: 30%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: #9098c6;
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

</style>