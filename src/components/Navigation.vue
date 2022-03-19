<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="../">
          <img src="../assets/group.png" alt="Logo">
        </a>
        <span style="height: 3.5rem" class="navbar-burger burger" data-target="navbarMenu" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" class="navbar-menu" v-bind:class="{'is-active': isOpen}">
        <div class="navbar-start">
          <router-link class="navbar-item" :to="{name: 'Home'}">Home</router-link>
          <router-link class="navbar-item" :to="{name: 'Blogs'}">Blogs</router-link>
          <router-link class="navbar-item" :to="{name: 'CreateBlogs'}">Create Blogs</router-link>
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
              <div class="dropdown-content is-right">
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
                          <p class="is-size-5"> {{ this.$store.state.profileName }} </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <router-link class="dropdown-item" :to="{ name: 'Profile'}">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fas fa-user"></i>
                    </span>
                    <span>Profile</span>
                  </span>
                </router-link>
                <router-link class="dropdown-item" :to="{ name: 'Admin'}">
                  <span class="icon-text">
                    <span class="icon">
                      <i class="fas fa-user-shield"></i>
                    </span>
                    <span>Admin</span>
                  </span>
                </router-link>
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
      .then(() => {
        this.$toasted.show('Logout successfully.', {
          type: 'success'
        })
        this.user === null
        this.$router.push({ name: 'Home' })
        window.location.reload()
      })
    }
  }
}
</script>

<style>
.navbar {
    font-size: 1.2rem;
    height: 3.5rem
}
</style>