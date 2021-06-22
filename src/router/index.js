import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Resources from "../components/Resources.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/resources", component: Resources },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
