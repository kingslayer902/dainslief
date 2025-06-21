<template>
  <section class="bg-[#1E1E24] text-white py-12 px-6 text-center rounded-lg shadow-md mt-16 max-w-3xl mx-auto">
    <h2 class="text-2xl md:text-3xl font-bold text-[#7F5AF0] mb-4">
      Siap Tampil Beda Secara Digital?
    </h2>
    <p class="text-gray-300 mb-6 text-sm md:text-base">
      Hubungi tim <span class="font-semibold text-[#2CB67D]">Dainsleif</span> untuk konsultasi gratis dan mulai bangun brand digital yang powerful.
    </p>
    <a
      :href="whatsappLink"
      target="_blank"
      class="inline-block bg-[#2CB67D] text-black px-6 py-3 rounded-md font-semibold hover:bg-emerald-600 transition"
    >
      🚀 Konsultasi via WhatsApp
    </a>
  </section>
</template>

<script setup>
const whatsappLink = 'https://wa.me/6289505024468?text=Halo%20Dainsleif!%20Saya%20ingin%20konsultasi%20tentang%20branding%20digital.'
</script>
