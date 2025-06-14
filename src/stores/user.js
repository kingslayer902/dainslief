import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null
  }),
  actions: {
    login(data) {
      this.user = data
      localStorage.setItem('user', JSON.stringify(data))
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
    },
    updateProfile(newData) {
      this.user = {
        ...this.user,
        ...newData
      }
      localStorage.setItem('user', JSON.stringify(this.user))
    },
    register(newUser) {
      const users = JSON.parse(localStorage.getItem('users')) || []
      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))
      this.login(newUser)
    }
  }
})
