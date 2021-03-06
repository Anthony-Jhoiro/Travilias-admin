<template>
    <div>
        <div class="container">
            <Card v-for="(suggestion, index) of suggestions" v-bind:key="index">
                <template #header>
                    <div class="action-btns">
                        <div>
                            <font-awesome-icon icon="language" />
                        </div>
                        <div>
                            <font-awesome-icon icon="reply" />
                        </div>
                        <div @click="toPin(suggestion)">
                            <font-awesome-icon icon="thumbtack" />
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
        </div>

        <Toast position="top-left"/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    // api
    import SuggestionsController from "../../../controllers/suggestions.controller";
    import UsersController from "../../../controllers/users.controller";
    import { Suggestion, User } from '../../../types';

    import { useToast } from "primevue/usetoast";

    // icons


    export default defineComponent({
        name: 'SuggestionsPage',
        components: {

        },
        data() {
             return {
                 suggestions: Array<Suggestion>(),
                 users: Array<User>(),
                 color: "00ffff"
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
            toPin(suggestion:Suggestion){
                SuggestionsController.pinSuggestion(suggestion).then((res) => {
                    if(res.success){
                        this.$toast.add({severity:'success', summary: res.message, detail:res.detail, life: 1200});
                    }
                    else {
                        this.$toast.add({severity:'error', summary: res.message, detail:res.detail, life: 3000});
                    }
                })
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

/*     .action-btns *:hover {
        color: #00f;
    } */

</style>