// import axios from "axios"

// export const actions = {
//   async fetchPost({ commit }, payload) {
//     const resp = await axios.get("https://jsonplaceholder.typicode.com/posts")
//     if (resp) {
//       commit("jsonplaceholder/SETPOST", resp.data)
//     }
//   }
// }


// import axios from "axios"

// export const actions = {
//   async fetchPost({ commit }, payload) {
//     const resp = await axios.get("https://jsonplaceholder.typicode.com/posts")
//     if (resp) {
//       commit("json/SETPOST", resp.data)
//     }
//   }
// }

// import axios from "axios"

// export const actions = {
//   async fetchPost({ commit }, payload) {
//     const resp = await axios.get("https://jsonplaceholder.typicode.com/posts")
//     if (resp) {
//       commit("jsonone/SETPOST", resp.data)
//     }

//   }
// }


// import axios from "axios"

// export const actions = {
//   async fetchPost({ commit }, payload) {
//     const resp = await axios.get("https://jsonplaceholder.typicode.com/posts")
//     if (resp) {
//       commit("jsontwo/SETPOST", resp.data)
//     }
//   }
// }


// import axios from "axios"

// export const actions = {
//   async fetchPosts({ commit }, payload) {
//     const params = {
//       page: payload.page,
//       limit: payload.limit
//     }
//     const resp = await axios.get("https://jsonplaceholder.typicode.com/posts",
//       { ...params })
//     if (resp) {
//       commit("jsonthree/SETPOST", resp.data)
//     }
//   }
// }

import axios from "axios"

export const actions = {
  async getPosts({ commit }, payload) {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts")
    if (resp) {
      commit("posts/SETPOST", resp.data)
    }
  }
}
