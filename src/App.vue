<template>
  <div class='app-wrapper'>
    <div id='app'>
      <Navigation v-if="!navigation"/>
      <router-view />
      <Footer v-if="!navigation"/>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/firestore'
export default {
  name: 'app',
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      navigation: null,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser", user);
      }
    });
    this.checkRoute();
  },
  mounted() {},
  methods: {
    checkRoute() {
      if (this.$route.name === "Login" || this.$route.name === "Register" || this.$route.name === "ForgotPassword") {
        this.navigation = true;
        return;
      }
      this.navigation = false;
    },
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style lang="scss">
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
  @import "./assets/css/custom.scss";
</style>