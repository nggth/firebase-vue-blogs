<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="../">
          <img src="../assets/logodesign1.png" alt="Logo">
        </a>
        <span class="navbar-burger burger" data-target="navbarMenu" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" class="navbar-menu" v-bind:class="{'is-active': isOpen}">
        <div class="navbar-start">
          <router-link class="navbar-item" :to="{name: 'Home'}">Home</router-link>
          <router-link class="navbar-item" :to="{name: 'Blogs'}">Blogs</router-link>
          <router-link class="navbar-item" to="/">Create Blogs</router-link>
        </div>
        <div class="navbar-end">
          <div v-if="user" class="navbar-item dropdown is-hoverable">
            <div class="dropdown-trigger">
              <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                <i class="fas fa-user" aria-hidden="true"></i>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div class="dropdown-menu" id="dropdown-menu2" role="menu">
              <div class="dropdown-content">
                <div class="dropdown-item">
                  <div class="level">
                    <div class="level-left">
                      <div class="level-item">
                        <figure class="image is-24x24">
                          <img class="is-rounded" src="../assets/logodesign1.png">
                        </figure>
                      </div>
                      <div class="level-item">
                        <div>
                          <p> {{ this.$store.state.profileUsername }} </p>
                          <p> {{ this.$store.state.profileName }} </p>
                          <!-- <p> {{ this.$store.state.profileEmail }} </p> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="dropdown-divider">
                <a class="dropdown-item" @click="signOut" >
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fas fa-sign-out-alt"></i>
                    </span>
                    <span>Logout</span>
                  </span>
                </a>
              </div>
          </div>
          </div>
          <div v-else class="navbar-item">
            <router-link to="/login">Login/Register</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase/app"
import "firebase/auth"
export default {
  name: 'navigation',
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    signOut() {
      firebase.auth().signOut()
      window.location.reload()
    }
  }
}
</script>

<style>
.navbar {
    font-size: 1.1rem;
    /* border-bottom: 0.5px solid  */
}
</style>