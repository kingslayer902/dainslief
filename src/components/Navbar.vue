<template>
  <nav class="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <div
        class="flex items-center cursor-pointer text-white font-extrabold text-2xl select-none"
        @click="$router.push('/')"
      >
        <span class="text-4xl mr-3">🛍️</span>
        <span class="tracking-wide">Dainsleif</span>
      </div>

      <!-- Desktop Menu -->
      <ul class="hidden md:flex space-x-8 text-white font-semibold items-center">
        <li><RouterLink to="/" class="hover:text-yellow-300 transition">Home</RouterLink></li>
        <li><RouterLink to="/about" class="hover:text-yellow-300 transition">About</RouterLink></li>
        <li><RouterLink to="/product" class="hover:text-yellow-300 transition">Product</RouterLink></li>
        <li><RouterLink to="/team" class="hover:text-yellow-300 transition">Team</RouterLink></li>
        <li><RouterLink to="/comments" class="hover:text-yellow-300 transition">Comments</RouterLink></li>
        <li><RouterLink to="/checkout" class="hover:text-yellow-300 transition">Checkout</RouterLink></li>
        <li><RouterLink to="/orders" class="hover:text-yellow-300 transition">Order History</RouterLink></li>
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

        <!-- User Info -->
        <template v-if="user">
          <li class="flex items-center space-x-2">
            <img
              :src="user.photoDataURL || 'https://via.placeholder.com/40'"
              class="w-8 h-8 rounded-full border object-cover"
              alt="user"
            />
            <span class="text-yellow-300">{{ user.name || user.email }}</span>
          </li>
          <li><RouterLink to="/profile" class="hover:text-yellow-300 transition">Profile</RouterLink></li>
          <li><button @click="logout" class="hover:text-yellow-300 transition">Logout</button></li>
        </template>

        <template v-else>
          <li><RouterLink to="/login" class="hover:text-yellow-300 transition">Login</RouterLink></li>
        </template>
      </ul>

      <!-- Mobile Menu Toggle -->
      <button @click="toggleMenu" class="md:hidden text-white">
        <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <ul v-if="isOpen" class="md:hidden bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white px-6 py-4 space-y-4">
        <li><RouterLink @click.native="toggleMenu" to="/" class="block">Home</RouterLink></li>
        <li><RouterLink @click.native="toggleMenu" to="/about" class="block">About</RouterLink></li>
        <li><RouterLink @click.native="toggleMenu" to="/product" class="block">Product</RouterLink></li>
        <li><RouterLink @click.native="toggleMenu" to="/team" class="block">Team</RouterLink></li>
        <li><RouterLink @click.native="toggleMenu" to="/comments" class="block">Comments</RouterLink></li>
        <li><RouterLink @click.native="toggleMenu" to="/checkout" class="block">Checkout</RouterLink></li>
        <li><RouterLink @click.native="toggleMenu" to="/orders" class="block">Order History</RouterLink></li>
        <li>
          <RouterLink @click.native="toggleMenu" to="/cart" class="block">
            🛒 Cart
            <span
              v-if="cartCount > 0"
              class="ml-1 bg-yellow-300 text-black px-2 py-0.5 rounded-full text-sm"
            >
              {{ cartCount }}
            </span>
          </RouterLink>
        </li>

        <!-- User Info Mobile -->
        <template v-if="user">
          <li class="flex items-center space-x-2">
            <img
              :src="user.photoDataURL || 'https://via.placeholder.com/40'"
              class="w-8 h-8 rounded-full border object-cover"
              alt="user"
            />
            <span class="text-yellow-300">{{ user.name || user.email }}</span>
          </li>
          <li><RouterLink @click.native="toggleMenu" to="/profile" class="block">Profile</RouterLink></li>
          <li><button @click="logout" class="block">Logout</button></li>
        </template>

        <template v-else>
          <li><RouterLink @click.native="toggleMenu" to="/login" class="block">Login</RouterLink></li>
        </template>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import { useCartStore } from '../stores/cart'

const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)

const router = useRouter()
const userStore = useUserStore()
const user = computed(() => userStore.user)

const logout = () => {
  userStore.logout()
  router.push('/login')
}

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
