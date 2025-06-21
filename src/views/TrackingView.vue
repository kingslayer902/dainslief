<template>
  <section class="py-20 px-6 bg-[#16161A] text-white text-center min-h-screen">
    <div class="max-w-xl mx-auto">
      <!-- Judul -->
      <h2 class="text-3xl md:text-4xl font-bold text-[#2CB67D] mb-4">Tracking Pesanan</h2>
      <p class="text-gray-300 mb-8 text-sm md:text-base">
        Masukkan kode pesanan yang kamu terima saat melakukan pemesanan untuk melihat status pengiriman.
      </p>

      <!-- Form Tracking -->
      <div class="flex flex-col md:flex-row items-center justify-center gap-4">
        <input
          v-model="kode"
          placeholder="Contoh: TRX123"
          class="w-full md:w-64 px-4 py-2 rounded bg-[#1E1E24] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7F5AF0] transition"
        />
        <button
          @click="cek"
          class="px-6 py-2 bg-[#7F5AF0] hover:bg-purple-700 text-white rounded font-semibold transition"
        >
          Cek Status
        </button>
      </div>

      <!-- Hasil Tracking -->
      <div v-if="status" class="mt-6 text-lg font-semibold animate-fade-in" :class="{
        'text-emerald-400': status.includes('📦'),
        'text-red-400': status.includes('❌')
      }">
        {{ status }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const kode = ref('')
const status = ref('')

const cek = () => {
  if (kode.value.trim().toUpperCase() === 'TRX123') {
    status.value = '📦 Pesanan Anda sedang dalam pengiriman!'
  } else if (kode.value.trim().toUpperCase() === 'TRX999') {
    status.value = '✅ Pesanan Anda sudah sampai. Terima kasih!'
  } else {
    status.value = '❌ Kode tidak ditemukan. Cek kembali atau hubungi kami via WhatsApp.'
  }
}
</script>

<style scoped>
@keyframes fade-in {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}
</style>
