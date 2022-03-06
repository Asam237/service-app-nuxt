<template>
  <button
    :class="`text-center font-bold py-3 px-10 w-full ${myStyles} text-sm md:text-base text-white flex items-center justify-center`"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'BtnComponent',
  props: ['title', 'myStyles'],
}
</script>
