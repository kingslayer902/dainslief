<template>
  <div class="fixed bottom-4 right-4 z-50">
    <!-- Kotak chat -->
    <div
      v-if="open"
      class="bg-white text-black w-72 p-4 rounded-lg shadow-lg border border-gray-300"
    >
      <div class="font-bold text-[#7F5AF0] mb-2">💬 Dainsleif Bot</div>

      <!-- Isi percakapan -->
      <div
        ref="chatBody"
        class="h-32 overflow-y-auto text-sm bg-gray-100 p-2 rounded space-y-2"
      >
        <div v-for="(msg, index) in messages" :key="index">
          <div
            :class="msg.from === 'user'
              ? 'text-right text-[#2CB67D] bg-[#E0F7ED] px-3 py-1 rounded-lg ml-10'
              : 'text-left  text-[#7F5AF0] bg-[#ECE8FF] px-3 py-1 rounded-lg mr-10'"
          >
            {{ msg.text }}
          </div>
        </div>
      </div>

      <!-- Kolom input -->
      <input
        v-model="input"
        @keyup.enter="kirimPesan"
        placeholder="Tulis pesan..."
        class="w-full mt-2 border border-gray-300 p-2 rounded text-sm outline-none"
      />
    </div>

    <!-- Tombol buka chat + Notifikasi 🔴 -->
    <button
      @click="toggleChat"
      class="relative mt-2 p-3 rounded-full bg-[#7F5AF0] text-white shadow-xl hover:bg-purple-700"
    >
      💬
      <span
        v-if="unread"
        class="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full border-2 border-white"
      />
    </button>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { useBotStore } from '@/stores/botStore'
import { storeToRefs } from 'pinia'

const open = ref(false)
const unread = ref(false)
const input = ref('')
const chatBody = ref(null)

const bot = useBotStore()
const { messages } = storeToRefs(bot)

function kirimPesan() {
  if (!input.value.trim()) return
  bot.sendMessage(input.value)
  input.value = ''
}

function toggleChat() {
  open.value = !open.value
  if (open.value) unread.value = false
}

watch(
  messages,
  async () => {
    await nextTick()
    if (!open.value) unread.value = true
    if (chatBody.value) {
      chatBody.value.scrollTop = chatBody.value.scrollHeight
    }
  },
  { deep: true }
)
</script>
