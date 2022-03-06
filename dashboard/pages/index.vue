<template>
  <div>
    <p>
      {{ $store.state.jsonplaceholder.posts }}
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  layout: 'layout',
  computed: {
    ...mapGetters(['posts']),
  },
  methods: {
    ...mapActions(['fetchPost']),
  },
  created() {
    this.fetchPost()
  },
}
</script>
