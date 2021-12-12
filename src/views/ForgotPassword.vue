<template>
  <div class="register-login-bg">
    <section class="hero is-fullheight">
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
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <button class="button is-block is-info is-fullwidth" @click="confirmReset">Reset</button>
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
export default {
  name: 'ForgotPassword',
  components: {
  },
  data() {
    return {
      email: '',
    }
  },
  methods: {
    confirmReset() {
      if(this.email !== '' && this.email.includes('@')) {
        this.$buefy.dialog.alert({
            title: 'Error',
            message: 'Something\'s not good but I have a custom <b>icon</b> and <b>type</b>',
            type: 'is-success',
        })
      }
      else {
        alert('Please enter your correct email syntax.')
      }
    }
  }
}
</script>