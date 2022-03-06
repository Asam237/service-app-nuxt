export const state = () => ({
  posts: []
})

export const getters = {
  posts: (state) => state.posts
}

export const mutations = {
  SETPOST(state, value) {
    state.posts = value
  }
}
