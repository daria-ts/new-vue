import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./global-styles/styles.scss";
import IconBase from "@/components/elements/IconBase.vue";
import Icon from "@/components/elements/Icon.vue";
import Bttn from "@/components/elements/ButtonBase.vue";
import Input from "@/components/elements/InputBase.vue";
import GoTrue from "gotrue-js";
import vueConfig from "./vue.config";

//netlify identity
export const auth = new GoTrue({
	APIUrl: "https://lk-ts.netlify.app/.netlify/identity",
	setCookie: true,
});

createApp(App)
	.use(Icon)
	.use(IconBase, { tagName: "icon-base" })
	.use(Bttn, { tagName: "bttn" })
	.use(Input, { tagName: "input" })
	.use(store)
	.use(router)
	.mount("#app");
