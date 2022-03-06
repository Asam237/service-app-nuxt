<template>
  <div class="site">
    <ul v-for="post in posts" :key="post.userId">
      {{
        post.body
      }}
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TextOne',
  computed: {
    posts() {
      return this.$store.state.json.posts
    },
  },
  created() {
    this.fetchPost()
  },
  methods: {
    fetchPost() {
      return this.$store.dispatch('fetchPost')
    },
  },
}
</script>
