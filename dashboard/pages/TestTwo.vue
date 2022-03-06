<template>
  <div class="site__two">
    <ul v-for="post in posts" :key="post.id">
      <li class="py-2 px-6 shadow-2xl my-4">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'TestTwo',
  computed: {
    posts() {
      return this.$store.state.jsontwo.posts
    },
  },
  created() {
    this.fetchPost()
  },
  methods: {
    fetchPost() {
      this.$store.dispatch('fetchPost')
    },
  },
}
</script>
