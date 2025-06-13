<template>
  <div class="max-w-2xl mx-auto p-6 bg-white rounded shadow mt-6">
    <h1 class="text-2xl font-bold mb-4">Checkout</h1>

    <div v-if="checkoutItems.length === 0">
      <p class="text-gray-600">Keranjang kosong.</p>
    </div>

    <div v-else>
      <ul class="mb-4">
        <li
          v-for="item in checkoutItems"
          :key="item.id"
          class="flex justify-between items-center mb-4 border p-2 rounded"
        >
          <div class="flex items-center gap-4">
            <img :src="item.image" alt="Product" class="w-12 h-12 object-cover rounded" />
            <div>
              <p class="font-medium">{{ item.title }}</p>
              <p class="text-sm text-gray-500">
                Rp{{ item.price.toLocaleString() }} x{{ item.quantity }}
              </p>
            </div>
          </div>
          <span class="font-semibold">
            Rp{{ (item.price * item.quantity).toLocaleString() }}
          </span>
        </li>
      </ul>

      <p class="font-semibold mb-4">
        Total: Rp{{ totalPrice.toLocaleString() }}
      </p>

      <form @submit.prevent="handleCheckout" class="space-y-4">
        <input
          v-model="name"
          type="text"
          placeholder="Nama Lengkap"
          required
          class="w-full p-2 border rounded"
        />
        <textarea
          v-model="address"
          placeholder="Alamat Pengiriman"
          required
          class="w-full p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
        >
          Selesaikan Pembelian
        </button>
      </form>

      <p v-if="successMessage" class="text-green-600 font-semibold mt-4">
        {{ successMessage }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useCartStore } from '../stores/cart'
import { useOrderStore } from '../stores/order'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const cart = useCartStore()
const orderStore = useOrderStore()
const name = ref('')
const address = ref('')
const successMessage = ref('')

const checkoutItems = computed(() => cart.checkoutItems)
const totalPrice = computed(() => cart.total)

const handleCheckout = () => {
  if (checkoutItems.value.length === 0) {
    toast.error('Keranjang kosong, tidak bisa checkout!')
    return
  }

  const trackingCode = 'DNX-' + Math.floor(10000 + Math.random() * 90000)

  const newOrder = {
    id: Date.now(),
    name: name.value,
    address: address.value,
    items: checkoutItems.value.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    })),
    total: totalPrice.value,
    date: new Date().toLocaleString(),
    trackingCode,
    status: 'Dikirim',
    eta: '3-5 hari',
  }

  orderStore.addOrder(newOrder)

  // Simpan ke localStorage agar bisa diakses di halaman tracking
  const existingOrders = JSON.parse(localStorage.getItem('trackingOrders') || '[]')
  existingOrders.push(newOrder)
  localStorage.setItem('trackingOrders', JSON.stringify(existingOrders))

  toast.success(`Pembelian oleh ${name.value} berhasil! Kode pelacakan: ${trackingCode}`, {
    autoClose: 3000,
    position: 'top-right',
    theme: 'light',
  })

  successMessage.value = `Terima kasih telah berbelanja! Kode pelacakanmu: ${trackingCode}`

  cart.clearCart()
  name.value = ''
  address.value = ''
}
</script>
