import {Suggestion} from "../types/index";


namespace SuggestionsController {
    export function getSuggestions(): Promise<any[]> {
        return Promise.resolve([
            {
                id:1,
                message:"Dans la polémique qui oppose ses deux professeurs, Bernheim et Charcot, Sigmund Freud prend une position proche de l'École de la Salpêtrière. En 1921, revenant sur cette période, il déclare que sa résistance à la tyrannie de la suggestion s'est « orientée ultérieurement vers la révolte contre le fait que la suggestion, qui expliquerait tout, devrait elle-même être dispensée d'explication ».\nTout comme Charcot, et contrairement à Janet, Bernheim ou Erickson, Freud fait de la suggestibilité un trait caractéristique de l'hypnose, elle-même assimilée à un état pathologique objectivable. Ainsi, en rejetant l'hypnose, il pense se débarrasser de la suggestion.\nPour Freud, la suggestion trouve - comme l'hypnose - une limite dans son application du fait de la variabilité de la suggestibilité des patients. À la suite de Charcot, il considère que le modèle des patients susceptibles d'être influencés devrait être les hystériques mais que, même pour ces personnes, la technique de suggestion et/ou l'hypnose ne fonctionne pas suffisamment pour fonder un traitement. Après l'édification du modèle de la cure psychanalytique, la suggestion devient une sorte de manquement à la position de neutralité de l'analyste qui n'a pas à intervenir dans le processus associatif de son patient.\nNombre de contemporains de Sigmund Freud, tels les psychiatres Eugen Bleuler ou Leopold Löwenfeld considèrent que la suggestion continue à jouer un rôle très important dans l'analyse. Ainsi, Löwenfeld écrit dans un article de 1899 « les patients étaient soumis à une influence suggestive de la part de la personne qui les analysait » et Bleuler en 1896 « il est tout à fait possible que les succès thérapeutiques de la \"méthode cathartique\" soient tout simplement basés sur de la suggestion ». Freud, quant à lui, a toujours maintenu que la suggestion n'intervenait pas dans les interprétations et les constructions analytiques.\nPlus récemment, des analystes comme Michel Neyraut ou René Roussillon entre autres, considèrent que la psychanalyse n'en a pas terminé avec la question de l'impact de la suggestion. De son côté, François Roustang, dans son article Suggestion au long cours, publié en 1978 dans la Nouvelle Revue de Psychanalyse, souligne le rôle de la suggestion dans la cure psychanalytique. Cet article sera repris en 1980 dans son livre Elle ne le lâche plus.... Mikkel Borch-Jacobsen souligne en 2002 que « le refus de Freud de reconnaître le rôle de la suggestion correspond théoriquement à une très profonde objectivation de la relation thérapeutique, comme si la parole des patients ne faisait que reproduire un pur \"mécanisme psychique\" observable de l'extérieur ». ", 
                user: {
                    id: "1",
                    displayedName: "Jhoiro",
                    username: "Jhoiro",
                    email: "Jhoiro@gmail.bk",
                },
                date: "10-02-2021 18:33:30"},
            {id:2,message:"Eh, tu peux rajouter un éléphant dans le site ?", user:{
                id: "1",
                displayedName: "Jhoiro",
                username: "Jhoiro",
                email: "Jhoiro@gmail.bk",
            }, date: "11-02-2021 09:13:44"},
            {id:4,message:"Ma photo n'a pas l'air d'être bien cadré lorsque je 'limporte", user:{
                id: "1",
                displayedName: "Jhoiro",
                username: "Jhoiro",
                email: "Jhoiro@gmail.bk",
            }, date: "11-02-2021 15:06:42"},
            {id:3,message:"Tro bi1 ton apli :)", user:{
                id: "1",
                displayedName: "Jhoiro",
                username: "Jhoiro",
                email: "Jhoiro@gmail.bk",
            }, date: "11-02-2021 18:16:09"},
            {id:6,message:"J'ai eu un problème de connexion toute la journée", user:{
                id: "1",
                displayedName: "Jhoiro",
                username: "Jhoiro",
                email: "Jhoiro@gmail.bk",
            }, date: "11-02-2021 19:56:38"},
        ]);
    }

    export function pinSuggestion(suggestion:Suggestion){
        console.log("appel api...");
        return Promise.resolve({success: true, message: "la suggestion a été pin", detail: ""});
        
    }

    export function answer(answer:any) {
        console.log("appel api...");
        return Promise.resolve({success: true, message: "la réponse a bien été envoyée", detail: ""});
    }
}

export default SuggestionsController;