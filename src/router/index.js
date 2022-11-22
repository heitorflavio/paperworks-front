import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Login.vue'
import HomePainel from '../views/Painel/Home.vue'
import axios from 'axios'
import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'HomePainel',
    component: HomePainel,
    meta: {
      login: true
    },
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})



router.beforeEach((to, from, next) => {
  // console.log(store.state.base_url)
  // console.log(to.matched)
  // to.matched.some(record => { console.log(record.meta.login) })
  // console.log(to.matched.some(record => { record.meta.login }))
  if (to.matched.some(record => record.meta.login)) {
    // console.log(store.state.base_url+"auth/me")
    console.log('requiresAuth')
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + sessionStorage.getItem("token");
    axios.post(store.state.base_url+"auth/me")
      .then(response => {
        // console.log(response)
        sessionStorage.setItem(
          "session",
          window.btoa(JSON.stringify(response.data))
        );
        next();
      }).catch(error => {
        console.log(error);
        next('/login');
      });

  } else {
    
    next();
  }
})


export default router
