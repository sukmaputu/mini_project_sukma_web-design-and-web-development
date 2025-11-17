import { createRouter, createWebHistory } from "vue-router";
import Home from "../Views/HomeApp.vue";
import About from "../Views/AboutApp.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
