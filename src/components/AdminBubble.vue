<template>
  <div class="fixed bottom-36 right-6 z-50">
    <button
      @click="goToAdmin"
      class="bg-[#7F5AF0] text-white rounded-full p-3 shadow-lg hover:bg-purple-700 transition"
      title="Admin Panel"
    >
      🛠️
    </button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goToAdmin() {
  router.push('/admin')
}
</script>
