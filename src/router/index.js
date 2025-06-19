import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import ServiceView from '@/views/ServiceView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import TrackingView from '@/views/TrackingView.vue'
import AdminView from '@/views/AdminView.vue' // ✅ Tambah import ini

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/produk', name: 'Produk', component: ProductView },
  { path: '/jasa', name: 'Jasa', component: ServiceView },
  { path: '/tentang', name: 'Tentang', component: AboutView },
  { path: '/kontak', name: 'Kontak', component: ContactView },
  { path: '/tracking', name: 'Tracking', component: TrackingView },
  { path: '/admin', name: 'Admin', component: AdminView } // ✅ Tambah route ini
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
