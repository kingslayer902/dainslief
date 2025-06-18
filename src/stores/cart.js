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
      this.saveToLocalStorage()
    },
    buyNow(product) {
      this.buyNowItem = { ...product, quantity: 1 }
      this.saveToLocalStorage()
    },
    clearCart() {
      this.items = []
      this.buyNowItem = null
      this.saveToLocalStorage()
    },
    updateQty(id, qty) {
      const item = this.items.find(i => i.id === id)
      if (item) {
        item.quantity = qty
      }
      this.saveToLocalStorage()
    },
    removeItem(id) {
      this.items = this.items.filter(i => i.id !== id)
      this.saveToLocalStorage()
    },
    loadFromLocalStorage() {
      const data = localStorage.getItem('cart-store')
      if (data) {
        const parsed = JSON.parse(data)
        this.items = parsed.items || []
        this.buyNowItem = parsed.buyNowItem || null
      }
    },
    saveToLocalStorage() {
      localStorage.setItem(
        'cart-store',
        JSON.stringify({
          items: this.items,
          buyNowItem: this.buyNowItem,
        })
      )
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
    count: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0)
    }
  },
})
