<!-- components/ReviewList.vue -->
<template>
  <div v-if="filteredReviews.length" class="mt-6 border-t pt-4">
    <h3 class="text-lg font-bold mb-4">Ulasan Produk</h3>
    <div v-for="(r, i) in filteredReviews" :key="i" class="mb-4 border-b pb-2">
      <div class="flex items-center space-x-1 mb-1">
        <span v-for="n in 5" :key="n" :class="n <= r.rating ? 'text-yellow-500' : 'text-gray-300'">★</span>
      </div>
      <p class="text-gray-700">{{ r.comment }}</p>
      <p class="text-sm text-gray-400">{{ new Date(r.createdAt).toLocaleString() }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ productId: Number })

const reviews = computed(() => {
  return JSON.parse(localStorage.getItem('reviews') || '[]')
})

const filteredReviews = computed(() =>
  reviews.value.filter(r => r.productId === props.productId)
)
</script>
