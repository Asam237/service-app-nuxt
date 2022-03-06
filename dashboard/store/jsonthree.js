export const state = () => ({
  posts: [],
  page: 1,
  limit: 10,
  nHits: 0
})

export const getters = {
  posts: (state) => state.posts,
  page: (state) => state.page,
  limit: (state) => state.limit,
  nHits: (state) => state.nHits
}

export const mutations = {
  SETPOST(state, value) {
    state.posts = value
  },
  SETPAGE(state, value) {
    state.page = value
  },
  SETLIMIT(state, value) {
    state.limit = value
  },
  SETNBHITS(state, value) {
    state.nHits = value
  }
}
