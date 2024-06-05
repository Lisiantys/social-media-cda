<template>
  <div>
    <h2>Create Post</h2>
    <form @submit.prevent="submitForm">
      <textarea v-model="form.content" placeholder="Content" required></textarea>
      <input type="text" v-model="form.tags" placeholder="Tags" required />
      <button type="submit">Create Post</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const form = ref({
      content: '',
      tags: ''
    })
    const router = useRouter()

    const submitForm = async () => {
      try {
        await axios.post('/api/posts', form.value, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        router.push('/')
      } catch (error) {
        console.error('Error creating post:', error)
      }
    }

    return { form, submitForm }
  }
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
textarea, input {
  padding: 8px;
  font-size: 16px;
}
button {
  padding: 10px;
  font-size: 16px;
}
</style>
