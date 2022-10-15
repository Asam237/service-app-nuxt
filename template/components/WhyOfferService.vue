<template>
  <div class="site__whereofferservice py-6 md:py-12 px-4 md:px-0">
    <div class="container mx-auto md:px-18 lg:px-32">
      <Title
        :title="title"
        style-text="md:text-center text-gray-900"
        style-line="hidden md:flex md:mx-auto bg-gray-900"
      />
      <div
        class="site__whereofferservice-content grid gap-4 sm:grid-cols-2 md:grid-cols-3 pt-6 md:pt-12"
      >
        <ul v-for="(item, index) in content" :key="index">
          <li class="text-left">
            <div
              class="site__img w-12 h-12 rounded-full bg-red-600 flex border-2 items-center justify-center"
            >
              <nuxt-img :src="item.img" class="rounded-full w-8 h-8" />
            </div>
            <h4 class="text-base pt-2 md:pt-4 text-gray-900 font-bold">
              {{ item.title }}
            </h4>
            <p
              class="text-xs md:text-sm leading-4 line-clamp-2 md:line-clamp-3 w-full pt-2 md:pt-3 text-gray-500"
            >
              {{ item.description }}
            </p>
          </li>
        </ul>
      </div>
      <div
        class="site__whyofferservice-btn w-full md:w-1/3 mx-auto mt-5 md:mt-10"
      >
        <Button :title="btn" my-styles="bg-red-600 rounded-md" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhyOfferServiceComponent',
  computed: {
    title() {
      return this.$store.state.why_offer.WHY_OFFER[0].title
    },
    content() {
      return this.$store.state.why_offer.WHY_OFFER[1]
    },
    btn() {
      return this.$store.state.why_offer.WHY_OFFER[2].btn
    },
  },
}
</script>
