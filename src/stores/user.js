// src/stores/user.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  // Data user yang sudah terdaftar, termasuk default user
  const users = ref([
    {
      email: 'user@example.com',
      password: '123456',
      name: 'Default User',
      photoURL: 'https://i.pravatar.cc/150?u=user@example.com',
    },
    {
      email: 'admin@example.com',
      password: 'admin123',
      name: 'Admin',
      photoURL: 'https://i.pravatar.cc/150?u=admin@example.com',
    },
    {
      email: 'test@example.com',
      password: 'test123',
      name: 'Test Account',
      photoURL: 'https://i.pravatar.cc/150?u=test@example.com',
    },
  ])

  // Ambil user dari localStorage kalau ada
  const storedUser = localStorage.getItem('user')
  const user = ref(storedUser ? JSON.parse(storedUser) : null)

  // Getter untuk cek apakah user sudah login
  const isLoggedIn = computed(() => !!user.value)

  // Register user baru (cek email)
  function register(newUser) {
    const exists = users.value.some(u => u.email === newUser.email)
    if (exists) return false

    // Tambahkan default nama dan foto jika tidak ada
    const userToAdd = {
      name: newUser.name || 'New User',
      photoURL:
        newUser.photoURL ||
        `https://i.pravatar.cc/150?u=${newUser.email}`,
      ...newUser,
    }

    users.value.push(userToAdd)
    return true
  }

  // Login berdasarkan email & password
  function login({ email, password }) {
    const found = users.value.find(
      u => u.email === email && u.password === password
    )
    if (found) {
      user.value = { ...found }
      localStorage.setItem('user', JSON.stringify(user.value)) // simpan ke localStorage
      return true
    }
    return false
  }

  // Logout user
  function logout() {
    user.value = null
    localStorage.removeItem('user') // hapus dari localStorage
  }

  // Update nama atau foto
  function updateProfile({ name, photoURL }) {
    if (!user.value) return
    user.value.name = name
    user.value.photoURL = photoURL

    // Update juga di daftar users
    const idx = users.value.findIndex(u => u.email === user.value.email)
    if (idx !== -1) {
      users.value[idx].name = name
      users.value[idx].photoURL = photoURL
    }

    // Update localStorage juga
    localStorage.setItem('user', JSON.stringify(user.value))
  }

  return {
    users,
    user,
    isLoggedIn,
    register,
    login,
    logout,
    updateProfile,
  }
})
