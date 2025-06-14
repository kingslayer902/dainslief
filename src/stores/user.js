// src/stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null
  }),

  actions: {
    // Login: Simpan data user ke state dan localStorage
    login(data) {
      this.user = data
      localStorage.setItem('user', JSON.stringify(data))
    },

    // Logout: Hapus user dari state dan localStorage
    logout() {
      this.user = null
      localStorage.removeItem('user')
    },

    // Update profil: nama, foto, dll
    updateProfile(newData) {
      this.user = {
        ...this.user,
        ...newData
      }
      localStorage.setItem('user', JSON.stringify(this.user))
    },

    // Register: Tambah user baru ke daftar users
    register(newUser) {
      const users = JSON.parse(localStorage.getItem('users')) || []
      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))
      this.login(newUser) // Login otomatis setelah register
    }
  }
})
