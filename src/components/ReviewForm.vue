<!-- components/ReviewForm.vue -->
<template>
  <form @submit.prevent="submitReview" class="mt-6 border-t pt-4 space-y-4">
    <h3 class="text-lg font-bold">Beri Ulasan</h3>
    <div class="flex items-center space-x-2">
      <label v-for="n in 5" :key="n">
        <input type="radio" v-model="rating" :value="n" class="hidden" />
        <span :class="n <= rating ? 'text-yellow-500' : 'text-gray-300'" class="text-2xl cursor-pointer">★</span>
      </label>
    </div>
    <textarea
      v-model="comment"
      placeholder="Tulis komentar..."
      class="w-full border rounded p-2"
      required
    ></textarea>
    <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Kirim</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { toast } from 'vue3-toastify'

const props = defineProps({ productId: Number })
const emit = defineEmits(['review-submitted'])

const rating = ref(0)
const comment = ref('')

function submitReview() {
  if (!rating.value || !comment.value.trim()) {
    toast.error('Rating dan komentar harus diisi')
    return
  }

  const review = {
    productId: props.productId,
    rating: rating.value,
    comment: comment.value.trim(),
    createdAt: new Date().toISOString()
  }

  const existing = JSON.parse(localStorage.getItem('reviews') || '[]')
  localStorage.setItem('reviews', JSON.stringify([...existing, review]))

  toast.success('Review berhasil dikirim!')
  emit('review-submitted', review)

  rating.value = 0
  comment.value = ''
}
</script>
