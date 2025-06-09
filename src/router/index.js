import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductView from '../views/ProductView.vue'
import TeamView from '../views/TeamView.vue'
import CommentView from '../views/CommentView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import OrderHistoryView from '@/views/OrderHistoryView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'        // Tambah register
import ProfileView from '@/views/ProfileView.vue'          // Tambah profile
import ResetPasswordView from '@/views/ResetPasswordView.vue' // Tambah reset password
import ProductDetailView from '@/views/ProductDetailView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/product', name: 'Product', component: ProductView },
  { path: '/team', name: 'Team', component: TeamView },
  { path: '/comments', name: 'Comments', component: CommentView },
  { path: '/checkout', name: 'Checkout', component: CheckoutView },
  { path: '/orders', name: 'Orders', component: OrderHistoryView },

  { path: '/login', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/profile', name: 'Profile', component: ProfileView },
  { path: '/reset-password', name: 'ResetPassword', component: ResetPasswordView },
  { path: '/productdetail/:id', name: 'productdetail', component: ProductDetailView },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
