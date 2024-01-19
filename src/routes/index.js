import { createWebHistory, createRouter } from "vue-router";
import sendandreceivevideos from "../components/sendandreceivevideos/sendandreceivevideos.vue";
import home from "../components/home.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/sendandreceivevideos",
    name: "sendandreceivevideos",
    component: sendandreceivevideos,
  },
];

const router = createRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  history: createWebHistory(),
  routes,
});

export default router;
