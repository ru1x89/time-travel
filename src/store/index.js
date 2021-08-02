import Vue from 'vue'
import Vuex from 'vuex'
import PostService from '@/services/postService'
import { swapListItems } from '@/helpers/swapListItems'

Vue.use(Vuex)

export const state = {
  postsList: [],
  actionsList: [],
}

export const mutations = {
  updatePosts: (state, payload) => {
    state.postsList = payload
  },
  updateActions: (state, payload) => {
    state.actionsList.push(payload)
  },
}

export const actions = {
  fetchPosts: async ({ commit }, count) => {
    try {
      const response = await PostService.fetchPosts(count)

      const postList = response.data

      commit('updatePosts', postList)
    } catch (error) {
      throw new Error('Unable fetch posts')
    }
  },

  swapPosts: ({ commit, state: { postsList } }, { index, direction, item }) => {
    const sortedPostsList = swapListItems({
      itemsList: postsList,
      index1: index,
      index2: index + direction,
    })

    const movePayload = {
      from: index,
      to: index + direction,
      description: `Moved post ${item.id} from index ${index} to index ${
        index + direction
      }`,
      postsListSnapShot: sortedPostsList,
    }

    commit('updateActions', movePayload)
    commit('updatePosts', sortedPostsList)
  },

  timeTravel: ({ commit, state: { actionsList } }, actionIndex) => {
    const { postsListSnapShot } = actionsList[actionIndex]

    commit('updatePosts', postsListSnapShot)
  },
}

export const getters = {
  getPosts: (state) => state.postsList,
  getActions: (state) => state.actionsList.reverse(),
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
