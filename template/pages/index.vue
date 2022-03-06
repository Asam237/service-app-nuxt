<template>
  <main class="site__main" style="font-family: 'Inter', sans-serif">
    <Annonces />
    <WhyOfferService />
    <recente-annonce />
    <community />
  </main>
</template>

<script>
import Community from '../components/Community.vue'
import RecenteAnnonce from '../components/RecenteAnnonce.vue'
export default {
  components: { RecenteAnnonce, Community },
  name: 'IndexPage',
  layout: 'layout',
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
</style>
