<template>
  <div class="site__account py-6 md:py-12 px-4 md:px-0">
    <div class="container mx-auto md:px-18 lg:px-44">
      <div class="site__account-blog flex flex-col md:flex-row">
        <div
          class="
            site__account-blogOne
            w-full
            md:w-1/2
            border border-gray-300
            bg-gray-100
            rounded-md
          "
        >
          <div class="flex flex-col p-2">
            <header class="site__account-header">
              <h4 class="text-base text-gray-900 font-bold">
                Créez votre compte, c'est 100% gratuit
              </h4>
              <p
                style="height: 1px"
                class="my-2 bg-gray-300 w-full rounded-md"
              />
            </header>
            <main class="site__account-main md:px-5">
              <ul v-for="(item, index) in inputs" :key="index">
                <li class="my-2 md:my-4">
                  <Input
                    myStyles="bg-white h-10 border"
                    :leadingData="item.name"
                  />
                </li>
              </ul>
              <div class="site__main-btn w-full mx-auto mt-5 md:mt-10">
                <Button
                  title="S'inscrire"
                  myStyles="bg-red-600 rounded-md h-10"
                />
              </div>
            </main>
          </div>
        </div>
        <div class="site__account-blogTwo w-full md:w-1/2 md:pl-10">
          <div class="flex flex-col">
            <ul v-for="(item, index) in notices" :key="index">
              <li class="text-left py-2">
                <nuxt-img :src="item.img" class="rounded-full w-12 h-12" />
                <h4 class="text-base pt-2 md:pt-4 text-gray-900 font-bold">
                  {{ item.title }}
                </h4>
                <p
                  class="
                    text-xs
                    md:text-sm
                    leading-4
                    line-clamp-2
                    md:line-clamp-3
                    w-full
                    pt-2
                    md:pt-3
                    text-gray-500
                  "
                >
                  {{ item.subTitle }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountPage',
  layout: 'layout',
  computed: {
    notices() {
      return this.$store.state.signup.SIGNUP
    },
    inputs() {
      return this.$store.state.signup.INPUTS
    },
  },
}
</script>
