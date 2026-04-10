import { createRouter, createWebHistory } from 'vue-router'
import Restaurant from '../Restaurant.vue'
import Login from '../Login.vue'
import App from '../App.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     { path: '/', name: 'Login', component: Login },
    { path: '/restaurant', name: 'Restaurant', component: Restaurant }
  ],
})

export default router
