<template>
  <section class="bg-[#16161A] text-white py-16 px-4 md:px-20">
    <h2 class="text-3xl font-bold text-center text-[#7F5AF0] mb-10">Pertanyaan Umum</h2>

    <div v-for="(item, i) in faqs" :key="i" class="border-b border-gray-700 pb-4 mb-4">
      <button
        @click="buka(i)"
        class="w-full text-left flex justify-between items-center font-medium hover:text-[#2CB67D] transition"
      >
        <span>{{ item.pertanyaan }}</span>
        <span class="text-[#2CB67D] text-xl">
          {{ terbuka === i ? '−' : '+' }}
        </span>
      </button>

      <transition name="accordion">
        <p
          v-if="terbuka === i"
          class="text-sm text-gray-300 mt-2 leading-relaxed"
        >
          {{ item.jawaban }}
        </p>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const terbuka = ref(null)

const faqs = [
  {
    pertanyaan: 'Apakah saya bisa custom desain?',
    jawaban: 'Tentu! Anda bisa konsultasi kebutuhan desain langsung lewat WhatsApp.'
  },
  {
    pertanyaan: 'Berapa lama pengerjaan?',
    jawaban: 'Estimasi 2–5 hari kerja tergantung tingkat kesulitan dan antrian project.'
  },
  {
    pertanyaan: 'Apakah ada garansi revisi?',
    jawaban: 'Ya, Anda dapat revisi minor hingga 2 kali tanpa biaya tambahan.'
  },
  {
    pertanyaan: 'Apakah Dainsleif menerima proyek urgent?',
    jawaban: 'Bisa! Kami menerima pengerjaan cepat dengan penyesuaian harga.'
  }
]

function buka(index) {
  terbuka.value = terbuka.value === index ? null : index
}
</script>

<style scoped>
.accordion-enter-active, .accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from, .accordion-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
