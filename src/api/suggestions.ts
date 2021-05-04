import { useStore } from "vuex";
import { store } from "../stores";
import {Answer, formatSuggestion, Suggestion} from "../types/index";
import { HTTPMethods, makeRequest } from "./request";


namespace SuggestionsController {
    /**
     * Get suggestions from API and replace suggestions
     * @param page the page we are for the pagination
     * @param limit the number of suggestions we get
     * @returns an array of suggestions
     */
    export async function getSuggestions(page:number = 0, limit:number = 10): Promise<any[]> {
        
        let suggestions = await makeRequest<Suggestion[]>(HTTPMethods.GET, "/suggestion?page=" + page + "&limit=" + limit);
        let formatSuggestions = suggestions.map(formatSuggestion);

        store.commit('setSuggestions', formatSuggestions);

        return formatSuggestions;
    }

    /**
     * Get suggestions from API and add it the suggestions in store
     * @param page the page we are for the pagination
     * @param limit the number of suggestions we get
     * @returns an array of suggestions to add
     */
    export async function addSuggestions(page:number = 0, limit:number = 10): Promise<any[]> {
        
        let suggestions = await makeRequest<Suggestion[]>(HTTPMethods.GET, "/suggestion?page=" + page + "&limit=" + limit);
        let formatSuggestions = suggestions.map(formatSuggestion);

        store.commit('addSuggestions', formatSuggestions);

        return formatSuggestions;
    } 

    /**
     * answer to a suggestion (POST an answer in the api)
     * @param answer the answer we post
     * @param suggestionToAnswer the suggestion we answer
     * @returns the answer
     */
    export async function answer(answer:Answer, suggestionToAnswer:Suggestion):Promise<Answer> {
        
        let res = await makeRequest<Answer>(HTTPMethods.POST, "/answer", {title: answer.title, message: answer.message, suggestion_id: answer.suggestion_id});

        store.commit('answerToSuggestion', {suggestionToAnswer, answer});

        return res;

    }
}

export default SuggestionsController;