<template>
    <div>
        <h1>Suggestion page</h1>
        <div v-if="suggestions && users" class="container">
            <div class="sugg" v-for="suggestion of suggestions" v-bind:key="suggestion.id">
                <p> {{ suggestion.message }} </p>
                <div class="subInfos">
                    <p>par {{ suggestion.user.username }} </p>
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

</style>