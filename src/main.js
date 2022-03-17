import { createApp } from 'vue'

import store from './store'


import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import Antd from 'ant-design-vue';
import 'lib-flexible'
import App from './App.vue'
import router from './router'
createApp(App).use(store).use(router).use(Antd).mount('#app')
