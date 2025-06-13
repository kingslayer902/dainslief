<template>
  <section class="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6">
    <div class="max-w-3xl mx-auto mt-12">
      <h1 class="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <form @submit.prevent="submitForm" class="space-y-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
        <input v-model="form.name" type="text" placeholder="Your Name" class="w-full p-3 rounded-lg border" required />
        <input v-model="form.email" type="email" placeholder="Your Email" class="w-full p-3 rounded-lg border" required />
        <textarea v-model="form.message" placeholder="Your Message" class="w-full p-3 rounded-lg border h-40 resize-none" required></textarea>
        <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg cursor-pointer">
          Send Message
        </button>
      </form>

      <div class="text-center mt-8">
        <p class="mb-2">Follow us:</p>
        <div class="flex justify-center space-x-6 text-xl">
          <a href="https://instagram.com" target="_blank" class="hover:text-pink-500">📷 Instagram</a>
          <a href="https://facebook.com" target="_blank" class="hover:text-blue-600">📘 Facebook</a>
          <a href="https://tiktok.com" target="_blank" class="hover:text-black">🎵 TikTok</a>
        </div>
      </div>

      <!-- Interaktif Bot -->
      <div class="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
        <h2 class="text-xl font-bold mb-4">Butuh bantuan cepat dari DainsleifBot?</h2>
        <div class="space-y-4 max-h-96 overflow-y-auto">
          <div v-for="(chat, index) in chats" :key="index" class="p-3 rounded bg-gray-100 dark:bg-gray-700">
            <strong>{{ chat.role === 'user' ? 'Kamu:' : 'DainsleifBot:' }}</strong> {{ chat.message }}
          </div>
        </div>
        <input
          v-model="chatInput"
          @keyup.enter="askBot"
          placeholder="Tanyakan sesuatu seperti 'cara checkout' atau 'kenapa gambar tidak tampil?'"
          class="w-full p-3 mt-4 rounded border dark:bg-gray-900"
        />
        <button @click="askBot" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Tanya</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import axios from 'axios'

// Form Contact
const form = ref({ name: '', email: '', message: '' })

const submitForm = () => {
  toast.success('Your message has been sent!', { autoClose: 2000 })
  form.value = { name: '', email: '', message: '' }
}

// Chatbot
const chats = ref([])
const chatInput = ref('')

const askBot = async () => {
  const question = chatInput.value.trim()
  if (!question) return

  chats.value.push({ role: 'user', message: question })
  chatInput.value = ''

  try {
    const res = await axios.post('https://dainslief-backend-production.up.railway.app/chat', {
      message: question
    })
    chats.value.push({ role: 'bot', message: res.data.response || '⚠️ Bot tidak memberikan jawaban.' })
  } catch (e) {
    chats.value.push({ role: 'bot', message: '❌ Gagal terhubung ke DainsleifBot. Coba lagi nanti.' })
  }
}
</script>

<style scoped>
input, textarea {
  transition: 0.2s;
}
input:focus, textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.4);
}
</style>
