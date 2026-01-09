import { createRouter, createWebHistory } from "vue-router";
import Home from "../Views/HomeApp.vue";
import About from "../views/AboutApp.vue";
import FAQ from "../views/FaqApp.vue";
import RSVP from "../views/RsvpForm.vue"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/faq", name: "FAQ", component: FAQ },
  { path: "/rsvp", name: "RSVP", component: RSVP },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
