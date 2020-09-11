import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/homepage",
      name: "homepage",
      component: () => import("./components/Homepage")
    }
  ]
})
