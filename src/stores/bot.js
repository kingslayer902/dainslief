import { defineStore } from 'pinia'

export const useBotStore = defineStore('bot', {
  state: () => ({
    history: []
  }),
  actions: {
    sendMessage(message) {
      const userMsg = { role: 'user', text: message }
      this.history.push(userMsg)

      // Simulasi balasan (logika lokal)
      const reply = this.generateReply(message)
      const botMsg = { role: 'bot', text: reply }
      this.history.push(botMsg)
    },
    generateReply(message) {
      const msg = message.toLowerCase()
      if (msg.includes('halo') || msg.includes('hai')) return 'Halo! Ada yang bisa kami bantu hari ini? 😊'
      if (msg.includes('produk') || msg.includes('barang')) return 'Semua produk bisa kamu lihat di halaman Home & Product.'
      if (msg.includes('buka') || msg.includes('jam')) return 'Kami buka setiap hari pukul 08.00 - 22.00.'
      if (msg.includes('alamat') || msg.includes('lokasi')) return 'Kami beroperasi online, namun kantor pusat ada di Jakarta.'
      if (msg.includes('payment') || msg.includes('bayar')) return 'Kami menerima pembayaran via e-wallet, transfer, dan COD.'
      return 'Maaf, bisa diulang pertanyaannya? 😊'
    }
  }
})
