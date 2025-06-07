<template>
  <section
  class="relative bg-gradient-to-br from-purple-700 via-pink-600 to-red-500 min-h-screen flex flex-col justify-center items-center text-white px-6 py-24"
>


    <div class="max-w-4xl text-center space-y-6">
      <h1 class="text-5xl font-extrabold drop-shadow-lg animate-fadeInDown">
        Selamat Datang di <span class="text-yellow-300">Dainsleif</span>
      </h1>
      <p class="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
        Toko online terpercaya dengan berbagai produk trendi dan berkualitas tinggi.  
        Temukan fashion, aksesori, dan gadget terbaru yang siap mempercantik hari-harimu!
      </p>
      <button
        @click="$router.push('/product')"
        class="mt-6 bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300 animate-bounce cursor-pointer"
      >
        Jelajahi Produk Kami
      </button>
    </div>

    <!-- Decorative floating circles -->
    <div
      class="absolute rounded-full bg-yellow-300 opacity-30 w-36 h-36 top-10 left-10 animate-pulse"
    ></div>
    <div
      class="absolute rounded-full bg-pink-400 opacity-20 w-56 h-56 bottom-20 right-20 animate-ping"
    ></div>
  </section>
</template>

<style scoped>
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fadeInDown {
  animation: fadeInDown 1s ease forwards;
}
.animate-fadeInUp {
  animation: fadeInUp 1.2s ease forwards;
}
</style>
