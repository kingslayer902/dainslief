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

      <ul class="hidden md:flex space-x-8 text-white font-semibold items-center">
        <li><RouterLink to="/" class="hover:text-yellow-300 transition">Home</RouterLink></li>
        <li><RouterLink to="/about" class="hover:text-yellow-300 transition">About</RouterLink></li>
        <li><RouterLink to="/product" class="hover:text-yellow-300 transition">Product</RouterLink></li>
        <li><RouterLink to="/team" class="hover:text-yellow-300 transition">Team</RouterLink></li>
        <li><RouterLink to="/comments" class="hover:text-yellow-300 transition">Comments</RouterLink></li>
        <li><RouterLink to="/checkout" class="hover:text-yellow-300 transition">Checkout</RouterLink></li>
        <li><RouterLink to="/orders" class="hover:text-yellow-300 transition">Order History</RouterLink></li>

        <!-- Cart Icon -->
        <li>
          <RouterLink to="/cart" class="relative flex items-center hover:text-yellow-300 transition">
            🛒
            <span
              v-if="cartCount > 0"
              class="ml-1 text-sm bg-yellow-300 text-black px-2 py-0.5 rounded-full"
            >
              {{ cartCount }}
            </span>
          </RouterLink>
        </li>

        <!-- Jika user sudah login -->
        <template v-if="user">
          <li class="flex items-center space-x-2">
            <img :src="user.photoURL || 'https://via.placeholder.com/40'" class="w-8 h-8 rounded-full border" />
            <span class="text-yellow-300">{{ user.name || user.email }}</span>
          </li>
          <li><RouterLink to="/profile" class="hover:text-yellow-300 transition">Profile</RouterLink></li>
          <li>
            <button @click="logout" class="hover:text-yellow-300 transition bg-transparent border-none cursor-pointer">
              Logout
            </button>
          </li>
        </template>

        <!-- Jika user belum login -->
        <template v-else>
          <li><RouterLink to="/login" class="hover:text-yellow-300 transition">Login</RouterLink></li>
          <li><RouterLink to="/register" class="hover:text-yellow-300 transition">Register</RouterLink></li>
        </template>
      </ul>

      <!-- Tombol menu mobile -->
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

    <!-- Mobile menu -->
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
        <li><RouterLink @click.native="toggleMenu" to="/checkout" class="block hover:text-yellow-300 transition">Checkout</RouterLink></li>
        <li><RouterLink @click.native="toggleMenu" to="/orders" class="block hover:text-yellow-300 transition">Order History</RouterLink></li>

        <!-- Cart Icon Mobile -->
        <li>
          <RouterLink @click.native="toggleMenu" to="/cart" class="block hover:text-yellow-300 transition">
            🛒 Cart
            <span
              v-if="cartCount > 0"
              class="ml-1 bg-yellow-300 text-black px-2 py-0.5 rounded-full text-sm"
            >
              {{ cartCount }}
            </span>
          </RouterLink>
        </li>

        <!-- Jika user sudah login -->
        <template v-if="user">
          <li class="flex items-center space-x-2">
            <img :src="user.photoURL || 'https://via.placeholder.com/40'" class="w-8 h-8 rounded-full border" />
            <span class="text-yellow-300">{{ user.name || user.email }}</span>
          </li>
          <li><RouterLink @click.native="toggleMenu" to="/profile" class="block hover:text-yellow-300 transition">Profile</RouterLink></li>
          <li><button @click="logout" class="block underline text-sm hover:text-yellow-400">Logout</button></li>
        </template>

        <!-- Jika user belum login -->
        <template v-else>
          <li><RouterLink @click.native="toggleMenu" to="/login" class="block hover:text-yellow-300 transition">Login</RouterLink></li>
          <li><RouterLink @click.native="toggleMenu" to="/register" class="block hover:text-yellow-300 transition">Register</RouterLink></li>
        </template>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import { useCartStore } from '../stores/cart' // Tambahkan ini

const isOpen = ref(false)
function toggleMenu() {
  isOpen.value = !isOpen.value
}

const router = useRouter()
const userStore = useUserStore()
const user = computed(() => userStore.user)

function logout() {
  userStore.logout()
  router.push('/login')
}

// Cart Store
const cartStore = useCartStore()
const cartCount = computed(() => cartStore.count)
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
