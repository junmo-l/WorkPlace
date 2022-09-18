import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import headerT from "@/components/mainPage/headerT";
import sectionB from "@/components/mainPage/sectionB";
import articleB from "@/components/mainPage/articleB";
import footerB from "@/components/mainPage/footerB";

const app = createApp(App);

app.component("headerT", headerT);
app.component("sectionB", sectionB);
app.component("articleB", articleB);
app.component("footerB", footerB);
app.use(store).use(BootstrapVue3).use(router).mount("#app");
