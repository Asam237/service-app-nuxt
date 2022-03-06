<template>
  <footer class="site__footer pt-3 md:pt-6 pb-2 md:pb-3 bg-gray-800">
    <div class="container mx-auto px-4 md:px-18 lg:px-32">
      <div
        class="
          site__footer-items
          grid
          gap-4
          sm:grid-cols-2
          md:grid-cols-3
          pt-6
          md:pt-12
        "
      >
        <ul v-for="(item, index) in links" :key="index">
          <li>
            <h1 class="text-white text-base font-medium pb-4">
              {{ item.title }}
            </h1>
            <div>
              <div
                class="site__item-links"
                v-for="(item, index) in item.link"
                :key="index"
              >
                <a class="text-xs text-white font-normal" :href="item.link">{{
                  item.name
                }}</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <p style="height: 1px" class="my-5 bg-gray-700 w-full rounded-md" />

      <div
        class="flex flex-col text-center pb-2"
        v-for="(item, index) in texts"
        :key="index"
      >
        <p class="text-xs md:text-sm leading-5 text-white">{{ item }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  computed: {
    texts() {
      return this.$store.state.footer.FOOTER
    },
    links() {
      return this.$store.state.footer.FOOTER_LINK
    },
  },
}
</script>
