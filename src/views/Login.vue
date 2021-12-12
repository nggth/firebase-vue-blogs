<template>
  <div class="login-bg">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column login-box is-4 pt-5">
            <h1 class="title">
                Login
            </h1>
            <hr class="login-hr">
            <p class="is-size-5 has-text-black">Please login to proceed.</p>
            <div class="section form-login">
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
                    <p class="text-have-account">
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

<style lang="scss" scoped>
.login-bg {
  background-image: url('../assets/login3.jpg');
  background-position: center center;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-size:  cover;
  background-color: #999;
  .login-box {
    box-shadow: 8px 8px 15px #cfcfcf, -8px -8px 15px #cfcfcf;
  }
  .form-login {
    background-color: transparent;
  }
  .box-question {
    .text-have-account:hover {
      animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    }
    @keyframes shake {
      10%, 90% { transform: translate3d(-1px, 0, 0); }
      20%, 80% { transform: translate3d(2px, 0, 0); }
      30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
      40%, 60% { transform: translate3d(4px, 0, 0); }
    }
  }
}
</style>