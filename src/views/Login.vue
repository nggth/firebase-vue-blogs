<template>
  <section class="hero is-fullheight register-login-bg">
    <Back />
    <Loading v-if="loading" />
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column register-login-box is-4 pt-5">
          <h1 class="title">
              Login
          </h1>
          <hr />
          <p class="is-size-5 has-text-black">Please login to proceed.</p>
          <div class="section register-login-form">
            <form>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="email" placeholder="Email" v-model="email">
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input class="input" type="password" placeholder="Password" v-model="password">
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <div class="level">
                  <label class="checkbox is-left">
                    <input type="checkbox">
                    Remember me
                  </label>
                  <router-link class="is-right" :to="{ name: 'ForgotPassword' }">Forgot your password?</router-link>
                </div>
              </div>
              <div v-show="error">{{ this.errorMsg }}</div>
              <div class="field">
                <button class="button is-block is-info is-fullwidth" @click.prevent="signIn()">Login</button>
              </div>
              <div class="field">
                <div class="box box-question">
                  <p class="shake-text">
                    <router-link :to="{ name: 'Register' }">Don't have an account?</router-link>
                  </p>
                </div>
              </div>
            </form> 
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import Back from '../components/Back.vue';
import Loading from '../components/Loading.vue';
export default {
  name: 'Login',
  components: {
    Back,
    Loading
  },
  data() {
    const user = firebase.auth().currentUser
    return {
      user,
      email: '',
      password: '',
      loading: null,
      // error: null,
      // errorMsg: ''
    }
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ name: 'Home' });
          // this.error = false;
          // this.errorMsg = "";
          // console.log(firebase.auth().currentUser.uid);
          this.$toasted.show('Login successfully.', {
            type: 'success'
          })
        })
        .catch(() => {
          this.$toasted.show('Login failed.', {
            type: 'error'
          })
        });
    },
  },
}
</script>
