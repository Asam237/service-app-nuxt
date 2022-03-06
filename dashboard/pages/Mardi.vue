<template>
  <div class="site__mardi">
    <div class="posts" v-for="(item, index) in posts" :key="index">
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MardiPage',
  computed: {
    posts() {
      return this.$store.state.posts.posts
    },
  },
  methods: {
    getPosts() {
      return this.$store.dispatch('getPosts')
    },
  },
  created() {
    this.getPosts()
  },
}
</script>
