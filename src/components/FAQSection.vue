<template>
  <section class="bg-[#16161A] text-white py-16 px-4 md:px-20">
    <h2 class="text-3xl font-bold text-center text-[#7F5AF0] mb-10">Pertanyaan Umum</h2>
    <div v-for="(item, i) in faqs" :key="i" class="mb-4 border-b border-gray-600 pb-4">
      <button @click="buka(i)" class="text-left w-full font-medium">
        <span class="text-[#2CB67D]">+ </span>{{ item.pertanyaan }}
      </button>
      <p v-if="terbuka === i" class="text-sm text-gray-300 mt-2">{{ item.jawaban }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const terbuka = ref(null)
const faqs = [
  {
    pertanyaan: 'Apakah saya bisa custom desain?',
    jawaban: 'Tentu! Silakan hubungi kami via WhatsApp.'
  },
  {
    pertanyaan: 'Berapa lama pengerjaan?',
    jawaban: 'Rata-rata 2–5 hari tergantung kompleksitas.'
  },
  {
    pertanyaan: 'Apakah ada garansi revisi?',
    jawaban: 'Ada, gratis revisi minor 2x.'
  }
]
function buka(index) {
  terbuka.value = terbuka.value === index ? null : index
}
</script>
