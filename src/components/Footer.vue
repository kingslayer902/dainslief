<template>
  <footer class="bg-gradient-to-br from-purple-800 via-pink-600 to-red-500 text-white pt-12 pb-8 px-6 shadow-inner">
    <div class="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
      <!-- Brand -->
      <div>
        <h2 class="text-3xl font-bold mb-2">Dainsleif</h2>
        <p class="text-yellow-300 text-sm">Toko Online Terpercaya untuk Fashion dan Gadget masa kini.</p>
      </div>

      <!-- Kontak -->
      <div>
        <h4 class="text-lg font-semibold mb-3 flex items-center gap-2">
          <Phone class="w-5 h-5" /> Kontak
        </h4>
        <ul class="space-y-2 text-sm">
          <li class="flex items-center gap-2 hover:text-yellow-300 transition">
            <Mail class="w-4 h-4" /> support@dainsleif.com
          </li>
          <li class="flex items-center gap-2 hover:text-yellow-300 transition">
            <PhoneCall class="w-4 h-4" /> 0812-3456-7890
          </li>
        </ul>
      </div>

      <!-- Alamat -->
      <div>
        <h4 class="text-lg font-semibold mb-3 flex items-center gap-2">
          <MapPin class="w-5 h-5" /> Alamat
        </h4>
        <p class="text-sm text-white/90">Jl. Merdeka No. 123</p>
        <p class="text-sm text-white/90">Jakarta, Indonesia</p>
      </div>

      <!-- Halaman -->
      <div>
        <h4 class="text-lg font-semibold mb-3 flex items-center gap-2">
          <Globe class="w-5 h-5" /> Halaman
        </h4>
        <ul class="space-y-2 text-sm">
          <li>
            <RouterLink
              to="/contact"
              class="flex items-center gap-2 text-yellow-300 hover:text-white transition"
            >
              <Send class="w-4 h-4" /> Hubungi Kami
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/tracking"
              class="flex items-center gap-2 text-yellow-300 hover:text-white transition"
            >
              <Search class="w-4 h-4" /> Lacak Pesanan
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/20 mt-10 pt-4 text-center text-sm text-yellow-300">
      &copy; 2025 Dainsleif. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import {
  Mail,
  Phone,
  PhoneCall,
  MapPin,
  Globe,
  Send,
  Search,
} from 'lucide-vue-next'
</script>

<style scoped>
footer {
  border: none !important;
  box-shadow: none !important;
}
</style>
