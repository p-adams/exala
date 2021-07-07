import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Resources from "../components/Resources.vue";
import Start from "../components/Start.vue";
import Types from "../components/Types.vue";
import Transfer from "../components/Transfer.vue";
const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
    children: [
      { path: "/start", component: Start, name: "start" },
      { path: "/types", component: Types, name: "types_of_filth" },
      { path: "/transfer", component: Transfer, name: "transfer_type" },
    ],
  },
  { path: "/resources", component: Resources, name: "resources" },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
