<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<script setup>
import Navbar from './components/Navbar.vue'
// import Footer dari components, pastikan filenya ada
import Footer from './components/Footer.vue'
</script>

