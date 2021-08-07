import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import App from '@/App.vue'
import Post from '@/components/Post'
import Action from '@/components/Action'
import mockPosts from '@/data/posts'
import mockActions from '@/data/actions'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('App.vue', () => {
  let getters
  let actions
  let store
  let wrapper

  beforeEach(() => {
    actions = {
      fetchPosts: jest.fn(),
      swapPosts: jest.fn(),
      timeTravel: jest.fn(),
    }

    getters = {
      getPosts: () => mockPosts,
      getActions: () => mockActions,
    }

    store = new Vuex.Store({
      actions,
      getters,
    })

    wrapper = mount(App, { store, localVue })
  })

  it('Checks data fetch functionality of posts', () => {
    expect(actions.fetchPosts).toHaveBeenCalled()
  })

  it('Checks the number of posts & actions loaded are correct', () => {
    expect(wrapper.findAllComponents(Post).length).toEqual(5)
    expect(wrapper.findAllComponents(Action).length).toEqual(2)
  })
})
