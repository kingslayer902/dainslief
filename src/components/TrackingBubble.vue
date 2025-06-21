<template>
  <div class="fixed bottom-20 right-4 z-50">
    <!-- Tombol Bubble -->
    <button
      @click="toggle"
      class="p-3 rounded-full bg-[#2CB67D] text-white shadow-lg hover:bg-emerald-600 transition"
      title="Cek Status Pesanan"
    >
      📦
    </button>

    <!-- Panel Tracking -->
    <transition name="fade-slide">
      <div
        v-if="show"
        class="mt-3 w-72 p-4 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-black space-y-2"
      >
        <div class="font-bold text-[#7F5AF0] text-base flex items-center gap-2">
          <span>📦 Status Pesanan</span>
        </div>

        <div v-if="order.nama">
          <p><strong>Nama:</strong> {{ order.nama }}</p>
          <p><strong>Produk:</strong> {{ order.produk || '-' }}</p>
          <p><strong>Status:</strong> 
            <span
              :class="{
                'text-yellow-600': order.status === 'Diproses',
                'text-green-600': order.status === 'Selesai',
                'text-red-600': order.status === 'Gagal',
              }"
            >
              {{ order.status }}
            </span>
          </p>
          <p class="text-xs text-gray-500">Estimasi: {{ order.estimasi || '-' }}</p>
        </div>

        <div v-else class="text-sm text-gray-500 italic">
          Belum ada pesanan yang dilacak.
        </div>
      </div>
    </transition>
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

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
