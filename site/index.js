import { createApp } from 'vue';
import App from "./app.vue";
import LixiUiVue from '../src/index.js';
import router from './router/index.js';
import icon from './icon.json'

import './style/index.scss'
import 'highlight.js/styles/color-brewer.css'

import demoBlock from './components/demo-block/index.vue'
var app = createApp(App);

app.component('DemoBlock', demoBlock)
app.config.globalProperties.$icon = icon
app.use(router).use(LixiUiVue)

app.mount('#app');
