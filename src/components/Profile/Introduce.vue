<template>
  <div class="columns">
    <div class="column is-7">
      <div class="field is-horizontal ">
        <div class="field-label is-normal">
          <label class="label">Avatar</label>
        </div>
        <div class="field-body">
          <figure class="image is-128x128">
            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
        </div>
      </div>
      <div class="field is-horizontal ">
        <div class="field-label is-normal">
          <label class="label">Name</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="Name" autofocus="" v-model="name">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal ">
        <div class="field-label is-normal">
          <label class="label">Username</label>
        </div>
        <div class="field-body">
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
        </div>
      </div>
      <div class="field is-horizontal" v-show="role === 'admin'">
        <div class="field-label is-normal">
          <label class="label">Role</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="text" placeholder="Role" autofocus="" v-model="role">
              <span class="icon is-small is-left">
                <i class="fas fa-user-tag"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal ">
        <div class="field-label is-normal">
          <label class="label">Email</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control has-icons-left">
              <input disabled class="input" type="email" placeholder="Email" autofocus="" v-model="email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Gender</label>
        </div>
        <div class="field-body">
          <div class="select is-link">
            <select v-model="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-primary" @click="updateProfile()">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'introduce',
  data() {
    return {
      male: '',
      female: '',
      lgbt: ''
    }
  },
  computed: {
    name: {
      get() { return this.$store.state.profileName },
      set(payload) { this.$store.commit('changeName', payload) }
    },
    username: {
      get() { return this.$store.state.profileUsername },
      set(payload) { this.$store.commit('changeUsername', payload) }
    },
    email: {
      get() { return this.$store.state.profileEmail },
      set(payload) { this.$store.commit('changeEmail', payload) }
    },
    gender: {
      get() { return this.$store.state.profileGender },
      set(payload) { this.$store.commit('changeGender', payload) }
    },
    role: {
      get() { return this.$store.state.profileRole },
      set(payload) { this.$store.commit('changeRole', payload) }
    },
  },
  methods: {
    updateProfile() {
      this.$store.dispatch('updateUserSetting')
      this.$toasted.show('Update successfully.', {
        type: 'success'
      })
    }
  }
}
</script>

<style>

</style>