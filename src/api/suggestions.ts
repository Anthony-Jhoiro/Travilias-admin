import axios, { AxiosError, AxiosRequestConfig } from "axios";
import {Answer, Suggestion} from "../types/index";
import { HTTPMethods, makeRequest } from "./request";


namespace SuggestionsController {
    export async function getSuggestions(page:number = 0, limit:number = 10): Promise<any[]> {
        
        let suggestions = await makeRequest<Suggestion[]>(HTTPMethods.GET, "/suggestion?page=" + page + "&limit=" + limit);
        return suggestions;
    }

    export async function answer(answer:Answer):Promise<Answer> {
        
        let res = await makeRequest<Answer>(HTTPMethods.POST, "/answer", {title: answer.title, message: answer.message, suggestion_id: answer.suggestion_id});
        return res;

    }
}

export default SuggestionsController;