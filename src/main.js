import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // 引入我們配置的路由

// 創建 Vue 應用實例，並使用路由
createApp(App)
    .use(router)  // 使用 use() 方法來安裝路由插件
    .mount('#app');  // 掛載到 public/index.html 中 id 為 "app" 的元素上
