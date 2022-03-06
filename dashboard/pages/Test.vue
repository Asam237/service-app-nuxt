<template>
  <div class="site">
    {{ posts }}
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  computed: {
    posts() {
      return this.$store.state.jsonone.posts
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
