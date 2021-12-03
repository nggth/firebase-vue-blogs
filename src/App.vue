<template>
  <div class='app-wrapper'>
    <div class='app'>
      <Navigation />
      <Banner />
      <About />
      <Footer />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Banner from './components/Banner.vue'
import About from './components/MainLayout/About.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    Navigation,
    Banner,
    About,
    Footer
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>