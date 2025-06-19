import { defineStore } from 'pinia'

export const useOrderStore = defineStore('order', {
  state: () => ({
    latestOrder: {
      nama: '',
      nomor: '',
      produk: '',
      status: 'Menunggu konfirmasi', // bisa diganti manual/admin nanti
      estimasi: '2–3 hari'
    }
  }),
  actions: {
    setOrder({ nama, nomor, produk }) {
      this.latestOrder = {
        nama,
        nomor,
        produk,
        status: 'Sedang diproses',
        estimasi: '2–3 hari'
      }
    },

    updateStatus(statusBaru) {
      this.latestOrder.status = statusBaru
    }
  }
})
