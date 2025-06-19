<template>
  <section class="p-10 bg-[#16161A] min-h-screen text-white">
    <h2 class="text-3xl font-bold text-[#7F5AF0] mb-6">Admin Panel</h2>

    <div class="grid md:grid-cols-2 gap-6">
      <!-- Tambah Produk -->
      <form @submit.prevent="tambahProduk" class="bg-[#1E1E24] p-4 rounded space-y-3">
        <h3 class="text-lg font-semibold mb-2">Tambah Produk</h3>
        <input v-model="nama" placeholder="Nama Produk" class="input-style" />
        <input v-model="deskripsi" placeholder="Deskripsi" class="input-style" />
        <input v-model.number="harga" type="number" placeholder="Harga" class="input-style" />
        <input v-model="gambar" placeholder="URL Gambar" class="input-style" />
        <button type="submit" class="btn-submit">Tambah Produk</button>
      </form>

      <!-- Tambah Jasa -->
      <form @submit.prevent="tambahJasa" class="bg-[#1E1E24] p-4 rounded space-y-3">
        <h3 class="text-lg font-semibold mb-2">Tambah Jasa</h3>
        <input v-model="jasaNama" placeholder="Nama Jasa" class="input-style" />
        <input v-model="jasaDeskripsi" placeholder="Deskripsi" class="input-style" />
        <input v-model.number="jasaHarga" type="number" placeholder="Harga" class="input-style" />
        <input v-model="jasaGambar" placeholder="URL Gambar" class="input-style" />
        <button type="submit" class="btn-submit">Tambah Jasa</button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/productStore'
import toast from 'vue3-toastify' // ✅ Ganti dari useToast ke default import

const store = useProductStore()

// Produk
const nama = ref('')
const deskripsi = ref('')
const harga = ref('')
const gambar = ref('')

// Jasa
const jasaNama = ref('')
const jasaDeskripsi = ref('')
const jasaHarga = ref('')
const jasaGambar = ref('')

function tambahProduk() {
  store.products.push({
    id: Date.now(),
    nama: nama.value,
    deskripsi: deskripsi.value,
    harga: parseInt(harga.value),
    gambar: gambar.value
  })
  toast.success('Produk berhasil ditambahkan!') // ✅ Ini aman
  nama.value = deskripsi.value = harga.value = gambar.value = ''
}

function tambahJasa() {
  store.services.push({
    id: Date.now(),
    nama: jasaNama.value,
    deskripsi: jasaDeskripsi.value,
    harga: parseInt(jasaHarga.value),
    gambar: jasaGambar.value
  })
  toast.success('Jasa berhasil ditambahkan!') // ✅ Ini juga aman
  jasaNama.value = jasaDeskripsi.value = jasaHarga.value = jasaGambar.value = ''
}
</script>
