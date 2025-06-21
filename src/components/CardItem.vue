<template>
  <div
    class="bg-[#242629] rounded-lg p-5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
  >
    <!-- Gambar Item -->
    <img
      v-if="item.gambar"
      :src="item.gambar"
      alt="Gambar {{ item.nama }}"
      class="w-full h-40 object-cover rounded mb-4 group-hover:scale-[1.02] transition duration-300"
    />

    <!-- Nama & Deskripsi -->
    <div>
      <h3 class="text-lg font-bold text-white mb-1 truncate">{{ item.nama }}</h3>
      <p class="text-sm text-gray-400 mb-2 line-clamp-2">{{ item.deskripsi }}</p>
    </div>

    <!-- Harga -->
    <p
      v-if="item.harga"
      class="text-[#2CB67D] font-semibold text-base mb-4"
    >
      Rp{{ Number(item.harga).toLocaleString('id-ID') }}
    </p>

    <!-- Tombol WhatsApp -->
    <a
      :href="`https://wa.me/6289505024468?text=Halo,%20saya%20ingin%20memesan%20${encodeURIComponent(item.nama)}`"
      target="_blank"
      class="inline-block text-center px-4 py-2 bg-[#7F5AF0] text-white rounded hover:bg-purple-700 transition text-sm font-medium"
    >
      📦 Pesan Sekarang
    </a>
  </div>
</template>

<script setup>
defineProps(['item'])
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
