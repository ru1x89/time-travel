import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import { createLocalVue } from '@vue/test-utils'
import { state, getters, mutations, actions } from '@/store/index'
import mockData from '@/data/posts'

jest.mock('axios', () => {
  return {
    get: () => ({ data: mockData }),
  }
})

describe('App Store', () => {
  let vuexStore
  let localVue
  let store

  beforeAll(() => {
    vuexStore = {
      state,
      getters,
      mutations,
      actions,
    }

    localVue = createLocalVue()
    localVue.use(Vuex)
    store = new Vuex.Store(cloneDeep(vuexStore))
  })

  it('Check the post count when list of posts are loaded', async () => {
    expect(store.state.postsList).toEqual([])
    await store.dispatch('fetchPosts')
    expect(store.state.postsList.length).toBe(5)
  })

  it('Check the actions list when posts are swapped', () => {
    const item = { ...mockData[0] }

    expect(store.state.actionsList).toEqual([])
    store.dispatch('swapPosts', { item, index: 0, direction: 1 })
    store.dispatch('swapPosts', { item, index: 4, direction: -1 })
    expect(store.state.actionsList.length).toBe(2)
  })

  it('Check if the post list updates after time travel', async () => {
    await store.dispatch('timeTravel', 0)

    expect(store.state.postsList[4]).toEqual({
      userId: 1,
      id: 5,
      title: 'nesciunt quas odio',
      body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
    })
  })
})
