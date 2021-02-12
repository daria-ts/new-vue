import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
// import {{ User }} from "../views/User.vue";
import NotFound from "../views/NotFound.vue";
import Login from "../views/SignInFlow/Login.vue";
import Register from "../views/SignInFlow/Register.vue";
import Recover from "../views/SignInFlow/Recover.vue";
import TestOne from "../views/testing/test-one.vue";
import Components from "../views/testing/Components.vue";
// import GoTrue from "gotrue-js";
//TODO: разобраться с пользователем
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/about",
    name: "about",
    component: About
  },
  //{
  //   path: "/user/:user",
  //   name: "user",
  //   component: User,
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover
  },
  {
    path: "/test",
    name: "test",
    component: TestOne
  },
  {
    path: "/components",
    name: "components",
    component: Components
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
