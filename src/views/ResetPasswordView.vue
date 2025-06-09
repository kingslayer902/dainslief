<template> 
  <div class="max-w-md mx-auto p-6 mt-12 bg-white shadow rounded">
    <h1 class="text-2xl font-bold mb-6">Reset Password</h1>
    <form @submit.prevent="resetPassword" class="space-y-4">
      <input
        v-model.trim="email"
        type="email"
        placeholder="Email"
        class="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        class="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700"
      >
        Send Reset Link
      </button>
    </form>
    <p v-if="message" :class="messageClass" class="mt-2">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '../stores/user'

const email = ref('')
const message = ref('')
const isError = ref(false)
const userStore = useUserStore()

const messageClass = computed(() => (isError.value ? 'text-red-600' : 'text-green-600'))

const resetPassword = () => {
  message.value = ''
  isError.value = false

  if (!email.value) {
    message.value = 'Email wajib diisi'
    isError.value = true
    return
  }

  // validasi email format sederhana
  const emailRegex = /^\S+@\S+\.\S+$/
  if (!emailRegex.test(email.value)) {
    message.value = 'Format email tidak valid'
    isError.value = true
    return
  }

  const exists = userStore.users.find(u => u.email === email.value)
  if (exists) {
    message.value = `Link reset dikirim ke email ${email.value} (simulasi)`
    email.value = ''
  } else {
    message.value = 'Email tidak ditemukan'
    isError.value = true
  }
}
</script>
