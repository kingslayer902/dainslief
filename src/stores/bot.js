// src/stores/bot.js
import { defineStore } from 'pinia'

export const useBotStore = defineStore('bot', {
  state: () => ({
    history: []
  }),
  actions: {
    sendMessage(message) {
      const userMsg = { role: 'user', text: message }
      this.history.push(userMsg)

      const reply = this.generateReply(message)
      const botMsg = { role: 'bot', text: reply }
      this.history.push(botMsg)
    },
    generateReply(message) {
      const msg = message.toLowerCase()
      if (msg.includes('halo') || msg.includes('hai')) return 'Hai juga! Ada yang bisa kami bantu? 😊'
      if (msg.includes('produk') || msg.includes('barang')) return 'Semua produk bisa kamu cek di halaman Product yaa 🛍️'
      if (msg.includes('checkout')) return 'Untuk checkout, pastikan kamu sudah login dulu ya. Setelah itu klik tombol Checkout di keranjang.'
      if (msg.includes('gambar') || msg.includes('foto')) return 'Kalau gambar tidak tampil, coba refresh dulu atau pastikan koneksi stabil. 📸'
      if (msg.includes('login')) return 'Klik tombol Login di pojok kanan atas, lalu masukin email dan password kamu.'
      if (msg.includes('alamat') || msg.includes('lokasi')) return 'Kami online 100%, tapi kantor pusat kami di Jakarta Selatan. 📍'
      if (msg.includes('bayar') || msg.includes('payment')) return 'Kita support e-wallet, bank transfer, dan COD yaa 💳'
      if (msg.includes('admin')) return 'Kalau butuh bantuan admin, langsung aja hubungi via WhatsApp yaa 💬'
      return 'Hmm... bisa diulangi lagi pertanyaannya? Atau kamu bisa tanya soal produk, checkout, login, dll ✨'
    }
  }
})
