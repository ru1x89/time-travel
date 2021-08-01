<template>
  <div>
    <div class="mb-3 text-xl font-semibold text-white">Sortable Post List</div>

    <div class="space-y-3">
      <Post
        v-for="(post, index) in posts"
        :item="post"
        :index="index"
        :item-length="posts.length"
        :key="post.id"
      />
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

  data() {
    return {
      posts: [
        {
          userId: 1,
          id: 1,
          title: 'Sunt aut facere repellat provident',
          body: 'quia et suscipitsunt rem eveniet architecto',
        },
        {
          userId: 1,
          id: 2,
          title: 'Qui est esse',
          body: 'est rerum temporequi neque nisi nulla',
        },
        {
          userId: 1,
          id: 3,
          title: 'Ea molestias quasi exercitationem',
          body: 'et iusto sedlabore et velit aut',
        },
        {
          userId: 1,
          id: 4,
          title: 'Eum et est occaecati',
          body: 'ullam et saepevoluptatem rerum illo velit',
        },
        {
          userId: 1,
          id: 5,
          title: 'Nesciunt quas odio',
          body: 'repudiandae veniam quaerataut tenetur',
        },
      ],
    }
  },
}
</script>
