<template>
  <section class="bg-[#16161A] text-white py-16 px-4 md:px-20">
    <h2 class="text-3xl font-bold text-center text-[#7F5AF0] mb-10 animate-fade-down">
      Apa Kata Mereka?
    </h2>
    <div class="grid gap-8 md:grid-cols-3">
      <div
        v-for="t in testimonis"
        :key="t.id"
        class="bg-[#1E1E24] p-6 rounded-xl shadow-lg border border-[#2CB67D] hover:scale-105 transition duration-300 animate-fade-in"
      >
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 flex items-center justify-center rounded-full bg-[#2CB67D] text-black text-lg">
            {{ t.emoji }}
          </div>
          <div>
            <p class="text-sm font-semibold text-[#2CB67D]">{{ t.nama }}</p>
            <p class="text-xs text-gray-400">Klien Dainsleif</p>
          </div>
        </div>
        <p class="text-sm text-gray-300 italic">"{{ t.pesan }}"</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonis = [
  { id: 1, nama: 'Reza Fahmi', pesan: 'Pelayanan cepat dan kualitas produk mantap!', emoji: '🧑‍🔧' },
  { id: 2, nama: 'Alya Nadhira', pesan: 'Suka banget sama desainnya. Keren dan futuristik!', emoji: '👩‍🎨' },
  { id: 3, nama: 'Bagas Darmawan', pesan: 'Harga terjangkau, tampilan premium. Worth it!', emoji: '💼' }
]
</script>

<style scoped>
@keyframes fade-down {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes fade-in {
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
}
.animate-fade-down {
  animation: fade-down 0.8s ease-out;
}
.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}
</style>
