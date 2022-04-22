import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BulletinBoard from "@/views/BulletinBoard.vue";
import Register from "@/views/Register.vue";
import Notice from "@/views/Notice.vue";
import MainCalendar from "@/components/MainCalendar.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/notice",
    name: "notice",
    component: Notice,
    children: [
      {
        path: "/calendar",
        name: "calendar",
        component: MainCalendar,
      },
    ],
  },
  {
    path: "/bulletin-board",
    name: "bulletinBoard",
    component: BulletinBoard,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
