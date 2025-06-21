<template>
  <section class="py-20 px-6 bg-[#16161A] text-white text-center max-w-4xl mx-auto">
    <!-- Judul -->
    <h2 class="text-3xl md:text-4xl font-bold text-[#7F5AF0] mb-6 animate-fade-down">
      Tentang Dainsleif Digital
    </h2>

    <!-- Deskripsi -->
    <p class="text-gray-300 text-base md:text-lg leading-relaxed animate-fade-up">
      Dainsleif Digital adalah studio kreatif digital yang menggabungkan teknologi, desain, dan strategi untuk menciptakan solusi unik dan berkelas. 
      Kami hadir untuk brand, UMKM, dan individu yang ingin naik level dan tampil beda di dunia digital.
    </p>

    <!-- Value & Visi -->
    <div class="mt-12 grid md:grid-cols-2 gap-8 text-left">
      <!-- Value -->
      <div class="bg-[#1E1E24] p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 class="text-xl font-semibold text-[#2CB67D] mb-3">🌟 Nilai Kami</h3>
        <ul class="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>Desain yang kuat & penuh makna</li>
          <li>Teknologi efisien & tepat guna</li>
          <li>Komunikasi yang jujur & transparan</li>
          <li>Kolaborasi = kunci sukses bersama</li>
        </ul>
      </div>

      <!-- Visi Misi -->
      <div class="bg-[#1E1E24] p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 class="text-xl font-semibold text-[#2CB67D] mb-3">🚀 Visi & Misi</h3>
        <p class="text-sm text-gray-400 leading-relaxed">
          Menjadi partner terpercaya dalam transformasi digital. <br />
          Kami ingin setiap klien merasakan dampak dari karya yang bukan hanya estetik,
          tapi juga fungsional, cepat, dan sesuai tren masa kini.
        </p>
      </div>
    </div>

    <!-- CTA -->
    <div class="mt-12">
      <a
        href="https://wa.me/6289505024468?text=Halo%20Dainsleif!%20Saya%20tertarik%20untuk%20bekerja%20sama%20atau%20konsultasi%20digital."
        target="_blank"
        class="bg-[#2CB67D] text-black font-semibold px-6 py-3 rounded hover:bg-emerald-600 transition shadow-md"
      >
        Konsultasi Sekarang
      </a>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-down {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-down {
  animation: fade-down 0.8s ease;
}
.animate-fade-up {
  animation: fade-up 1s ease;
}
</style>
