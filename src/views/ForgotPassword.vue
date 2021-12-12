<template>
  <div class="register-login-bg">
    <Back />
    <section class="hero is-fullheight">
      <Loading v-if="isLoading" />
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column register-login-box is-4 pt-5">
            <h1 class="title">
                Reset password
            </h1>
            <hr />
            <p class="is-size-5 has-text-black">Enter your mail to reset your password.</p>
            <div class="section register-login-form">
              <form>
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email" required autofocus="" v-model="email">
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <b-button class="button is-block is-info is-fullwidth" @click="confirmReset">Reset</b-button>
                </div>
              </form> 
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Loading from '../components/Loading.vue';
import Back from '../components/Back.vue';
export default {
  name: 'ForgotPassword',
  components: {
    Loading,
    Back
  },
  data() {
    return {
      email: '',
      isLoading: null,
    }
  },
  methods: {
    confirmReset() {
      if(this.email.includes('@')) {
        this.$buefy.dialog.alert({
            title: 'Error',
            message: 'Something\'s not good but I have a custom <b>icon</b> and <b>type</b>',
            type: 'is-success',
        })
      }
      else {
        alert('Please enter your correct email syntax.')
      }
    },
  }
}
</script>