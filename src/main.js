import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./global-styles/colors.scss";
import "./global-styles/tokens.scss";
import IconBase from "@/components/elements/IconBase.vue";

createApp(App)
	.use(IconBase, { tagName: "icon-base" })
	.use(store)
	.use(router)
	.mount("#app");
