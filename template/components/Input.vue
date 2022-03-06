<template>
  <div class="site__input flex justify-center items-center">
    <p
      :class="`text-xs  text-gray-900 mr-1 md:mr-3 w-32 md:w-36 ${
        leadingData === 'no' ? 'hidden' : 'flex'
      }`"
    >
      {{ leadingData }}
    </p>
    <input
      type="text"
      :placeholder="title"
      :class="`py-3 px-4 w-full text ${myStyles}`"
    />
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: ['title', 'myStyles', 'leadingData'],
}
</script>
