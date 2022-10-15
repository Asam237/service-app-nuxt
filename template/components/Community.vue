<template>
  <div class="px-4 py-6 bg-red-600 site__community md:py-12 md:px-0">
    <div class="container mx-auto md:px-18 lg:px-32">
      <Title
        title="9 312 154 particuliers acheteurs et vendeurs : rejoignez la communauté !"
        style-text="md:text-center text-white"
        style-line="hidden md:flex md:mx-auto bg-white"
      />
      <div class="relative px-8 text-center">
        <blockquote class="mt-8">
          <div class="relative text-lg font-medium text-white md:flex-grow">
            <svg
              class="absolute top-0 left-0 w-8 h-8 text-red-400 -translate-x-3 -translate-y-2 transform"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path
                d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
              ></path>
            </svg>
            <p class="relative">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              dicta. Sed perferendis expedita molestias iure obcaecati illum?
              Molli
            </p>
          </div>
          <footer class="mt-4">
            <p class="text-base font-semibold text-red-200">
              Ibnul Abubakar, vendeur à BlablaApps
            </p>
          </footer>
        </blockquote>
        <div
          class="w-full mx-auto mt-5 site__whyofferservice-btn md:w-1/3 md:mt-10"
        >
          <Button
            title="Rejoindre la communauté"
            my-styles="rounded-md border-2 border-white"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityComponent',
}
</script>
