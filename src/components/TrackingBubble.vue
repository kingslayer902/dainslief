<template>
  <div class="fixed bottom-20 right-4 z-50">
    <button
      @click="toggle"
      class="p-3 rounded-full bg-[#2CB67D] text-white shadow-lg hover:bg-emerald-600"
    >
      📦
    </button>

    <div
      v-if="show"
      class="mt-2 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-lg text-sm text-black"
    >
      <div class="font-semibold text-[#7F5AF0] mb-1">Status Pesanan</div>
      <p><strong>Nama:</strong> {{ order.nama || 'Belum ada' }}</p>
      <p><strong>Produk:</strong> {{ order.produk || '-' }}</p>
      <p><strong>Status:</strong> {{ order.status }}</p>
      <p class="text-xs text-gray-500 mt-1">Estimasi: {{ order.estimasi }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useOrderStore } from '@/stores/orderStore'
import { storeToRefs } from 'pinia'

const show = ref(false)
const toggle = () => (show.value = !show.value)

const orderStore = useOrderStore()
const { latestOrder: order } = storeToRefs(orderStore)
</script>
