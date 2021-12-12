<template>
  <div class="register-bg">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column register-box is-4 pt-5">
            <h1 class="title">
                Reset password
            </h1>
            <hr class="register-hr">
            <p class="is-size-5 has-text-black">Enter your mail to reset your password.</p>
            <div class="section register-form">
              <form>
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email" autofocus="" v-model="email">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <button class="button is-block is-info is-fullwidth">Reset</button>
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
  
}
</script>

<style lang="scss" scoped>
.register-bg {
  background-image: url('../assets/login3.jpg');
  background-position: center center;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-size:  cover;
  background-color: #999;
  .register-box {
    box-shadow: 8px 8px 15px #cfcfcf, -8px -8px 15px #cfcfcf;
  }
  .register-form {
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