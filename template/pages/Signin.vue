<template>
  <div class="site__signin py-6 md:py-12 px-4 md:px-0">
    <div class="container mx-auto md:px-18 lg:px-44">
      <div class="site__signin-blog flex flex-col md:flex-row">
        <div
          class="
            site__signin-blogOne
            w-full
            md:w-1/2
            border border-gray-300
            bg-gray-100
            rounded-md
          "
        >
          <div class="flex flex-col p-2">
            <header class="site__sign-header">
              <h4 class="text-base text-gray-900 font-bold">
                Créez votre compte, c'est 100% gratuit
              </h4>
              <p
                style="height: 1px"
                class="my-2 bg-gray-300 w-full rounded-md"
              />
            </header>
            <main class="site__signin-main md:px-5">
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
                  title="Se connecter"
                  myStyles="bg-red-600 rounded-md h-10"
                />
              </div>
            </main>
          </div>
        </div>
        <div
          class="site__signin-blogTwo w-full md:w-1/2 md:ml-10 bg-red-500"
        ></div>
      </div>
    </div>
  </div>
</template>


<script>
import { INPUTS } from '../constants/sign/signin'
export default {
  name: 'SigninPage',
  layout: 'layout',
  data() {
    return {
      inputs: INPUTS,
    }
  },
}
</script>
