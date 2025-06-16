<template> 
  <div class="p-6 max-w-5xl mx-auto">
    <h1 class="text-3xl font-bold mb-6">Produk</h1>

    <!-- Filter kategori responsive scroll -->
    <div class="mb-4 w-full overflow-auto">
      <div class="flex space-x-4 w-max">
        <button @click="selectedCategory = ''" :class="btnClass('')">Semua</button>
        <button @click="selectedCategory = 'men clothing'" :class="btnClass('men clothing')">Baju Pria</button>
        <button @click="selectedCategory = 'women clothing'" :class="btnClass('women clothing')">Baju Wanita</button>
        <button disabled title="Kategori belum tersedia" :class="btnClass('kids clothing')">Baju Anak (coming soon)</button>
      </div>
    </div>

    <!-- Input pencarian -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Cari produk..."
      class="mb-6 w-full p-2 border rounded"
    />

    <div v-if="loading" class="text-center text-gray-500">Loading...</div>

    <div v-else>
      <div v-if="filteredProducts.length === 0" class="text-center text-gray-600">
        Produk tidak ditemukan.
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="border rounded-lg p-4 flex flex-col items-center shadow hover:shadow-lg transition"
        >
          <img
            :src="product.image"
            :alt="product.title"
            class="w-32 h-32 object-contain mb-4 cursor-pointer"
            @click="goToDetail(product.id)"
          />
          <h2
            class="text-lg font-semibold text-center mb-1 cursor-pointer"
            @click="goToDetail(product.id)"
          >
            {{ product.title }}
          </h2>

          <div class="text-yellow-500 text-sm mb-2">
            ★ {{ getAverageRating(product.id) }}
          </div>

          <button
            @click="wishlist.toggleWishlist(product)"
            class="text-red-500 text-xl mb-2 hover:scale-110 transition"
            :title="wishlist.isFavorite(product.id) ? 'Hapus dari Favorite' : 'Tambahkan ke Favorite'"
          >
            {{ wishlist.isFavorite(product.id) ? '❤️' : '🤍' }}
          </button>

          <p class="text-green-600 font-bold mb-4">{{ formatRupiah(product.price) }}</p>
          <div class="flex gap-4">
            <button
              @click="addToCart(product)"
              class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
            >
              Tambah ke Cart
            </button>
            <button
              @click="buyNow(product)"
              class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition cursor-pointer"
            >
              Beli Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'
import { useCartStore } from '../stores/cart'
import { useWishlistStore } from '../stores/wishlist'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { useRouter } from 'vue-router'

const products = ref([])
const loading = ref(true)
const selectedCategory = ref('')
const searchQuery = ref('')
const cart = useCartStore()
const wishlist = useWishlistStore()
const router = useRouter()

axios.get('https://fakestoreapi.com/products')
  .then(res => {
    products.value = res.data
  })
  .catch(err => console.error(err))
  .finally(() => {
    loading.value = false
  })

const filteredProducts = computed(() => {
  let filtered = products.value

  if (selectedCategory.value) {
    if (selectedCategory.value === 'men clothing') {
      filtered = filtered.filter(p => p.category === "men's clothing")
    } else if (selectedCategory.value === 'women clothing') {
      filtered = filtered.filter(p => p.category === "women's clothing")
    } else {
      filtered = []
    }
  }

  if (searchQuery.value) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  return filtered
})

function formatRupiah(value) {
  const idr = value * 15000
  return idr.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
}

function addToCart(product) {
  cart.addToCart(product)
  toast.success(`Berhasil tambah "${product.title}" ke keranjang!`, { autoClose: 2000 })
}

function buyNow(product) {
  cart.buyNow(product)
  router.push('/checkout')
}

function goToDetail(id) {
  router.push({ name: 'productdetail', params: { id } })
}

function btnClass(category) {
  return [
    'px-4 py-2 rounded font-semibold border transition',
    selectedCategory.value === category
      ? 'bg-blue-600 text-white border-blue-600'
      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100',
  ].join(' ')
}

// Mendapatkan rating rata-rata dari localStorage
function getAverageRating(productId) {
  const reviews = JSON.parse(localStorage.getItem('reviews') || '[]')
  const filtered = reviews.filter(r => r.productId === productId)
  if (filtered.length === 0) return 'Belum ada'
  const avg = filtered.reduce((sum, r) => sum + r.rating, 0) / filtered.length
  return avg.toFixed(1)
}
</script>
