<template>
  <div class="register-login-bg">
    <Back />
    <section class="hero is-fullheight">
      <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
      <Loading v-if="loading" />
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column register-login-box is-4 pt-5">
            <h1 class="title">
                Reset password
            </h1>
            <hr />
            <p class="is-size-5 has-text-black">Enter your mail to reset your password.</p>
            <div class="section register-login-form">
              <form v-on:submit.prevent="confirmReset()">
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <input v-on:keyup.enter="confirmReset()" class="input" type="email" placeholder="Email" required autofocus="" v-model="email">
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <div class="columns">
                    <div class="column is-10">
                      <b-button class="button is-block is-info is-fullwidth" @click.prevent="resetPassword()">Reset</b-button>
                    </div>
                    <div class="column is-2 mt-1">
                       <b-tooltip label="Back to login page" position="is-right" type="is-white">
                          <b-button tag="router-link" to='/login' icon-pack="fas" size="is-small" icon-left="sign-in-alt" />
                      </b-tooltip>
                    </div>
                    
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
import firebase from 'firebase/app';
import 'firebase/auth';
import Modal from '../components/Modal.vue';
import Loading from '../components/Loading.vue';
import Back from '../components/Back.vue';
export default {
  name: 'ForgotPassword',
  components: {
    Modal,
    Loading,
    Back
  },
  data() {
    return {
      email: '',
      modalActive: false,
      modalMessage: '',
      loading: null,

    }
  },
  methods: {
    resetPassword() {
      this.loading = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage = "If your account exists, you will receive a email";
          this.loading = false;
          this.modalActive = true;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.loading = false;
          this.modalActive = true;
        });
    },
    confirmReset() {
      // if(this.email.includes('@')) {
      //   this.$buefy.dialog.alert({
      //       title: 'Error',
      //       message: 'Something\'s not good but I have a custom <b>icon</b> and <b>type</b>',
      //       type: 'is-success',
      //   })
      // }
      // else {
      //   alert('Please enter your correct email syntax.')
      // }
    },
    closeModal() {
      this.modalActive = !this.modalActive
      this.email = ''
    }
  }
}
</script>