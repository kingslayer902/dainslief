import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWishlistStore = defineStore('wishlist', () => {
  const items = ref([])

  function toggleWishlist(product) {
    const index = items.value.findIndex(p => p.id === product.id)
    if (index >= 0) {
      items.value.splice(index, 1) // Hapus jika sudah ada
    } else {
      items.value.push(product) // Tambah jika belum ada
    }
  }

  function isFavorite(id) {
    return items.value.some(p => p.id === id)
  }

  function clearWishlist() {
    items.value = []
  }

  return { items, toggleWishlist, isFavorite, clearWishlist }
})
