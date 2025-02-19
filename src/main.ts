import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(createPinia());
// import router from './router/index'
// App.use(router)
// App.mount('#app')
// createApp(App).mount("#app");
app.mount("#app");
// createApp(App)