// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductView from '../views/ProductView.vue'
import TeamView from '../views/TeamView.vue'
import CommentView from '../views/CommentView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import OrderHistoryView from '@/views/OrderHistoryView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ResetPasswordView from '@/views/ResetPasswordView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import CartView from '@/views/CartView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/product', name: 'Product', component: ProductView },
  { path: '/team', name: 'Team', component: TeamView },
  { path: '/comments', name: 'Comments', component: CommentView },
  { path: '/checkout', name: 'Checkout', component: CheckoutView, meta: { requiresAuth: true } },
  { path: '/orders', name: 'Orders', component: OrderHistoryView, meta: { requiresAuth: true } },

  { path: '/login', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/profile', name: 'Profile', component: ProfileView, meta: { requiresAuth: true } },
  { path: '/reset-password', name: 'ResetPassword', component: ResetPasswordView },
  { path: '/productdetail/:id', name: 'productdetail', component: ProductDetailView },
  {path: '/cart',name: 'cart', component: CartView},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Route Guard untuk proteksi halaman
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    next({ name: 'Login' }) // redirect ke login jika belum login
  } else {
    next()
  }
})

export default router
