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
                            <font-awesome-icon icon="reply" @click="displayAnswer = true; answer.suggestion = suggestion"/>
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

        <Dialog header="Répondre" v-model:visible="displayAnswer" :style="{width: '25vw'}" :modal="true">
            <h5>à <Tag :value="answer.suggestion.user.username"></Tag></h5>
            <div class="answerForm">
                <div>
                    <label for="titreReponse">Titre :</label>
                    <InputText id="titreReponse" type="text" v-model="answer.title"/>
                </div>
                <div>
                    <label>message :</label>
                    <Textarea cols="30" rows="10" v-model="answer.message"/>
                </div>
            </div>
            <template #footer>
                <Button label="Annuler" class="p-button-danger"  @click="displayAnswer = false"/>
                <Button label="Répondre"  @click="answerTo"/>
            </template>
        </Dialog>

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
            toPin(suggestion:Suggestion){
                SuggestionsController.pinSuggestion(suggestion).then((res) => {
                    if(res.success){
                        this.$toast.add({severity:'success', summary: res.message, detail:res.detail, life: 1200});
                    }
                    else {
                        this.$toast.add({severity:'error', summary: res.message, detail:res.detail, life: 3000});
                    }
                });
            },

            answerTo() {
                SuggestionsController.answer(this.answer).then((res) => {
                    if(res.success){
                        this.$toast.add({severity:'success', summary: res.message, detail:res.detail, life: 1500});
                    }
                    else {
                        this.$toast.add({severity:'error', summary: res.message, detail:res.detail, life: 3000});
                    }
                });
                this.displayAnswer = false;
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