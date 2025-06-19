<template>
  <div class="bg-[#242629] rounded-lg p-4 shadow hover:shadow-xl transition">
    <img :src="item.gambar" alt="img" class="w-full h-40 object-cover rounded mb-4" v-if="item.gambar">
    <h3 class="text-lg font-semibold text-[#F9F9F9]">{{ item.nama }}</h3>
    <p class="text-sm text-gray-400 mb-2">{{ item.deskripsi }}</p>
    <p class="text-[#2CB67D] font-semibold">{{ item.harga }}</p>

    <!-- ✅ Tombol Checkout WhatsApp -->
    <a
      :href="`https://wa.me/6289505024468?text=Halo,%20saya%20ingin%20memesan%20${encodeURIComponent(item.nama)}`"
      target="_blank"
      class="mt-3 inline-block px-4 py-2 bg-[#7F5AF0] text-white rounded hover:bg-purple-700 transition text-sm"
    >
      Pesan Sekarang
    </a>
  </div>
</template>

<script setup>
defineProps(['item'])
</script>
