import { createApp } from 'vue';

import router from './router/index.js';
import App from "./app.vue";

var app = createApp(App).use(router);

app.mount('#app');