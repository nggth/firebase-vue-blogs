<template>
    <section class="hero is-fullheight register-login-bg">
    <Back />
    <Loading v-if="loading" />
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column register-login-box is-4 pt-5">
          <h1 class="title">
              Register
          </h1>
          <hr />
          <p class="is-size-5 has-text-black">Please register to proceed.</p>
          <div class="section register-login-form">
            <form>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="text" placeholder="Name" autofocus="" v-model="name">
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input class="input" type="email" placeholder="Email" autofocus="" v-model="email">
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input class="input" type="text" placeholder="User name" maxlength="8" autofocus="" v-model="username">
                  <tippy content="The max character of user name is 8." arrow="true" arrowType= 'round'>
                    <span class="icon is-small is-left">
                      <i class="fas fa-user-circle"></i>
                    </span>
                  </tippy>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left has-icons-right">
                  <input class="input" type="password" placeholder="Your Password" v-model="password">
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <button class="button is-block is-info is-fullwidth" @click.prevent="register">Create an account</button>
              </div>
              <div class="field">
                <div class="box box-question">
                  <p class="shake-text">
                    <router-link :to="{ name: 'Login' }">Already have an account?</router-link>
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
import db from '../firebase/firebaseConfig'
import Back from '../components/Back.vue';
import Loading from '../components/Loading.vue';
export default {
  components: { 
    Back,
    Loading
  },
  data() {
    return {
      name: '',
      email: '',
      username: '',
      password: '',
      error: null,
      errorMsg: '',
      loading: null
    }
  },
  methods: {
    async register() {
      if(this.name !== '' && this.email !== '' && this.username !== '' && this.password !== '') {
        this.error = false
        this.errorMsg = ''
        const firebaseAuth = await firebase.auth()
        try {
          const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password)
          const result = await createUser
          const database = db.collection('users').doc(result.user.uid)
          await database.set({
            name:  this.name,
            email: this.email,
            username: this.username,
          })
          this.$router.push({ name: 'Home' })
          return
        } catch (error) {
          this.$toasted.show(error, {
            type: 'error'
          })
          return
        }
      }
      this.$toasted.show('Please fill all the required fields.', {
        type: 'error'
      })
      return
    }
  }
}
</script>
