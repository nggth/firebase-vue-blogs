<template>
  <div class='app-wrapper'>
    <div class='app'>
      <Navigation />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    Navigation,
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