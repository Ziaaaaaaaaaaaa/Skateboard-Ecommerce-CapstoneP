import HomeViewVue from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeViewVue,
  },
  {
    path: '/about',
    name: 'about',
    component: ()=> import('../views/AboutView.vue')  }
  ,
  {
    path: '/products',
    name: 'products',
    component: ()=> import('../views/ProductsView.vue')
  }
  ,
  {
    path: '/contact',
    name: 'contact',
    component: ()=> import('../views/ContactView.vue')  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('../views/LoginView.vue')  },
  {
    path: '/signup',
    name: 'signup',
    component: ()=> import('../views/SignupView.vue')  },
  {
    path: '/admin',
    name: 'admin',
    component: ()=> import('../views/AdminView.vue')  },
  {
    path: '/checkout',
    name: 'checkout',
    component: ()=> import('../views/CheckoutView.vue')  },
    {
      path: '/product/:prodID',
      name: 'product',
      component: ()=> import('../views/SingleproductsView.vue')
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router