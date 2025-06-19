<template>
  <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white p-6 rounded-lg w-80 text-black space-y-3">
      <h2 class="text-lg font-semibold text-[#7F5AF0]">Form Pemesanan</h2>

      <input v-model="nama" type="text" placeholder="Nama lengkap" class="input-style" />
      <input v-model="nomor" type="text" placeholder="Nomor WhatsApp" class="input-style" />
      <input v-model="produk" type="text" placeholder="Nama produk" class="input-style" />

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
import { ref } from 'vue'
import { useOrderStore } from '@/stores/orderStore'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const props = defineProps({
  show: Boolean,
  produkNama: String
})

const emit = defineEmits(['close'])

const nama = ref('')
const nomor = ref('')
const produk = ref(props.produkNama || '')

const orderStore = useOrderStore()

function kirimPesanan() {
  if (!nama.value || !nomor.value || !produk.value) {
    toast.error('Isi semua data dulu ya!')
    return
  }

  orderStore.setOrder({
    nama: nama.value,
    nomor: nomor.value,
    produk: produk.value
  })

  const noHP = nomor.value.replace(/^0/, '62')
  const waURL = `https://wa.me/${noHP}?text=Halo, saya ingin pesan ${produk.value}`
  window.open(waURL, '_blank')

  toast.success('Pesanan berhasil dikirim!')
  emit('close')
}
</script>

<style scoped>
.input-style {
  width: 100%;
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
}
</style>
