import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./global-styles/colors.scss";
// import "./global-styles/typography.scss";
import "./global-styles/tokens.scss";
import { VueSvgIconPlugin } from "@yzfe/vue3-svgicon";
import "@yzfe/svgicon/lib/svgicon.css";

createApp(App)
	.use(VueSvgIconPlugin, { tagName: "icon-name" })
	.use(store)
	.use(router)
	.mount("#app");
