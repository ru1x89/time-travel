<template>
  <div class="max-w-7xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="max-w-5xl mx-auto lg:flex space-y-10">
      <div class="w-full lg:w-1/2 px-2 lg:px-8">
        <PostsContainer
          :posts="getPosts"
          :errors="errors"
          @move-post="swapPosts"
        />
      </div>

      <div class="w-full lg:w-1/2 px-2 lg:px-8">
        <ActionsContainer
          :actions-list="getActions"
          @time-travel="timeTravel"
        />
      </div>
    </div>

    <div class="skew-backdrop"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostsContainer from '@/components/PostsContainer'
import ActionsContainer from '@/components/ActionsContainer'

export default {
  name: 'App',

  components: {
    PostsContainer,
    ActionsContainer,
  },

  data() {
    return {
      errors: '',
    }
  },

  created() {
    this.performPostsFetch()
  },

  computed: {
    ...mapGetters(['getPosts', 'getActions']),
  },

  methods: {
    ...mapActions(['fetchPosts', 'swapPosts', 'timeTravel']),
    async performPostsFetch() {
      try {
        await this.fetchPosts(5)
      } catch (error) {
        this.errors = 'An error occurred. Unable to load posts.'
      }
    },
  },
}
</script>

<style>
.skew-backdrop::before {
  content: '';
  @apply absolute;
  @apply top-0;
  @apply left-1/2;
  @apply bg-purple-400;
  width: 150vw;
  height: 55vh;
  z-index: -1;
  transform: translate(-50%, -50%) rotate(-10deg) skew(-10deg);
}
</style>
