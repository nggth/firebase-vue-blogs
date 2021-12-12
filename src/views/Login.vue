<template>
  <div class="register-login-bg">
    <section class="hero is-fullheight">
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
                    <input class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password">
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
                <div class="field">
                  <button class="button is-block is-info is-fullwidth">Login</button>
                </div>
                <div class="field">
                  <div class="box box-question">
                    <p class="shake-text">
                      <router-link  :to="{ name: 'Register' }">Don't have an account?</router-link>
                    </p>
                  </div>
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
  data() {
    return {
      email: null,
      password: null
    }
  }
}
</script>