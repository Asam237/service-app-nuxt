<template>
  <header class="site__header sticky top-0 z-50 bg-white">
    <div class="site__header-description py-3 px-4 md:px-0">
      <div class="container mx-auto md:px-18 lg:px-44">
        <div
          class="site__header-description__logo flex items-center justify-between"
        >
          <h4
            class="text-xl h-10 sm:h-12 w-auto md:text-3xl font-bold"
            style="font-family: 'Pacifico', cursive"
          >
            <span class="text-red-600">Blabla</span>Apps<span
              class="text-red-600"
              >.xyz</span
            >
          </h4>
          <div class="site__header-description__icons hidden md:flex">
            <ul
              class="flex space-x-8 md:ml-10 md:flex md:items-center md:justify-center"
            >
              <li v-for="(item, index) in headerIcons" :key="index">
                <img :src="item.icon" class="h-5 w-5 mx-auto" alt="" />
                <a
                  :href="item.link"
                  style="font-family: 'Inter', sans-serif"
                  class="text-xs text-gray-900 font-medium"
                  @click="showModal"
                  >{{ item.name }}</a
                >
              </li>
            </ul>
          </div>
          <div
            class="site__header-description-sign flex flex-col md:hidden items-center justify-center"
          >
            <img :src="imgHome.icon" class="w-7 h-7" alt="" />
            <p
              class="text-xs md:text-base font-medium cursor-pointer text-gray-900"
            >
              Compte
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="site__header-links h-11 bg-red-600 py-1 px-4 md:px-0 flex">
      <div class="container mx-auto md:px-18 lg:px-44">
        <ul class="flex justify-between items-center">
          <li>
            <nuxt-link to="/">
              <img :src="imgHome.icon" class="w-7 h-7" alt="" />
            </nuxt-link>
          </li>
          <li
            v-for="item in headerLinks"
            :key="item.link"
            class="text-sm md:text-base font-medium cursor-pointer hidden sm:flex text-white"
            @click="setID = item.link"
          >
            <a class="font-normal" :href="item.link">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <!-- Mobile menu button -->
      <div
        class="sm:hidden flex items-center"
        style="font-family: 'Open Sans', sans-serif"
      >
        <button class="outline-none mobile-menu-button">
          <svg
            class="w-6 h-6 text-white hover:text-red-600"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="hidden mobile-menu">
      <ul
        v-for="(item, index) in headerLinks"
        :key="index"
        x-show="!showMenu"
        @click="setID = item.link"
      >
        <li>
          <a
            :href="item.link"
            :class="`
                block
                text-sm
                px-2
                py-4
                hover:bg-red-600
                transition
                duration-300
                ${setID === item.link ? 'bg-red-600' : ''}
                `"
            >{{ item.name }}</a
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      setID: 'Immobilier',
    }
  },
  computed: {
    headerIcons() {
      return this.$store.state.header.headerIcons
    },
    headerLinks() {
      return this.$store.state.header.headerLinks
    },
    imgHome() {
      return this.$store.state.header.imgHome
    },
  },
  mounted() {
    const btn = document.querySelector('button.mobile-menu-button')
    const menu = document.querySelector('.mobile-menu')

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden')
    })
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
</style>
