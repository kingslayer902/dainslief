<template>
  <section class="bg-[#16161A] text-white py-16 px-4 md:px-20">
    <h2 class="text-3xl font-bold text-center text-[#7F5AF0] mb-10">Apa Kata Mereka?</h2>
    <div class="grid gap-8 md:grid-cols-3">
      <div
        v-for="t in testimonis"
        :key="t.id"
        class="bg-[#1E1E24] p-6 rounded-lg shadow-lg border border-[#2CB67D]"
      >
        <p class="text-sm italic mb-4">"{{ t.pesan }}"</p>
        <div class="text-sm font-semibold text-[#2CB67D]">— {{ t.nama }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonis = [
  { id: 1, nama: 'Reza Fahmi', pesan: 'Pelayanan cepat dan kualitas produk mantap!' },
  { id: 2, nama: 'Alya Nadhira', pesan: 'Suka banget sama desainnya. Keren dan futuristik!' },
  { id: 3, nama: 'Bagas Darmawan', pesan: 'Harga terjangkau, tampilan premium. Worth it!' }
]
</script>
