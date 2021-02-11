<template>
    <div>
        <h1>Suggestion page</h1>
        <div v-if="this.suggestions && this.users" class="container">
            <div class="sugg" v-for="suggestion of suggestions" v-bind:key="suggestion">
                <p> {{ suggestion.message }} </p>
                <div class="subInfos">
                    <p>par {{ getUserById(suggestion.user).username }} </p>
                    <p>le {{ suggestion.date }} </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    // api
    import SuggestionsController from "../../../controllers/suggestions.controller";
    import UsersController from "../../../controllers/users.controller";
import { Id, Suggestion, User } from '../../../types';
    export default defineComponent({
        name: 'SuggestionsPage',
        components: {

        },
        data() {
             return {
                 suggestions: Array<Suggestion>(),
                 users: Array<User>(),
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
            getUserById(id:Id):User{
                
                for (let user in this.users) {                    
                    if (this.users[user].id == id){
                        return this.users[user];
                    }
                }
                return {
                    id: "-1",
                    displayedName: "no user found",
                    username: "no user found",
                    email: "no user found"
                }
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
        grid-gap: 100px;
        grid-auto-rows: minmax(100px, auto);
        width: 90%;
        margin-left: 5%;
    }

    .sugg {
        border: 1px solid black;
        border-radius: 10px;
        box-shadow: 0 0 4px black;
        background-color: #EEE;
        padding: 10px;
        padding-bottom: 0;
    }

    .subInfos {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #222;
    }

    .subInfos p {
        color: #555;
    }
</style>