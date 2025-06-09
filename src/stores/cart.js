// src/stores/cart.js
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    buyNowItem: null,
  }),
  actions: {
    addToCart(product) {
      const existing = this.items.find(item => item.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
      this.buyNowItem = null
    },
    buyNow(product) {
      this.buyNowItem = { ...product, quantity: 1 }
    },
    clearCart() {
      this.items = []
      this.buyNowItem = null
    },
  },
  getters: {
    total: (state) => {
      if (state.buyNowItem) return state.buyNowItem.price * state.buyNowItem.quantity
      return state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    },
    checkoutItems: (state) => {
      if (state.buyNowItem) return [state.buyNowItem]
      return state.items
    },
  },
})
