<template>
  <div class="max-w-xl mx-auto p-6">
    <h1 class="text-2xl font-bold mb-4">Lacak Pesanan</h1>
    <input
      v-model="trackingCode"
      type="text"
      placeholder="Masukkan Kode Pelacakan (misal: DNX-12345)"
      class="border p-2 rounded w-full mb-4"
    />
    <button
      @click="trackOrder"
      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Cari Pesanan
    </button>

    <div v-if="order" class="mt-6 bg-green-100 p-4 rounded shadow">
      <h2 class="text-lg font-semibold">Status Pesanan</h2>
      <p><strong>Kode:</strong> {{ order.trackingCode }}</p>
      <p><strong>Nama:</strong> {{ order.name }}</p>
      <p><strong>Status:</strong> {{ order.status }}</p>
      <p><strong>Perkiraan Tiba:</strong> {{ order.eta }}</p>
      <p><strong>Tanggal:</strong> {{ order.date }}</p>
      <p><strong>Total:</strong> {{ formatRupiah(order.total) }}</p>

      <p class="mt-2 font-semibold">Item:</p>
      <ul class="list-disc ml-6">
        <li v-for="item in order.items" :key="item.id">
          {{ item.title }} (x{{ item.quantity }}) - {{ formatRupiah(item.price) }}
        </li>
      </ul>
    </div>

    <p v-if="searched && !order" class="text-red-600 mt-4">Pesanan tidak ditemukan.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const trackingCode = ref('')
const order = ref(null)
const searched = ref(false)

function trackOrder() {
  const savedOrders = JSON.parse(localStorage.getItem('trackingOrders') || '[]')
  order.value = savedOrders.find(o => o.trackingCode === trackingCode.value.trim())
  searched.value = true
}

function formatRupiah(value) {
  const idr = value * 15000
  return idr.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
}
</script>
