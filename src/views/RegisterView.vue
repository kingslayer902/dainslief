<template>
  <div class="max-w-md mx-auto p-6 mt-12 bg-white shadow rounded">
    <h1 class="text-2xl font-bold mb-6">Register</h1>
    <form @submit.prevent="handleRegister" class="space-y-4">
      <input
        v-model="name"
        type="text"
        placeholder="Nama Lengkap"
        class="w-full p-2 border rounded"
        required
      />
      <input
        v-model="email"
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
        Daftar
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import { toast } from 'vue3-toastify'

const router = useRouter()
const userStore = useUserStore()

const name = ref('')
const email = ref('')
const password = ref('')

const handleRegister = () => {
  const users = JSON.parse(localStorage.getItem('users')) || []
  const isEmailUsed = users.some(u => u.email === email.value)

  if (isEmailUsed) {
    toast.error('Email sudah terdaftar!')
    return
  }

  const newUser = {
    name: name.value,
    email: email.value,
    password: password.value,
    photoURL: null
  }

  userStore.register(newUser)

  toast.success('Registrasi berhasil! Anda sekarang login.')
  router.push('/')
}
</script>
