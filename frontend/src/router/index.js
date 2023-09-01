import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> import('../views/HomeView.vue')  },
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