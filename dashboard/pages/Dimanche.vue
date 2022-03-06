<template>
  <div class="site__dimanche">
    <div>
      <p>Kilometre</p>
      <input v-model="kilometers" type="text" />
    </div>
    <div>
      <p>Meters</p>
      <input v-model="meters" type="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DimanchePage',
  data() {
    return {
      kilometers: 0,
      meters: 0,
    }
  },
  watch: {
    kilometers(val) {
      this.kilometers = val
      this.meters = val
    },
    meters(val) {
      this.kilometers = val / 1000
      this.meters = val
    },
  },
}
</script>
