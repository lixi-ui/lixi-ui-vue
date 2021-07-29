import { createApp } from 'vue';

import router from './router/index.js';
import Antd from 'ant-design-vue';
import App from "./app.vue";
import 'ant-design-vue/dist/antd.css';
import Button from '../src/button/package/index.js';

var app = createApp(App).use(router).use(Antd).use(Button);

app.mount('#app');