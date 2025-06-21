<template>
  <section class="bg-[#16161A] text-[#F9F9F9] min-h-screen px-6 py-20">
    <!-- Hero Section -->
    <div class="flex flex-col items-center justify-center text-center mb-20">
      <h1 class="text-4xl md:text-6xl font-extrabold text-[#7F5AF0] drop-shadow-lg animate-fade-down">
        Dainsleif Digital
      </h1>
      <p class="text-lg md:text-xl mt-4 text-gray-300 max-w-2xl animate-fade-up">
        Kreator solusi digital untuk brand, produk, dan jasa yang ingin tampil beda dan berkelas.
      </p>
      <a
        :href="waLink"
        target="_blank"
        class="mt-8 inline-block px-6 py-3 bg-[#2CB67D] text-black font-semibold rounded hover:bg-[#26a872] transition-all shadow-lg animate-fade-in"
      >
        Hubungi Kami via WhatsApp
      </a>
    </div>

    <!-- Testimoni -->
    <TestimoniSection />

    <!-- FAQ -->
    <FAQSection />
  </section>
</template>

<script setup>
import TestimoniSection from '@/components/TestimoniSection.vue'
import FAQSection from '@/components/FAQSection.vue'

// Link dengan pesan default untuk konsultasi
const waLink = 'https://wa.me/6289505024468?text=Halo%20Dainsleif!%20Saya%20ingin%20konsultasi%20tentang%20layanan%20digital%20Anda.'
</script>

<style scoped>
@keyframes fade-down {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes fade-up {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.animate-fade-down { animation: fade-down 0.8s ease-out; }
.animate-fade-up { animation: fade-up 1s ease-out; }
.animate-fade-in { animation: fade-in 1.5s ease-out; }
</style>
