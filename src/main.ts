import { createApp } from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/md-dark-indigo/theme.css';
import "primevue/resources/primevue.min.css";

import ColorPicker from 'primevue/colorpicker';

createApp(App)
    .use(PrimeVue)
    .component('ColorPicker', ColorPicker)
    .use(router)
    .mount('#app')
