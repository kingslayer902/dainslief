<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
    <!-- Submenu -->
    <transition name="fade">
      <div v-if="open" class="flex flex-col space-y-2 items-end">
        <button @click="handleTracking" class="menu-item bg-[#2CB67D] cursor-pointer">🔍 Tracking</button>
        <button @click="handleAdmin" class="menu-item bg-[#7F5AF0] cursor-pointer">🛠️ Admin</button>
        <button @click="handleChat" class="menu-item bg-[#FF8906] cursor-pointer">💬 Live Chat</button>
      </div>
    </transition>

    <!-- Tombol ☰ -->
    <button
      @click="toggleMenu"
      class="p-4 rounded-full bg-[#1515d6] text-white shadow-xl hover:scale-105 transition cursor-pointer"
    >
      ☰
    </button>

    <!-- Bubble-bubble -->
    <LiveChat v-if="showChat" />
    <TrackingBubble v-if="showTracking" />
    <AdminBubble v-if="showAdmin" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import LiveChat from './LiveChat.vue'
import TrackingBubble from './TrackingBubble.vue'
import AdminBubble from './AdminBubble.vue'

const open = ref(false)
const router = useRouter()

const showChat = ref(false)
const showTracking = ref(false)
const showAdmin = ref(false)

function toggleMenu() {
  open.value = !open.value
}

// Fungsi gabungan redirect + toggle bubble
function handleChat() {
  router.push('/kontak')
  showChat.value = !showChat.value
}

function handleTracking() {
  router.push('/tracking')
  showTracking.value = !showTracking.value
}

function handleAdmin() {
  router.push('/admin')
  showAdmin.value = !showAdmin.value
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
