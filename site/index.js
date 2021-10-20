import { createApp } from 'vue';

import router from './router/index.js';
// import Antd from 'ant-design-vue';
import App from "./app.vue";
// import 'ant-design-vue/dist/antd.css';
import LixiUiVue from '../src/index.js'
import demoBlock from './components/demo-block/index.vue'
import icon from './icon.json'

import './style/index.scss'

var app = createApp(App);
app.config.globalProperties.$icon = icon
app.component('DemoBlock', demoBlock)
// .use(Antd)
app.use(router).use(LixiUiVue);

app.mount('#app');