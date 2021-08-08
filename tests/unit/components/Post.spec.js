import { shallowMount } from '@vue/test-utils'
import Post from '@/components/Post.vue'

describe('Post.vue', () => {
  let wrapper
  const props = {
    itemLength: 5,
    currentIndex: 0,
    item: {
      id: 1,
      title: 'Example post title',
    },
  }

  beforeEach(() => {
    wrapper = shallowMount(Post, {
      propsData: props,
    })
  })

  it('Make sure post title text is rendered with correct text', () => {
    expect(wrapper.find('[data-title="post-title"]').text()).toEqual(
      `${props.item.id} - ${props.item.title}`
    )
  })

  it('Check emit event when press post move bottom button', () => {
    wrapper.find('#btn_move-down-0').trigger('click')

    expect(wrapper.emitted()['move-post'][0][0]).toEqual({
      direction: 1,
      index: 0,
      item: props.item,
    })
  })

  it('Make sure the move-up arrow button is not rendered in first post', () => {
    const moveUpButton = wrapper.find('#btn_move-up-0')

    expect(moveUpButton.exists()).toBe(false)
  })

  it('Make sure the move-down arrow button is not rendered in last post', () => {
    const moveDownButton = wrapper.find('#btn_move-down-4')

    expect(moveDownButton.exists()).toBe(false)
  })
})
