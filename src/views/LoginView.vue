<template>
  <div class="max-w-md mx-auto p-6 mt-12 bg-white shadow rounded">
    <h1 class="text-2xl font-bold mb-6">Login</h1>
    <form @submit.prevent="handleLogin" class="space-y-4">
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
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
      >
        Login
      </button>
    </form>
    <p v-if="errorMessage" class="text-red-600 mt-2">{{ errorMessage }}</p>
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

const handleLogin = () => {
  const savedUsers = JSON.parse(localStorage.getItem('users')) || []

  const found = savedUsers.find(
    (u) => u.email === email.value && u.password === password.value
  )

  if (!found) {
    toast.error('Email atau password salah!')
    errorMessage.value = 'Email atau password salah!'
    return
  }

  userStore.login(found)
  toast.success('Login berhasil!')
  router.push('/')
}
</script>
