<template>
  <div v-if="user" class="max-w-md mx-auto mt-12 bg-white p-6 shadow rounded text-center">
    <div class="mb-4">
      <img
        v-if="formPhotoDataURL"
        :src="formPhotoDataURL"
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

    <h1 class="text-2xl font-bold mb-2">{{ formName }}</h1>
    <p class="text-gray-700 mb-4">Email: {{ formEmail }}</p>

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
        <span class="text-gray-700">Upload Photo</span>
        <input
          type="file"
          accept="image/*"
          class="mt-1 block w-full border rounded p-2"
          @change="handlePhotoUpload"
        />
      </label>

      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer"
        :disabled="loading"
      >
        {{ loading ? 'Updating...' : 'Update Profile' }}
      </button>
    </form>

    <button @click="logout" class="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer w-full">
      Logout
    </button>
  </div>

  <div v-else class="text-center mt-12">
    <p>Loading user data...</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

const userStore = useUserStore()
const router = useRouter()

const user = computed(() => userStore.user)

const loading = ref(false)
const formName = ref('')
const formEmail = ref('')
const formPhotoDataURL = ref('')

// Inisialisasi form dari user
const initForm = () => {
  formName.value = user.value?.name || ''
  formEmail.value = user.value?.email || ''
  formPhotoDataURL.value = user.value?.photoDataURL || ''
}

// Handle upload file
function handlePhotoUpload(event) {
  const file = event.target.files[0]
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader()
    reader.onload = () => {
      formPhotoDataURL.value = reader.result
    }
    reader.readAsDataURL(file)
  } else {
    toast.error('Mohon unggah file gambar yang valid!')
  }
}

watch(user, (newUser) => {
  if (!newUser) {
    router.push('/login')
  } else {
    initForm()
  }
}, { immediate: true })

function updateProfile() {
  if (!formName.value.trim()) {
    toast.error('Nama tidak boleh kosong')
    return
  }

  loading.value = true
  try {
    userStore.updateProfile({
      name: formName.value.trim(),
      photoDataURL: formPhotoDataURL.value || null
    })
    toast.success('Profil berhasil diperbarui!')
  } catch (e) {
    toast.error('Gagal memperbarui profil')
  } finally {
    loading.value = false
  }
}

function logout() {
  userStore.logout()
  router.push('/login')
}

const initials = computed(() => {
  const parts = formName.value.trim().split(' ')
  return parts.map(p => p[0]).join('').toUpperCase().slice(0, 2)
})
</script>
