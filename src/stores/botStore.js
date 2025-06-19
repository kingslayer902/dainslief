import { defineStore } from 'pinia'

export const useBotStore = defineStore('bot', {
  state: () => ({
    messages: []
  }),
  actions: {
    sendMessage(text) {
      this.messages.push({ from: 'user', text })

      setTimeout(() => {
        this.generateReply(text)
      }, 600)
    },
    generateReply(text) {
      let reply = 'Terima kasih, pesan Anda sudah diterima!'

      if (text.toLowerCase().includes('harga')) {
        reply = 'Silakan cek halaman produk ya!'
      } else if (text.toLowerCase().includes('beli')) {
        reply = 'Klik tombol “Pesan Sekarang” di produk yang kamu pilih.'
      } else if (text.toLowerCase().includes('halo') || text.toLowerCase().includes('hai')) {
        reply = 'Halo juga! Ada yang bisa kami bantu?'
      }

      this.messages.push({ from: 'bot', text: reply })
    }
  }
})
