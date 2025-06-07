import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductView from '../views/ProductView.vue'
import TeamView from '../views/TeamView.vue'
import CommentView from '../views/CommentView.vue'  // Import comment view

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/product', name: 'Product', component: ProductView },
  { path: '/team', name: 'Team', component: TeamView },
  { path: '/comments', name: 'Comments', component: CommentView },  // Route baru untuk comments
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
