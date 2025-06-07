<template>
  <section class="p-8 max-w-7xl mx-auto bg-gray-50 min-h-screen">
    <h2 class="text-4xl font-extrabold text-center text-purple-700 mb-10">
      Produk Unggulan <span class="text-pink-500">Dainsleif</span>
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="h-48 w-full object-cover rounded-t-lg"
        />
        <div class="p-4 flex flex-col flex-grow">
          <h3 class="text-lg font-semibold mb-2 text-purple-700">{{ product.name }}</h3>
          <p class="text-pink-600 font-bold mb-4">Rp {{ product.price.toLocaleString('id-ID') }}</p>
          <button
            @click="addToCart(product)"
            class="mt-auto bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition cursor-pointer"
          >
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>

    <!-- Komentar section di bawah produk -->
    <CommentSection />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'


const products = ref([
  {
    id: 1,
    name: 'Kaos Lengan Pendek',
    price: 120000,
    image: 'https://picsum.photos/id/433/300/200',
  },
  {
    id: 2,
    name: 'Sneakers Stylish',
    price: 350000,
    image: 'https://picsum.photos/id/1005/300/200',
  },
  {
    id: 3,
    name: 'Jam Tangan Elegan',
    price: 750000,
    image: 'https://picsum.photos/id/1062/300/200',
  },
  {
    id: 4,
    name: 'Tas Ransel Kekinian',
    price: 450000,
    image: 'https://picsum.photos/id/292/300/200',
  },
  {
    id: 5,
    name: 'Kacamata Hitam',
    price: 120000,
    image: 'https://picsum.photos/id/1074/300/200',
  },
  {
    id: 6,
    name: 'Jaket Denim',
    price: 320000,
    image: 'https://picsum.photos/id/866/300/200',
  },
  {
    id: 7,
    name: 'Sepatu Formal Kulit',
    price: 550000,
    image: 'https://picsum.photos/id/1020/300/200',
  },
  {
    id: 8,
    name: 'Sweater Rajut',
    price: 180000,
    image: 'https://picsum.photos/id/1015/300/200',
  },
])

function addToCart(product) {
  toast.success(`Produk "${product.name}" berhasil dibeli!`, {
    position: 'top-right',
    autoClose: 3000,
  })
}
</script>
