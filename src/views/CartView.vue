<template>
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Shopping Cart</h1>
    <div v-if="cartItems.length === 0">Keranjang kosong</div>
    <div v-else>
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="mb-4 flex justify-between items-center"
      >
        <div>
          <h3>{{ item.title }}</h3>  <!-- pastikan properti benar -->
          <p>Price: Rp{{ item.price.toLocaleString() }}</p>
          <p>
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
      <button
        @click="clearCart"
        class="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
      >
        Clear Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()

const cartItems = computed(() => cartStore.items)
const totalPrice = computed(() => cartStore.totalPrice)

// Method untuk update qty, remove item, clear cart
function updateQty(id, qty) {
  cartStore.updateQty(id, qty)
}
function removeItem(id) {
  cartStore.removeItem(id)
}
function clearCart() {
  cartStore.clearCart()
}
</script>
