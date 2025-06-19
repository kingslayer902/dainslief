<template>
  <section class="py-16 px-6 bg-[#16161A] text-white text-center">
    <h2 class="text-3xl font-bold text-[#2CB67D] mb-6">Hubungi Kami</h2>
    <p class="text-gray-300 mb-4">Klik tombol di bawah untuk menghubungi kami via WhatsApp.</p>
    <a :href="waLink" target="_blank" class="bg-[#7F5AF0] text-white px-6 py-3 rounded hover:bg-purple-700 transition">
      WhatsApp Kami
    </a>
  </section>
</template>

<script setup>
const waLink = 'https://wa.me/6289505024468'
</script>
