<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
    <!-- Submenu -->
    <transition name="fade">
      <div v-if="open" class="flex flex-col space-y-2 items-end">
        <button @click="toggleTracking" class="menu-item bg-[#2CB67D]">🔍 Tracking</button>
        <button @click="toggleAdmin" class="menu-item bg-[#7F5AF0]">🛠️ Admin</button>
        <button @click="toggleChat" class="menu-item bg-[#FF8906]">💬 Live Chat</button>
      </div>
    </transition>

    <!-- Tombol utama -->
    <button
      @click="toggleMenu"
      class="p-4 rounded-full bg-[#1515d6] text-white shadow-xl hover:rotate-90 transition-all duration-300"
    >
      ☰
    </button>

    <!-- Bubble Components -->
    <LiveChat v-if="showChat" />
    <TrackingBubble v-if="showTracking" />
    <AdminBubble v-if="showAdmin" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import LiveChat from './LiveChat.vue'
import TrackingBubble from './TrackingBubble.vue'
import AdminBubble from './AdminBubble.vue'

const open = ref(false)
const showChat = ref(false)
const showTracking = ref(false)
const showAdmin = ref(false)

function toggleMenu() {
  open.value = !open.value
}

function toggleChat() {
  showChat.value = !showChat.value
  showTracking.value = false
  showAdmin.value = false
}

function toggleTracking() {
  showTracking.value = !showTracking.value
  showChat.value = false
  showAdmin.value = false
}

function toggleAdmin() {
  showAdmin.value = !showAdmin.value
  showChat.value = false
  showTracking.value = false
}
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
