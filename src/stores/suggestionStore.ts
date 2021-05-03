import { Answer, Suggestion } from "../types";

export interface SuggestionsStore {
  suggestions: Suggestion[];
}

export const suggestionsStore = {
  state: () => ({
    suggestions: [],
  }),
  mutations: {
    setSuggestions(state:SuggestionsStore, suggestions:Suggestion[]){
      state.suggestions = suggestions;
    },
    addSuggestions(state:SuggestionsStore, suggestions:Suggestion[]){
      state.suggestions = state.suggestions.concat(suggestions);
    },
    answerToSuggestion(state:SuggestionsStore, options:{suggestionToAnswer:Suggestion, answer:Answer}){
      const index = state.suggestions.indexOf(options.suggestionToAnswer);
      if(index != -1){
        state.suggestions[index].answer = options.answer;
      }
      else {
        throw new Error("answerToSuggestion : suggestion non trouvée dans la liste");
      }
    }
  },

  getters: {
    getSuggestions(state:SuggestionsStore){
      return state.suggestions;
    },
  }
};