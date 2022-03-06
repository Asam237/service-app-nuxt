<template>
  <header class="site__header">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row">
        <div class="site__header-blogOne">
          <ul v-for="(item, index) in headerOne" :key="index">
            <li>
              <a :href="item.link">{{ item.name }}</a>
            </li>
          </ul>
        </div>
        <div class="site__header-blogTwo"></div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      headerOne: [
        {
          name: 'BlablaAppsDashboard',
          link: '/',
        },
        {
          name: 'Customer',
          link: '#customer',
        },
        {
          name: 'Admin',
          link: '#admin',
        },
      ],
    }
  },
}
</script>
