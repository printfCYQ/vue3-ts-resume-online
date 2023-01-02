import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import 'uno.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import "nprogress/nprogress.css"; // 进度条组件

const meta = document.createElement('meta')
meta.name = 'naive-ui-style'
document.head.appendChild(meta)

const store = createPinia()
const app = createApp(App)

store.use(piniaPluginPersistedstate)

app.use(router)
app.use(store)
app.mount('#app')
