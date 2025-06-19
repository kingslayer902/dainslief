<template>
  <section class="py-12 px-4 md:px-16 bg-[#16161A] text-white min-h-screen">
    <h1 class="text-3xl font-bold text-center text-[#7F5AF0] mb-10">Produk Digital</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="produk in products"
        :key="produk.id"
        class="bg-[#1E1E24] p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
      >
        <img :src="produk.gambar" alt="produk" class="h-40 w-full object-cover rounded mb-3" />
        <div>
          <h2 class="text-xl font-semibold text-white">{{ produk.nama }}</h2>
          <p class="text-sm text-gray-400 my-1">{{ produk.deskripsi }}</p>
          <!-- Promo Badge -->
          <div v-if="produk.isPromo">
            <span class="text-sm text-gray-400 line-through">Rp{{ formatHarga(produk.harga) }}</span>
            <span class="ml-2 text-[#2CB67D] font-bold text-lg">
              Rp{{ formatHarga(produk.harga - produk.harga * produk.diskon / 100) }}
            </span>
          </div>
          <p v-else class="text-[#2CB67D] font-bold text-lg">
            Rp{{ formatHarga(produk.harga) }}
          </p>
        </div>
        <button
          @click="bukaForm(produk.nama)"
          class="mt-4 bg-[#7F5AF0] text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Pesan Sekarang
        </button>
      </div>
    </div>

    <OrderForm :show="formTerbuka" :produkNama="produkDipilih" @close="formTerbuka = false" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/productStore'
import { storeToRefs } from 'pinia'
import OrderForm from '@/components/OrderForm.vue'

const productStore = useProductStore()
const { products } = storeToRefs(productStore)

const formTerbuka = ref(false)
const produkDipilih = ref('')

function bukaForm(namaProduk) {
  produkDipilih.value = namaProduk
  formTerbuka.value = true
}

function formatHarga(harga) {
  return Number(harga).toLocaleString('id-ID')
}
</script>
