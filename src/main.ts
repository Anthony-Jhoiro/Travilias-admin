import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheck,
  faLanguage,
  faReply,
  faThumbtack
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Button from "primevue/button";
import Card from "primevue/card";
import Chip from "primevue/chip";
import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";
import Galleria from "primevue/galleria";
import InputText from "primevue/inputtext";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/md-dark-indigo/theme.css";
import Tag from "primevue/tag";
import Textarea from "primevue/textarea";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import { createApp } from "vue";
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App.vue'
import router from './router'
//@ts-ignore
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/md-dark-indigo/theme.css';
import "primevue/resources/primevue.min.css";

import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'



import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Toast from 'primevue/toast';
//@ts-ignore
import ToastService from 'primevue/toastservice';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import App from "./App.vue";
import { KeycloakProvider } from "./keycloak-provider";
import router from "./router";
import { authenticationStore } from "./stores/authenticationStore";

library.add(faLanguage);
library.add(faReply);
library.add(faThumbtack);
library.add(faCheck);

KeycloakProvider((keycloak) => {
  createApp(App)
    // Add primevue elements
    .use(PrimeVue)
    .use(ToastService)
    .component("Card", Card)
    .component("Tag", Tag)
    .component("Toast", Toast)
    .component("Dialog", Dialog)
    .component("Button", Button)
    .component("InputText", InputText)
    .component("Textarea", Textarea)
    .component("Galleria", Galleria)
    .component("Chip", Chip)

    // Add font awesome
    .component("font-awesome-icon", FontAwesomeIcon)

    // Add router
    .use(router)

    // Add prifile injection
    .provide('keycloak', keycloak)

    // Add stores
    .use(authenticationStore)
    
    .mount("#app");
});
