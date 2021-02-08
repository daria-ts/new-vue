import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./global-styles/colors.scss";
// import "./global-styles/typography.scss";
import "./global-styles/tokens.scss";
import IconBase from "@/components/IconBase.vue";
Vue.component("icon-base", IconBase);

createApp(App)
	.use(store)
	.use(router)
	.mount("#app");
