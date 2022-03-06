<template>
  <div class="site">
    <div class="site__title" v-for="(item, myIndex) in posts" :key="myIndex">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.vendredi.posts
    },
  },
  created() {
    this.fetchPosts()
  },
  methods: {
    fetchPosts() {
      this.$store.dispatch('fetchPosts')
    },
  },
}
</script>
