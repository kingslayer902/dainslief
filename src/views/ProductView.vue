<template>
  <section class="py-16 px-4 md:px-16 bg-[#16161A] text-white min-h-screen">
    <!-- Judul Section -->
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-extrabold text-[#7F5AF0]">Produk Digital</h1>
      <p class="text-gray-400 mt-2 text-sm md:text-base">Solusi digital siap pakai, didesain untuk mempermudah bisnis & personal branding Anda.</p>
    </div>

    <!-- Kartu Produk -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div
        v-for="produk in products"
        :key="produk.id"
        class="bg-[#1E1E24] p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
      >
        <img
          :src="produk.gambar"
          :alt="produk.nama"
          class="w-full h-40 object-cover rounded mb-4 border border-[#2CB67D]/10"
        />
        
        <div class="flex-1">
          <h2 class="text-xl font-semibold text-white">{{ produk.nama }}</h2>
          <p class="text-sm text-gray-400 mt-1 mb-3">{{ produk.deskripsi }}</p>

          <!-- Harga Produk -->
          <div v-if="produk.isPromo">
            <p class="text-sm text-gray-500 line-through">
              Rp{{ formatHarga(produk.harga) }}
            </p>
            <p class="text-[#2CB67D] font-bold text-lg">
              Rp{{ formatHarga(produk.harga - produk.harga * produk.diskon / 100) }}
            </p>
          </div>
          <p v-else class="text-[#2CB67D] font-bold text-lg">
            Rp{{ formatHarga(produk.harga) }}
          </p>
        </div>

        <!-- Tombol Pesan -->
        <button
          @click="bukaForm(produk)"
          class="mt-5 w-full bg-[#7F5AF0] hover:bg-purple-700 transition text-white font-semibold py-2 rounded"
        >
          Pesan Sekarang
        </button>
      </div>
    </div>

    <!-- Komponen Form Order -->
    <OrderForm
      :show="formTerbuka"
      :produk="produkDipilih"
      @close="formTerbuka = false"
    />
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
const produkDipilih = ref({})

function bukaForm(produk) {
  produkDipilih.value = produk
  formTerbuka.value = true
}

function formatHarga(harga) {
  return Number(harga).toLocaleString('id-ID')
}
</script>
