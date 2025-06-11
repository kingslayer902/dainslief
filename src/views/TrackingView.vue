<!-- src/views/OrderTrackingView.vue -->
<template>
  <div class="min-h-screen p-6 bg-gradient-to-br from-pink-100 to-purple-200">
    <div class="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
      <h2 class="text-2xl font-bold text-center text-purple-700 mb-6">Tracking Pesanan</h2>
      <input
        v-model="orderId"
        type="text"
        placeholder="Masukkan Order ID"
        class="w-full p-3 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <button
        @click="trackOrder"
        class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        Lacak Pesanan
      </button>

      <div v-if="trackingInfo" class="mt-6 bg-purple-100 p-4 rounded-lg">
        <h3 class="font-semibold text-lg mb-2 text-purple-800">Status Pesanan:</h3>
        <p><strong>ID:</strong> {{ trackingInfo.id }}</p>
        <p><strong>Status:</strong> {{ trackingInfo.status }}</p>
        <p><strong>Perkiraan Tiba:</strong> {{ trackingInfo.eta }}</p>
      </div>

      <div v-if="error" class="mt-4 text-red-500">{{ error }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const orderId = ref('')
const trackingInfo = ref(null)
const error = ref('')

const dummyOrders = [
  { id: 'ORD123', status: 'Dikirim', eta: '3 hari' },
  { id: 'ORD456', status: 'Sedang dikemas', eta: '5 hari' },
  { id: 'ORD789', status: 'Sampai tujuan', eta: 'Sudah diterima' },
]

function trackOrder() {
  error.value = ''
  trackingInfo.value = null
  const result = dummyOrders.find(order => order.id === orderId.value.trim().toUpperCase())
  if (result) {
    trackingInfo.value = result
  } else {
    error.value = 'Order ID tidak ditemukan.'
  }
}
</script>
