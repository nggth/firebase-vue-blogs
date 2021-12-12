<template>
  <div class="register-login-bg">
    <section class="hero is-fullheight">
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
                    <input class="input" type="text" placeholder="User name" autofocus="" v-model="userName">
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <input class="input" type="email" placeholder="Email" autofocus="" v-model="email">
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <input class="input" type="password" placeholder="Your Password" v-model="password">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <button class="button is-block is-info is-fullwidth">Create an account</button>
                </div>
                <div class="field">
                  <div class="box box-question">
                    <p class="shake-text">
                      <router-link  :to="{ name: 'Login' }">Already have an account?</router-link>
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
      password: null,
      name: null,
      userName: null,
    }
  }
}
</script>