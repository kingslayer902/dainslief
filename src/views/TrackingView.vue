<template>
  <section class="py-16 px-6 bg-[#16161A] text-white text-center">
    <h2 class="text-3xl font-bold text-[#2CB67D] mb-6">Tracking Pesanan</h2>
    <p class="text-white mb-4">Masukkan kode pesanan kamu:</p>
    <input v-model="kode" placeholder="Contoh: TRX123" class="p-2 rounded text-white" />
    <button @click="cek" class="ml-2 px-4 py-2 bg-[#7F5AF0] text-white rounded hover:bg-purple-700 transition">
      Cek Status
    </button>
    <p v-if="status" class="mt-4 text-lg text-emerald-400 font-semibold">{{ status }}</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const kode = ref('')
const status = ref('')

const cek = () => {
  if (kode.value.toUpperCase() === 'TRX123') {
    status.value = '📦 Pesanan Anda sedang dikirim!'
  } else {
    status.value = '❌ Kode tidak ditemukan'
  }
}
</script>
