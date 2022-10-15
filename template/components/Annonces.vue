<template>
  <div
    class="site__annonce bg-gray-900 h-64 md:h-80 flex flex-col justify-center items-center px-4 md:px-36"
  >
    <h1
      class="site__annonce-title text-white text-2xl md:text-4xl text-center leading-5 font-bold"
    >
      {{ title }}
    </h1>
    <p
      class="site__annonce-content text-base text-white text-center py-2 font-medium"
    >
      {{ subTitle }}
    </p>
    <div class="site__annonce-input w-full pt-3 md:pt-4">
      <div class="container mx-auto px-4 md:px-0 flex flex-col md:flex-row">
        <div class="site__annonce-input md:w-9/12">
          <Input
            placeholder="Que recherchez-vous ?"
            my-styles="bg-white text-center md:text-left  md:rounded-tl-md  md:rounded-bl-md h-12"
            leading-data="no"
          />
        </div>
        <div class="site__annonce-btn md:w-3/12 mt-2 md:mt-0">
          <Button
            title="Rechercher"
            my-styles="bg-red-600 md:rounded-tr-md md:rounded-br-md h-12"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnnonceComponent',
  computed: {
    title() {
      return this.$store.state.annonces.annonces.title
    },
    subTitle() {
      return this.$store.state.annonces.annonces.subTitle
    },
  },
}
</script>
