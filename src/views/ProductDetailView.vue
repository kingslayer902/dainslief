<template>
  <div class="max-w-4xl mx-auto p-6">
    <button @click="$router.back()" class="mb-4 text-blue-600 underline">← Kembali</button>

    <div v-if="loading" class="text-center">Loading produk...</div>
    <div v-else-if="!product" class="text-center text-red-600">Produk tidak ditemukan.</div>
    <div v-else class="flex flex-col md:flex-row gap-8">
      <!-- Gambar Produk -->
      <img :src="product.image" :alt="product.title" class="w-full md:w-1/2 object-contain" />

      <!-- Detail Produk -->
      <div class="md:w-1/2">
        <h1 class="text-3xl font-bold mb-4">{{ product.title }}</h1>
        <p class="mb-4 text-gray-700">{{ product.description }}</p>
        <p class="text-2xl font-semibold text-green-600 mb-6">{{ formatRupiah(product.price) }}</p>

        <!-- Tombol Favorite -->
        <button
          @click="wishlist.toggleWishlist(product)"
          class="mb-6 text-red-500 text-xl hover:scale-110 transition"
        >
          {{ wishlist.isFavorite(product.id) ? '❤️ Favorit' : '🤍 Tambahkan ke Favorit' }}
        </button>

        <div class="flex gap-4">
          <button
            @click="addToCart(product)"
            class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            Tambah ke Cart
          </button>

          <button
            @click="buyNow(product)"
            class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 cursor-pointer"
          >
            Beli Langsung
          </button>
        </div>
      </div>
    </div>

    <!-- Review Section -->
    <div class="my-10">
      <h2 class="text-xl font-bold mb-2">Tulis Review:</h2>
      <textarea
        v-model="newReview"
        placeholder="Tulis ulasanmu di sini..."
        class="w-full p-3 border rounded mb-2"
        rows="3"
      ></textarea>

      <!-- Rating Bintang -->
      <div class="flex items-center mb-2">
        <span class="mr-2">Rating:</span>
        <span
          v-for="n in 5"
          :key="n"
          @click="selectedRating = n"
          class="cursor-pointer text-2xl"
          :class="n <= selectedRating ? 'text-yellow-400' : 'text-gray-300'"
        >
          ★
        </span>
      </div>

      <button
        @click="submitReview"
        class="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 cursor-pointer"
      >
        Kirim Review
      </button>

      <div v-if="reviews.length" class="mt-6">
        <h3 class="text-lg font-semibold mb-2">Semua Review:</h3>
        <div
          v-for="(review, index) in reviews"
          :key="index"
          class="border-b py-3"
        >
          <p class="text-pink-600 font-bold">{{ review.name }}</p>
          <p class="text-yellow-400 text-lg">
            {{ '★'.repeat(review.rating || 0) }}
            <span class="text-gray-300">{{ '★'.repeat(5 - (review.rating || 0)) }}</span>
          </p>
          <p class="text-gray-800">{{ review.text }}</p>
          <p class="text-xs text-gray-400">{{ review.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import { useCartStore } from '../stores/cart'
import { useWishlistStore } from '../stores/wishlist'
import { useUserStore } from '../stores/user'
import { toast } from 'vue3-toastify'

const route = useRoute()
const router = useRouter()
const cart = useCartStore()
const wishlist = useWishlistStore()
const userStore = useUserStore()
const user = userStore.user

const product = ref(null)
const loading = ref(true)
const productId = route.params.id

// Review
const newReview = ref('')
const selectedRating = ref(0)
const reviews = ref([])

onMounted(async () => {
  loading.value = true
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    product.value = res.data
    loadReviews()
  } catch (error) {
    console.error('Error fetch product:', error)
    product.value = null
  } finally {
    loading.value = false
  }
})

function loadReviews() {
  const stored = JSON.parse(localStorage.getItem(`reviews-${productId}`)) || []
  reviews.value = stored
}

function submitReview() {
  if (!newReview.value.trim() || selectedRating.value === 0) {
    toast.error('Harap isi review dan pilih rating!')
    return
  }

  const reviewData = {
    name: user?.name || user?.email || 'Anonim',
    text: newReview.value,
    rating: selectedRating.value,
    date: new Date().toLocaleString()
  }

  reviews.value.push(reviewData)
  localStorage.setItem(`reviews-${productId}`, JSON.stringify(reviews.value))
  newReview.value = ''
  selectedRating.value = 0
  toast.success('Review berhasil dikirim!')
}

function formatRupiah(value) {
  const idr = value * 15000
  return idr.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
}

function addToCart(product) {
  cart.addToCart(product)
  toast.success(`Berhasil tambah "${product.title}" ke keranjang!`, { autoClose: 2000 })
}

function buyNow(product) {
  cart.clearCart()
  cart.addToCart(product)
  router.push('/checkout')
}
</script>
