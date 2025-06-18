<template>
  <section class="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6">
    <div class="max-w-3xl mx-auto mt-12">
      <h1 class="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <!-- Form Kontak -->
      <form @submit.prevent="submitForm" class="space-y-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
        <input v-model="form.name" type="text" placeholder="Your Name" class="w-full p-3 rounded-lg border" required />
        <input v-model="form.email" type="email" placeholder="Your Email" class="w-full p-3 rounded-lg border" required />
        <textarea v-model="form.message" placeholder="Your Message" class="w-full p-3 rounded-lg border h-40 resize-none" required></textarea>
        <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg cursor-pointer">
          Send Message
        </button>
      </form>

      <!-- Medsos -->
      <div class="text-center mt-8">
        <p class="mb-2 font-medium">Hubungi kami di:</p>
        <div class="flex flex-wrap justify-center gap-4 text-lg">
          <a href="https://wa.me/6281234567890" target="_blank" class="flex items-center gap-2 hover:text-green-600">💬 WhatsApp</a>
          <a href="https://instagram.com/dainsleif" target="_blank" class="flex items-center gap-2 hover:text-pink-500">📷 Instagram</a>
          <a href="https://facebook.com/dainsleif" target="_blank" class="flex items-center gap-2 hover:text-blue-600">📘 Facebook</a>
          <a href="https://tiktok.com/@dainsleif" target="_blank" class="flex items-center gap-2 hover:text-black">🎵 TikTok</a>
          <a href="mailto:cs@dainsleif.com" target="_blank" class="flex items-center gap-2 hover:text-red-500">✉️ Email</a>
        </div>
      </div>

      <!-- Live Chat Bot -->
      <div class="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
        <h2 class="text-xl font-bold mb-4">Butuh bantuan cepat dari DainsleifBot?</h2>
        <p class="text-sm mb-4 text-gray-600 dark:text-gray-300">
          Coba tanya: <code>produk</code>, <code>checkout</code>, <code>gambar</code>, <code>alamat</code>, <code>login</code>, dll.
        </p>
        <div class="space-y-4 max-h-96 overflow-y-auto pr-2" ref="chatBox">
          <div
            v-for="(chat, index) in chats"
            :key="index"
            class="p-3 rounded bg-gray-100 dark:bg-gray-700"
          >
            <strong>{{ chat.role === 'user' ? 'Kamu:' : '🤖 DainsleifBot:' }}</strong> {{ chat.text }}
          </div>
        </div>
        <div class="mt-4 flex gap-2">
          <input
            v-model="chatInput"
            @keyup.enter="askBot"
            placeholder="Tanyakan sesuatu..."
            class="flex-1 p-3 rounded border dark:bg-gray-900"
          />
          <button
            @click="askBot"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Tanya
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { toast } from 'vue3-toastify'
import { useBotStore } from '@/stores/bot'

// Formulir
const form = ref({ name: '', email: '', message: '' })
const submitForm = () => {
  toast.success('Pesanmu telah dikirim!', { autoClose: 2000 })
  form.value = { name: '', email: '', message: '' }
}

// Bot Chat
const bot = useBotStore()
const chatInput = ref('')
const chats = computed(() => bot.history)

// Auto-scroll ke bawah saat ada chat baru
const chatBox = ref(null)
watch(chats, async () => {
  await nextTick()
  if (chatBox.value) {
    chatBox.value.scrollTop = chatBox.value.scrollHeight
  }
})

const askBot = () => {
  const question = chatInput.value.trim()
  if (!question) {
    toast.warning('Isi dulu pertanyaannya ya 😅')
    return
  }
  chatInput.value = ''
  bot.sendMessage(question)
}
</script>
