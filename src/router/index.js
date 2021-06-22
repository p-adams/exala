import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Resources from "../components/Resources.vue";
import Types from "../components/Types.vue";
const routes = [
  {
    path: "/",
    component: Home,
    children: [{ path: "/types", component: Types }],
  },
  { path: "/resources", component: Resources },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
