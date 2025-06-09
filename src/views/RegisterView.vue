<template>
  <div class="max-w-md mx-auto p-6 mt-12 bg-white shadow rounded">
    <h1 class="text-2xl font-bold mb-6">Register</h1>
    <form @submit.prevent="handleRegister" class="space-y-4">
      <input
        v-model.trim="email"
        type="email"
        placeholder="Email"
        class="w-full p-2 border rounded"
        required
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full p-2 border rounded"
        required
      />
      <button
        type="submit"
        class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 cursor-pointer"
      >
        Register
      </button>
    </form>
    <p v-if="errorMessage" class="text-red-600 mt-2">{{ errorMessage }}</p>
    <p v-if="successMessage" class="text-green-600 mt-2">{{ successMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import { toast } from 'vue3-toastify'

const router = useRouter()
const userStore = useUserStore()

const email = ref('')
const password = ref('')
const errorMessage = ref('')
const successMessage = ref('')

function validate() {
  errorMessage.value = ''
  if (!email.value) {
    errorMessage.value = 'Email wajib diisi'
    return false
  }
  const emailRegex = /^\S+@\S+\.\S+$/
  if (!emailRegex.test(email.value)) {
    errorMessage.value = 'Format email tidak valid'
    return false
  }
  if (!password.value) {
    errorMessage.value = 'Password wajib diisi'
    return false
  }
  if (password.value.length < 6) {
    errorMessage.value = 'Password minimal 6 karakter'
    return false
  }
  return true
}

const handleRegister = () => {
  if (!validate()) return

  const newUser = { email: email.value, password: password.value }
  if (userStore.register(newUser)) {
    successMessage.value = 'Registrasi berhasil! Silakan login.'
    errorMessage.value = ''
    toast.success('Registrasi berhasil!')
    router.push('/login')
  } else {
    errorMessage.value = 'Email sudah terdaftar!'
    successMessage.value = ''
  }
}
</script>
