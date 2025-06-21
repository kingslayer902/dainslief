<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white p-6 rounded-lg w-80 text-black space-y-3">
      <h2 class="text-lg font-semibold text-[#7F5AF0]">Form Pemesanan</h2>

      <input v-model="nama" type="text" placeholder="Nama lengkap" class="input-style" />
      <input v-model="alamat" type="text" placeholder="Alamat lengkap" class="input-style" />

      <div class="flex justify-between items-center mt-3">
        <button @click="kirimPesanan" class="bg-[#2CB67D] text-white px-4 py-2 rounded hover:bg-emerald-600">
          Kirim
        </button>
        <button @click="$emit('close')" class="text-gray-500 hover:text-black text-sm">Batal</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const props = defineProps({
  show: Boolean,
  produkNama: String,
  produkHarga: String
})

const emit = defineEmits(['close'])

const nama = ref('')
const alamat = ref('')

function kirimPesanan() {
  if (!nama.value || !alamat.value) {
    toast.error('Isi semua data dulu ya!')
    return
  }

  const pesan = `Halo Dainsleif! Saya ingin memesan:\n\nProduk: ${props.produkNama} \nNama: ${nama.value}\nAlamat: ${alamat.value}`
  const waURL = `https://wa.me/6289636446722?text=${encodeURIComponent(pesan)}`
  window.open(waURL, '_blank')

  toast.success('Pesanan berhasil dikirim!')
  emit('close')
}
</script>
