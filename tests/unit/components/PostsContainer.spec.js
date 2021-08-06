import { shallowMount } from '@vue/test-utils'
import PostsContainer from '@/components/PostsContainer.vue'
import Post from '@/components/Post.vue'
import mockData from '@/data/posts'

describe('PostsContainer.vue', () => {
  let wrapper
  const postsContainerProps = {
    posts: mockData,
  }

  beforeEach(() => {
    wrapper = shallowMount(PostsContainer, {
      propsData: postsContainerProps,
    })
  })

  it('Display posts if exist', () => {
    const postItem = wrapper.findComponent(Post)

    expect(postItem.is(Post)).toBe(true)
  })

  it('Check for the number of posts items displayed is correct', () => {
    const postItem = wrapper.findAllComponents(Post)

    expect(postItem.length).toEqual(5)
  })
})
