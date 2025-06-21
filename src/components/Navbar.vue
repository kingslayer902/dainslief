<template>
  <nav class="bg-[#16161A] text-[#F9F9F9] shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <RouterLink
        to="/"
        class="text-2xl font-bold text-[#7F5AF0] tracking-wide hover:text-[#2CB67D] transition"
      >
        Dainsleif
      </RouterLink>

      <!-- Tombol Hamburger / Close -->
      <button class="md:hidden focus:outline-none" @click="menuTerbuka = !menuTerbuka">
        <svg v-if="!menuTerbuka" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Menu Desktop -->
      <ul class="hidden md:flex space-x-6 text-sm font-semibold">
        <li><RouterLink to="/" class="hover:text-[#2CB67D] transition">Home</RouterLink></li>
        <li><RouterLink to="/produk" class="hover:text-[#2CB67D] transition">Produk</RouterLink></li>
        <li><RouterLink to="/jasa" class="hover:text-[#2CB67D] transition">Jasa</RouterLink></li>
        <li><RouterLink to="/tentang" class="hover:text-[#2CB67D] transition">Tentang</RouterLink></li>
        <li><RouterLink to="/kontak" class="hover:text-[#2CB67D] transition">Kontak</RouterLink></li>
      </ul>
    </div>

    <!-- Menu Mobile -->
    <transition name="slide-fade">
      <div v-if="menuTerbuka" class="md:hidden px-6 pb-4">
        <ul class="flex flex-col space-y-3 text-sm font-semibold">
          <li><RouterLink @click="tutup" to="/" class="hover:text-[#2CB67D]">Home</RouterLink></li>
          <li><RouterLink @click="tutup" to="/produk" class="hover:text-[#2CB67D]">Produk</RouterLink></li>
          <li><RouterLink @click="tutup" to="/jasa" class="hover:text-[#2CB67D]">Jasa</RouterLink></li>
          <li><RouterLink @click="tutup" to="/tentang" class="hover:text-[#2CB67D]">Tentang</RouterLink></li>
          <li><RouterLink @click="tutup" to="/kontak" class="hover:text-[#2CB67D]">Kontak</RouterLink></li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuTerbuka = ref(false)
function tutup() {
  menuTerbuka.value = false
}
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
