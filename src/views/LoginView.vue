<template>
  <div class="max-w-md mx-auto p-6 mt-12 bg-white shadow rounded">
    <h1 class="text-2xl font-bold mb-6">{{ isRegister ? 'Register' : 'Login' }}</h1>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <input
        v-if="isRegister"
        v-model.trim="name"
        type="text"
        placeholder="Nama Lengkap"
        class="w-full p-2 border rounded"
        required
      />
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
        {{ isRegister ? 'Daftar' : 'Login' }}
      </button>
    </form>

    <p class="text-sm text-center mt-4 text-blue-600 cursor-pointer hover:underline" @click="toggleMode">
      {{ isRegister ? 'Sudah punya akun? Login di sini' : 'Belum punya akun? Daftar di sini' }}
    </p>

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
const name = ref('')
const isRegister = ref(false)
const errorMessage = ref('')

const toggleMode = () => {
  isRegister.value = !isRegister.value
  errorMessage.value = ''
}

const handleSubmit = () => {
  const savedUsers = JSON.parse(localStorage.getItem('users')) || []

  if (isRegister.value) {
    const already = savedUsers.find((u) => u.email === email.value)
    if (already) {
      toast.error('Email sudah terdaftar!')
      errorMessage.value = 'Email sudah terdaftar!'
      return
    }

    const newUser = {
      name: name.value,
      email: email.value,
      password: password.value,
      photoURL: null
    }

    savedUsers.push(newUser)
    localStorage.setItem('users', JSON.stringify(savedUsers))

    userStore.login(newUser)
    toast.success('Registrasi berhasil dan langsung login!')
    router.push('/')
    return
  }

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
