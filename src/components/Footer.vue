<template>
  <footer class="bg-[#242629] text-[#F9F9F9] py-8 px-6">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      <!-- Branding -->
      <div>
        <h3 class="text-xl font-bold text-[#7F5AF0] mb-2">Dainsleif Digital</h3>
        <p class="text-sm text-gray-400">
          Bangun identitas digitalmu dengan kualitas, karakter, dan desain yang berkelas.
        </p>
      </div>

      <!-- Navigasi -->
      <div>
        <h4 class="text-md font-semibold mb-2">Navigasi</h4>
        <ul class="space-y-1 text-sm">
          <li><router-link to="/" class="hover:underline text-gray-300">Home</router-link></li>
          <li><router-link to="/produk" class="hover:underline text-gray-300">Produk</router-link></li>
          <li><router-link to="/tentang" class="hover:underline text-gray-300">Jasa</router-link></li>
          <li><router-link to="/kontak" class="hover:underline text-gray-300">Kontak</router-link></li>
        </ul>
      </div>

      <!-- Sosial Media -->
      <div>
        <h4 class="text-md font-semibold mb-2">Hubungi Kami</h4>
        <p class="text-sm text-gray-300">WhatsApp: <a href="https://wa.me/6289505024468" target="_blank" class="underline">0895-0502-4468</a></p>
        <p class="text-sm text-gray-300">Email: dainsleif@digital.id</p>
      </div>
    </div>

    <div class="mt-8 text-center text-xs text-gray-500 border-t border-white/10 pt-4">
      &copy; 2025 Dainsleif Digital. Build Different.
    </div>
  </footer>
</template>
