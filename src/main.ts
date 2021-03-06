import { createApp } from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App.vue'
import router from './router'
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
import ToastService from 'primevue/toastservice';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';

library.add(faLanguage);
library.add(faReply);
library.add(faThumbtack);

createApp(App)
    .use(PrimeVue)
    .use(ToastService)
    .component('Card', Card)
    .component('Tag', Tag)
    .component('Toast', Toast)
    .component('Dialog', Dialog)
    .component('Button', Button)
    .component('InputText', InputText)
    .component('Textarea', Textarea)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
