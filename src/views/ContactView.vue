<template>
  <section class="py-20 px-6 bg-[#16161A] text-white text-center">
    <div class="max-w-xl mx-auto">
      <!-- Heading -->
      <h2 class="text-3xl md:text-4xl font-extrabold text-[#2CB67D] mb-4">Hubungi Kami</h2>
      <p class="text-gray-300 mb-6 text-sm md:text-base">
        Punya pertanyaan? Butuh penawaran? Kami siap bantu melalui WhatsApp kapan pun kamu butuh.
      </p>

      <!-- Tombol WhatsApp -->
      <a
        :href="waLink"
        target="_blank"
        class="inline-block bg-[#7F5AF0] hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded transition-all shadow-md"
      >
        💬 WhatsApp Kami Sekarang
      </a>

      <!-- Info Tambahan -->
      <div class="mt-10 text-gray-400 text-sm space-y-1">
        <p>Jam Operasional: Senin - Sabtu, 09.00 - 18.00 WIB</p>
        <p>Email: dainsleif.digital@email.com</p>
        <p>Alamat: Jakarta, Indonesia (Online Service)</p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Pesan otomatis agar user langsung bisa mulai konsultasi
const waLink = 'https://wa.me/6289505024468?text=Halo%20Dainsleif!%20Saya%20ingin%20konsultasi%20mengenai%20layanan%20digital%20Anda.'
</script>
