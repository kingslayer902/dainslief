<template>
  <div class="max-w-md mx-auto mt-12 bg-white p-6 shadow rounded text-center">
    <div class="mb-4">
      <img
        v-if="photoURL"
        :src="photoURL"
        alt="Profile Photo"
        class="w-24 h-24 rounded-full mx-auto object-cover"
      />
      <div
        v-else
        class="w-24 h-24 mx-auto rounded-full bg-yellow-300 text-yellow-900 font-bold flex items-center justify-center text-5xl select-none"
      >
        {{ initials }}
      </div>
    </div>

    <h1 class="text-2xl font-bold mb-2">{{ name }}</h1>
    <p class="text-gray-700 mb-4">Email: {{ email }}</p>

    <form @submit.prevent="updateProfile" class="space-y-4 text-left max-w-sm mx-auto">
      <label class="block">
        <span class="text-gray-700">Name</span>
        <input
          v-model="formName"
          type="text"
          class="mt-1 block w-full border rounded p-2"
          placeholder="Your name"
          required
        />
      </label>
      <label class="block">
        <span class="text-gray-700">Photo URL</span>
        <input
          v-model="formPhotoURL"
          type="url"
          class="mt-1 block w-full border rounded p-2"
          placeholder="Link to your photo"
        />
      </label>

      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer"
      >
        Update Profile
      </button>
    </form>

    <button @click="logout" class="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer w-full">
      Logout
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

// Extract user data with fallback
const user = userStore.user || {}
const name = computed(() => user.name || 'User')
const email = computed(() => user.email || '')
const photoURL = computed(() => user.photoURL || null)

// For input form, create reactive refs
const formName = ref(name.value)
const formPhotoURL = ref(photoURL.value)

// Generate initials from name
const initials = computed(() => {
  if (!formName.value) return ''
  return formName.value
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
})

// Update profile method
function updateProfile() {
  userStore.updateProfile({
    name: formName.value.trim(),
    photoURL: formPhotoURL.value.trim() || null,
  })
  alert('Profile updated!')
}

// Logout method
function logout() {
  userStore.logout()
  router.push('/login')
}
</script>
