export const state = () => ({
  INPUTS: [
    {
      name: 'username',
    },
    {
      name: 'password',
    },
  ],
  username: '',
  password: '',
  user: {},
})

export const getters = {
  username: (state) => state.username,
  password: (state) => state.password,
}

export const mutations = {
  LOGIN(state, payload) {
    state.user = [
      { username: payload.username, password: state.password },
      ...state.user,
    ]
  },
}
