<template> 
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Shopping Cart</h1>

    <div v-if="cartItems.length === 0" class="text-gray-600">Keranjang kosong</div>

    <div v-else>
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="mb-4 flex justify-between items-center border p-3 rounded shadow-sm"
      >
        <div>
          <h3 class="font-semibold">{{ item.title }}</h3>
          <p>Price: Rp{{ item.price.toLocaleString() }}</p>
          <p class="flex items-center gap-2">
            Qty:
            <input
              type="number"
              min="1"
              v-model.number="item.quantity"
              @change="updateQty(item.id, item.quantity)"
              class="w-16 border rounded p-1"
            />
          </p>
        </div>
        <button
          @click="removeItem(item.id)"
          class="text-red-600 hover:underline"
        >
          Remove
        </button>
      </div>

      <div class="mt-6 font-bold text-xl">
        Total Price: Rp{{ totalPrice.toLocaleString() }}
      </div>

      <div class="flex gap-4 mt-4">
        <button
          @click="clearCart"
          class="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Clear Cart
        </button>

        <button
          @click="goToCheckout"
          class="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cart'
import { useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

const cartItems = computed(() => cartStore.items)
const totalPrice = computed(() => cartStore.total)

function updateQty(id, qty) {
  if (qty < 1) qty = 1
  cartStore.updateQty(id, qty)
}

function removeItem(id) {
  cartStore.removeItem(id)
}

function clearCart() {
  cartStore.clearCart()
}

function goToCheckout() {
  if (cartItems.value.length === 0) {
    alert('Keranjang kosong, silakan tambahkan produk terlebih dahulu.')
    return
  }
  router.push('/checkout')
}
</script>
