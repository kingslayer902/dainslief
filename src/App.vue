<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import FloatingMenu from './components/FloatingMenu.vue' // ✅ Gantikan semua bubble jadi 1
</script>

<template>
  <div class="bg-[#16161A] text-white min-h-screen flex flex-col justify-between">
    <Navbar />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
    <FloatingMenu /> <!-- ✅ Semua fitur masuk ke sini: Tracking, Admin, LiveChat -->
  </div>
</template>
