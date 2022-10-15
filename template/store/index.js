import axios from 'axios'

export const actions = {
  async postUser({ commit }, data) {
    const resp = await axios.post('', data)
    if (resp) {
      commit('singup/SIGNUP', data)
    }
  },
  async login({ commit }, data) {
    const resp = await axios.post('', data)
    if (resp) {
      commit('signin/LOGIN', resp.data)
    }
  },
}
