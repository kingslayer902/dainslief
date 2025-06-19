<template>
  <nav class="bg-[#16161A] text-[#F9F9F9] shadow-md sticky top-0 z-50">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo bisa klik ke Home -->
      <RouterLink
        to="/"
        class="text-2xl font-bold text-[#7F5AF0] tracking-wide hover:text-[#2CB67D]"
      >
        Dainsleif
      </RouterLink>

      <!-- Tombol burger untuk mobile -->
      <button class="md:hidden" @click="menuTerbuka = !menuTerbuka">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Menu Desktop -->
      <ul class="hidden md:flex space-x-6 text-sm font-semibold">
        <li><RouterLink to="/" class="hover:text-[#2CB67D]">Home</RouterLink></li>
        <li><RouterLink to="/produk" class="hover:text-[#2CB67D]">Produk</RouterLink></li>
        <li><RouterLink to="/jasa" class="hover:text-[#2CB67D]">Jasa</RouterLink></li>
        <li><RouterLink to="/tentang" class="hover:text-[#2CB67D]">Tentang</RouterLink></li>
        <li><RouterLink to="/kontak" class="hover:text-[#2CB67D]">Kontak</RouterLink></li>
      </ul>
    </div>

    <!-- Menu Mobile -->
    <div v-if="menuTerbuka" class="md:hidden px-6 pb-4">
      <ul class="flex flex-col space-y-2 text-sm font-semibold">
        <li><RouterLink @click="tutup" to="/">Home</RouterLink></li>
        <li><RouterLink @click="tutup" to="/produk">Produk</RouterLink></li>
        <li><RouterLink @click="tutup" to="/jasa">Jasa</RouterLink></li>
        <li><RouterLink @click="tutup" to="/tentang">Tentang</RouterLink></li>
        <li><RouterLink @click="tutup" to="/kontak">Kontak</RouterLink></li>
      </ul>
    </div>
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
