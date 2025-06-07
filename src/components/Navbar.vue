<template>
  <nav class="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div
        class="flex items-center cursor-pointer text-white font-extrabold text-2xl select-none"
        @click="$router.push('/')"
      >
        <span class="text-4xl mr-3 select-none" role="img" aria-label="shopping-bag">🛍️</span>
        <span class="tracking-wide">Dainsleif</span>
      </div>

      <ul class="hidden md:flex space-x-8 text-white font-semibold">
        <li><RouterLink to="/" class="hover:text-yellow-300 transition">Home</RouterLink></li>
        <li><RouterLink to="/about" class="hover:text-yellow-300 transition">About</RouterLink></li>
        <li><RouterLink to="/product" class="hover:text-yellow-300 transition">Product</RouterLink></li>
        <li><RouterLink to="/team" class="hover:text-yellow-300 transition">Team</RouterLink></li>
        <li><RouterLink to="/comments" class="hover:text-yellow-300 transition">Comments</RouterLink></li>
      </ul>

      <button
        @click="toggleMenu"
        class="md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <transition name="slide-fade">
      <ul
        v-if="isOpen"
        class="md:hidden bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white font-semibold px-6 py-4 space-y-4"
      >
        <li><RouterLink @click.native="toggleMenu" to="/" class="block hover:text-yellow-300 transition">Home</RouterLink></li>
        <li><RouterLink @click.native="toggleMenu" to="/about" class="block hover:text-yellow-300 transition">About</RouterLink></li>
        <li><RouterLink @click.native="toggleMenu" to="/product" class="block hover:text-yellow-300 transition">Product</RouterLink></li>
        <li><RouterLink @click.native="toggleMenu" to="/team" class="block hover:text-yellow-300 transition">Team</RouterLink></li>
        <li><RouterLink @click.native="toggleMenu" to="/comments" class="block hover:text-yellow-300 transition">Comments</RouterLink></li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
