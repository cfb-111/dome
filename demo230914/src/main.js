// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// 引入router
import router from './router'
//引入pinia
import { createPinia } from 'pinia';
const pinia = createPinia();

//引入element-plus 样式
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(pinia);
app.use(router);
app.mount('#app');
