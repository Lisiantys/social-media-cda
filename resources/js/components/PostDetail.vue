<template>
  <div v-if="post">
    <h2>{{ post.content }}</h2>
    <p>{{ post.tags }}</p>
    <p>Posted by: {{ post.user.name }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

export default {
  setup() {
    const post = ref(null)
    const route = useRoute()

    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/posts/${route.params.id}`)
        post.value = response.data.post
      } catch (error) {
        console.error('Error fetching post:', error)
      }
    }

    onMounted(fetchPost)

    return { post }
  }
}
</script>

<style>
h2 {
  margin-bottom: 10px;
}
p {
  margin-bottom: 10px;
}
</style>
