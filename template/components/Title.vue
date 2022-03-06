<template>
  <div class="site__title py-3 md:py-6">
    <h1
      :class="`
        site__whereofferservice-title
        text-xl
        md:text-3xl
        lg:text-4xl
        font-bold
        ${styleText}
        `"
    >
      {{ title }}
    </h1>
    <p :class="`h-1 mt-2 md:mt-3 w-16 rounded-md ${styleLine}`" />
  </div>
</template>

<script>
export default {
  name: 'TitleComponent',
  props: ['title', 'styleText', 'styleLine'],
}
</script>
