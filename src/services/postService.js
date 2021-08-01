import axios from 'axios'

export default {
  fetchPosts: (count) => {
    return axios.get(
      `${process.env.VUE_APP_API_URL}/posts?_start=0&_limit=${count}`
    )
  },
}
