<template>
  <div class="site__lundi">
    {{ posts }}
  </div>
</template>

<script>
export default {
  name: 'SitePage',
  computed: {
    posts() {
      return this.$store.state.jsonthree.posts
    },
  },
  created() {
    this.fetchPosts()
  },
  methods: {
    fetchPosts() {
      return this.$store.dispatch('fetchPosts')
    },
  },
}
</script>
