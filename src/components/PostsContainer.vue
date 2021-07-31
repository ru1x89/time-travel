<template>
  <div>
    <div class="mb-3 text-xl font-semibold text-white">Sortable Post List</div>

    <div class="space-y-3">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post'

export default {
  name: 'PostsContainer',

  components: {
    Post,
  },
}
</script>
