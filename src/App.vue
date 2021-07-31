<template>
  <div id="app" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div class="max-w-5xl mx-auto lg:flex space-y-10">
      <div class="w-full lg:w-1/2 px-2 lg:px-8">
        <PostsContainer />
      </div>

      <div class="w-full lg:w-1/2 px-2 lg:px-8">
        <ActionsContainer />
      </div>
    </div>

    <div class="skew-backdrop"></div>
  </div>
</template>

<script>
import PostsContainer from '@/components/PostsContainer'
import ActionsContainer from '@/components/ActionsContainer'

export default {
  name: 'App',

  components: {
    PostsContainer,
    ActionsContainer,
  },
}
</script>

<style>
.skew-backdrop::before {
  content: '';
  @apply absolute;
  @apply bg-purple-400;
  @apply top-0;
  @apply left-1/2;
  width: 150vw;
  height: 55vh;
  z-index: -1;
  transform: translate(-50%, -50%) rotate(-10deg) skew(-10deg);
}
</style>
