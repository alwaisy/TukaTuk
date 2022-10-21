import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { Icon } from "@iconify/vue";
import { createHead } from "@vueuse/head";

import "./assets/css/tailwind.css";

const app = createApp(App);
const head = createHead();

// global components
app.component("Icon", Icon);

app.use(createPinia());
app.use(router);
app.use(head);

app.mount("#app");
