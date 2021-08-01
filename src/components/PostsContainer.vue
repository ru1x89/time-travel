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

    <div
      class="
        m-4
        p-4
        absolute
        right-0
        bottom-0
        border-l-4 border-red-400
        bg-red-50
        shadow-md
        rounded
      "
      v-if="errors"
    >
      <div class="flex">
        <div class="-ml-0.5 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-red-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-2.5 text-sm text-red-700">
          {{ errors }}
        </div>
      </div>
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
    errors: String,
  },
}
</script>

<style scoped>
.swap-move {
  @apply duration-300;
}
</style>
