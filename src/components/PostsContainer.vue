<template>
  <div>
    <div class="mb-3 text-xl font-semibold text-white">Sortable Post List</div>

    <transition-group class="space-y-3" name="swap">
      <Post
        v-for="(post, index) in posts"
        :item="post"
        :current-index="index"
        :item-length="posts.length"
        :key="post.id"
        v-on="$listeners"
      />
    </transition-group>

    <div
      class="
        flex
        items-center
        justify-center
        px-2
        py-7
        bg-white
        text-sm text-center
        shadow-md
        rounded-md
        transition
        ease-in-out
        duration-150
        cursor-not-allowed
      "
      v-if="!posts.length"
    >
      <svg
        class="animate-spin mr-2 w-5 h-5 text-purple-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <span class="my-0.5 text-gray-800">Loading posts...</span>
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

  props: {
    posts: Array,
  },
}
</script>

<style scoped>
.swap-move {
  @apply duration-300;
}
</style>
