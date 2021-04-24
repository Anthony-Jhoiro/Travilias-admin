import axios, { AxiosError, AxiosRequestConfig } from "axios";
import {Suggestion} from "../types/index";


namespace SuggestionsController {
    export async function getSuggestions(): Promise<any[]> {
        const options: AxiosRequestConfig = {
            method: "GET",
            url: "http://localhost:8080/api/v0/suggestion/",
        };
        let res = {data : []};
        try {
            res = await axios.request(options);
        }
        catch (error){
            console.error({error});            
        }
        finally {
            return res.data;
        }
    }

    export function answer(answer:any) {
        console.log("appel api...");
        return Promise.resolve({success: true, message: "la réponse a bien été envoyée", detail: ""});
    }
}

export default SuggestionsController;