import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Types from "../components/Types.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/types", component: Types },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
