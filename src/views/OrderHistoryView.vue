<template>
  <div class="max-w-3xl mx-auto p-6 bg-white rounded shadow mt-6">
    <h1 class="text-2xl font-bold mb-6">Riwayat Order</h1>

    <div v-if="orders.length === 0" class="text-gray-600">
      Belum ada order.
    </div>

    <div v-else>
      <div v-for="order in orders" :key="order.id" class="mb-6 p-4 border rounded shadow-sm">
        <div class="flex justify-between mb-2">
          <div>
            <p><strong>Nama:</strong> {{ order.name }}</p>
            <p><strong>Alamat:</strong> {{ order.address }}</p>
            <p><strong>Tanggal:</strong> {{ order.date }}</p>
          </div>
          <div class="font-semibold text-green-600">Total: Rp{{ order.total.toFixed(2) }}</div>
        </div>
        <ul class="list-disc ml-6">
          <li v-for="item in order.items" :key="item.id">
            {{ item.title }} x{{ item.quantity }} - Rp{{ (item.price * item.quantity).toFixed(2) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useOrderStore } from '../stores/order'

const orderStore = useOrderStore()
const orders = computed(() => orderStore.orders)
</script>
