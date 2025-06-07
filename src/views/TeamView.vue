<template>
  <section class="p-8 max-w-5xl mx-auto min-h-screen bg-white">
    <h2 class="text-4xl font-extrabold text-center text-purple-700 mb-10">
      Tim <span class="text-pink-500">Dainsleif</span>
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div
        v-for="member in team"
        :key="member.id"
        class="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center"
      >
        <img
          :src="member.image"
          :alt="member.name"
          class="w-32 h-32 rounded-full object-cover mb-4 border-4 border-pink-400"
        />
        <h3 class="text-xl font-semibold text-purple-700">{{ member.name }}</h3>
        <p class="text-pink-600 mb-2">{{ member.email }}</p>
        <p class="text-gray-600">Anggota tim yang berdedikasi untuk menghadirkan pengalaman terbaik di Dainsleif.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const team = ref([
  {
    id: 1,
    name: 'Rizky Andriansyah',
    email: 'rizky.andriansyah@example.com',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    email: 'siti.nurhaliza@example.com',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Ahmad Fauzan',
    email: 'ahmad.fauzan@example.com',
    image: 'https://randomuser.me/api/portraits/men/54.jpg',
  },
  {
    id: 4,
    name: 'Dewi Sartika',
    email: 'dewi.sartika@example.com',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    id: 5,
    name: 'Budi Santoso',
    email: 'budi.santoso@example.com',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
])

</script>
