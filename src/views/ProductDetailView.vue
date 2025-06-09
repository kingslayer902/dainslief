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

    <!-- Review -->
    <ReviewForm v-if="product" :productId="product.id" @review-submitted="refreshReviews" />
    <ReviewList v-if="product" :productId="product.id" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
import { useCartStore } from '../stores/cart'
import { useWishlistStore } from '../stores/wishlist'
import { toast } from 'vue3-toastify'

import ReviewForm from '../components/ReviewForm.vue'
import ReviewList from '../components/ReviewList.vue'

const route = useRoute()
const router = useRouter()
const cart = useCartStore()
const wishlist = useWishlistStore()

const product = ref(null)
const loading = ref(true)

const productId = route.params.id

onMounted(async () => {
  loading.value = true
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    product.value = res.data
  } catch (error) {
    console.error('Error fetch product:', error)
    product.value = null
  } finally {
    loading.value = false
  }
})

function refreshReviews() {
  // Kosongkan dulu, kalau pakai sistem reactive bisa diisi ulang di sini
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
