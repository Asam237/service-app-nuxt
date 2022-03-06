<template>
  <div class="site__recenteannonce py-6 md:py-12 px-4 md:px-0 bg-gray-100">
    <div class="container mx-auto md:px-18 lg:px-32">
      <Title
        title="Annonces récentes"
        styleText="md:text-center text-gray-900"
        styleLine="hidden md:flex md:mx-auto bg-gray-900"
      />

      <div
        class="
          site__recenteannonce-content
          grid
          gap-4
          sm:grid-cols-2
          md:grid-cols-3
          pt-6
          md:pt-12
        "
      >
        <ul v-for="(item, index) in recentes" :key="index">
          <li class="text-left">
            <nuxt-img
              :src="item.img"
              class="w-full h-44 md:h-56 bg-cover mx-auto"
            />
            <h4 class="text-base pt-2 text-gray-900 font-bold">
              {{ item.title }}
            </h4>
            <h4 class="text-sm font-bold text-red-600">
              {{ item.price }}
            </h4>
            <p style="height: 1px" class="my-2 bg-gray-300 w-full rounded-md" />
            <p class="text-sm text-gray-500 font-normal">
              {{ item.location }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { RECENTE } from '../constants/index/recente'
export default {
  name: 'RecenteAnnonce',
  data() {
    return {
      recentes: RECENTE,
    }
  },
}
</script>
