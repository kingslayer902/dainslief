<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold mb-6">Produk Kami</h1>

    <div v-if="loading">Memuat produk...</div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="product in products"
        :key="product.id"
        class="border rounded p-4 shadow hover:shadow-lg transition"
      >
        <img :src="product.image" :alt="product.title" class="w-full h-48 object-contain mb-4" />
        <h2 class="text-xl font-semibold mb-2">{{ product.title }}</h2>
        <p class="text-sm text-gray-600 mb-2">{{ product.description.slice(0, 100) }}...</p>
        <p class="text-lg font-bold text-purple-700 mb-4">${{ product.price }}</p>
        <button
          @click="beliProduk(product.title)"
          class="bg-yellow-400 text-purple-900 font-bold py-2 px-4 rounded-full hover:bg-yellow-300 transition cursor-pointer"
        >
          Beli
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
  data() {
    return {
      products: [],
      loading: true,
    }
  },
  methods: {
    beliProduk(nama) {
      toast.success(`Pembelian ${nama} berhasil! 🎉`, {
        autoClose: 3000,
        position: "top-right",
      });
    }
  },
  mounted() {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        this.products = res.data
        this.loading = false
      })
      .catch(err => {
        console.error(err)
        this.loading = false
      })
  }
}
</script>

<style scoped>
/* Tambahkan styling jika dibutuhkan */
</style>
