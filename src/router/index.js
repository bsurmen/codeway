import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/pages/Home.vue";
import * as firebase from "firebase/app";
import "firebase/auth";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: () => import("../components/pages/SignIn.vue"),
  },
  {
    path: "/profile",
    name: "Profile",

    meta: { requiresAuth: true },
    component: () => import("../components/pages/Profile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  let userIsLogged = firebase.auth().currentUser;
  if (to.name === "Sign In" && userIsLogged) {
    // Redirect user to homepage
    return next({ path: "/" });
  }
  // Let the user pass
  return next();
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;

  if (requiresAuth && !isAuthenticated) {
    next("/sign-in");
  } else {
    next();
  }
});

export default router;
