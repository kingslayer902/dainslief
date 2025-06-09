import { defineStore } from 'pinia'

export const useReviewStore = defineStore('review', {
  state: () => ({
    reviews: JSON.parse(localStorage.getItem('reviews')) || []
  }),
  actions: {
    addReview(review) {
      this.reviews.push(review)
      localStorage.setItem('reviews', JSON.stringify(this.reviews))
    },
    getReviewsByProduct(productId) {
      return this.reviews.filter(r => r.productId === productId)
    }
  }
})
