import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./global-styles/styles.scss";
import IconBase from "@/components/elements/IconBase.vue";
import Icon from "@/components/elements/Icon.vue";

createApp(App)
	.use(Icon, IconBase, { tagName: "icon-base" })
	.use(store)
	.use(router)
	.mount("#app");
