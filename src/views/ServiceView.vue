<template>
  <section class="py-16 px-4 md:px-16 bg-[#16161A] text-white min-h-screen">
    <!-- Judul Section -->
    <div class="text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-extrabold text-[#7F5AF0]">Jasa Digital</h1>
      <p class="text-gray-400 mt-2 text-sm md:text-base">Layanan digital lengkap dari desain, branding, hingga pengembangan web dan konten visual.</p>
    </div>

    <!-- Grid Jasa -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="jasa in services"
        :key="jasa.id"
        class="bg-[#1E1E24] p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
      >
        <img
          :src="jasa.gambar"
          :alt="jasa.nama"
          class="w-full h-40 object-cover rounded mb-4 border border-[#2CB67D]/10"
        />

        <div class="flex-1">
          <h2 class="text-xl font-semibold text-white">{{ jasa.nama }}</h2>
          <p class="text-sm text-gray-400 mt-1 mb-3">{{ jasa.deskripsi }}</p>
          <p class="text-[#2CB67D] font-bold text-lg">Rp{{ formatHarga(jasa.harga) }}</p>
        </div>

        <!-- Tombol Pesan -->
        <button
          @click="bukaForm(jasa)"
          class="mt-5 w-full bg-[#7F5AF0] hover:bg-purple-700 transition text-white font-semibold py-2 rounded"
        >
          Pesan Sekarang
        </button>
      </div>
    </div>

    <!-- Komponen Form Order -->
    <OrderForm
      :show="formTerbuka"
      :produk="jasaDipilih"
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
const { services } = storeToRefs(productStore)

const formTerbuka = ref(false)
const jasaDipilih = ref({})

function bukaForm(jasa) {
  jasaDipilih.value = jasa
  formTerbuka.value = true
}

function formatHarga(harga) {
  return Number(harga).toLocaleString('id-ID')
}
</script>
