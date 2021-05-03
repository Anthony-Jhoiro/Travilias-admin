import { useStore } from "vuex";
import { store } from "../stores";
import {Answer, formatSuggestion, Suggestion} from "../types/index";
import { HTTPMethods, makeRequest } from "./request";


namespace SuggestionsController {
    export async function getSuggestions(page:number = 0, limit:number = 10): Promise<any[]> {
        
        let suggestions = await makeRequest<Suggestion[]>(HTTPMethods.GET, "/suggestion?page=" + page + "&limit=" + limit);
        let formatSuggestions = suggestions.map(formatSuggestion);

        store.commit('setSuggestions', formatSuggestions);

        return formatSuggestions;
    }

    export async function addSuggestions(page:number = 0, limit:number = 10): Promise<any[]> {
        
        let suggestions = await makeRequest<Suggestion[]>(HTTPMethods.GET, "/suggestion?page=" + page + "&limit=" + limit);
        let formatSuggestions = suggestions.map(formatSuggestion);

        store.commit('addSuggestions', formatSuggestions);

        return formatSuggestions;
    } 

    export async function answer(answer:Answer, suggestionToAnswer:Suggestion):Promise<Answer> {
        
        let res = await makeRequest<Answer>(HTTPMethods.POST, "/answer", {title: answer.title, message: answer.message, suggestion_id: answer.suggestion_id});

        store.commit('answerToSuggestion', {suggestionToAnswer, answer});

        return res;

    }
}

export default SuggestionsController;