<template>
  <section class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
    <h2 class="text-2xl font-bold mb-4 text-purple-700">Komentar Pengguna</h2>

    <!-- Form tambah komentar -->
    <form @submit.prevent="postComment" class="mb-6 space-y-4">
      <div>
        <label for="name" class="block font-semibold mb-1">Nama</label>
        <input
          id="name"
          v-model="newComment.name"
          type="text"
          placeholder="Masukkan nama lengkap"
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <label for="email" class="block font-semibold mb-1">Email</label>
        <input
          id="email"
          v-model="newComment.email"
          type="email"
          placeholder="Masukkan email valid"
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <label for="message" class="block font-semibold mb-1">Komentar</label>
        <textarea
          id="message"
          v-model="newComment.message"
          rows="4"
          placeholder="Tulis komentar Anda di sini..."
          class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-purple-700 text-white px-5 py-2 rounded hover:bg-purple-800 transition"
      >
        Kirim Komentar
      </button>
    </form>

    <!-- Daftar komentar -->
    <div v-if="comments.length === 0" class="text-gray-500 text-center italic">
      Belum ada komentar. Jadilah yang pertama!
    </div>

    <ul>
      <li
        v-for="comment in comments"
        :key="comment.id"
        class="mb-4 border-b border-gray-200 pb-4"
      >
        <div class="flex justify-between items-center mb-1">
          <h3 class="font-semibold text-purple-700">{{ comment.name }}</h3>
          <small class="text-gray-500 text-sm">{{ comment.email }}</small>
        </div>

        <p class="mb-2 whitespace-pre-line">{{ comment.message }}</p>

        <div class="flex space-x-3 text-sm">
          <button
            @click="startEdit(comment)"
            class="text-blue-600 hover:underline"
          >
            Edit
          </button>
          <button
            @click="deleteComment(comment.id)"
            class="text-red-600 hover:underline"
          >
            Hapus
          </button>
        </div>

        <!-- Form edit komentar muncul saat sedang edit -->
        <div v-if="editingId === comment.id" class="mt-3 space-y-3">
          <input
            v-model="editComment.name"
            type="text"
            placeholder="Nama lengkap"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            v-model="editComment.email"
            type="email"
            placeholder="Email valid"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            v-model="editComment.message"
            rows="3"
            placeholder="Komentar"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          ></textarea>

          <div class="flex space-x-3">
            <button
              @click="updateComment(comment.id)"
              class="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
            >
              Simpan
            </button>
            <button
              @click="cancelEdit"
              class="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500 transition"
            >
              Batal
            </button>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const comments = ref([])

const newComment = ref({
  name: '',
  email: '',
  message: '',
})

const editingId = ref(null)
const editComment = ref({
  name: '',
  email: '',
  message: '',
})

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function postComment() {
  if (!newComment.value.name || !newComment.value.email || !newComment.value.message) {
    toast.error('Semua kolom harus diisi!')
    return
  }

  if (!validateEmail(newComment.value.email)) {
    toast.error('Email tidak valid, silakan masukkan email yang benar.')
    return
  }

  comments.value.push({
    id: Date.now(),
    ...newComment.value,
  })

  toast.success('Komentar berhasil dikirim!')

  // Reset form
  newComment.value = { name: '', email: '', message: '' }
}

function startEdit(comment) {
  editingId.value = comment.id
  editComment.value = { ...comment }
}

function cancelEdit() {
  editingId.value = null
  editComment.value = { name: '', email: '', message: '' }
}

function updateComment(id) {
  if (!editComment.value.name || !editComment.value.email || !editComment.value.message) {
    toast.error('Semua kolom harus diisi!')
    return
  }

  if (!validateEmail(editComment.value.email)) {
    toast.error('Email tidak valid, silakan masukkan email yang benar.')
    return
  }

  const index = comments.value.findIndex((c) => c.id === id)
  if (index !== -1) {
    comments.value[index] = { id, ...editComment.value }
    toast.success('Komentar berhasil diperbarui!')
    cancelEdit()
  }
}

function deleteComment(id) {
  comments.value = comments.value.filter((c) => c.id !== id)
  toast.info('Komentar berhasil dihapus.')
}
</script>
