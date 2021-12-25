<template>
  <section>
    <div class="hero-body">
      <b-tabs v-model="activeTab" type="is-boxed">
        <b-tab-item label="Introduce">
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
                      <input class="input" type="text" placeholder="Name">
                      <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
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
              <div class="field is-horizontal ">
                <div class="field-label is-normal">
                  <label class="label">Email</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <p class="control has-icons-left">
                      <input disabled class="input" type="email" placeholder="Email" value="alex@smith.com">
                      <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Number phone</label>
                </div>
                <div class="field-body">
                  <div class="field is-expanded">
                    <div class="field has-addons">
                      <p class="control">
                        <a class="button is-static">
                          +84
                        </a>
                      </p>
                      <p class="control is-expanded">
                        <input class="input" type="tel" placeholder="Your phone number">
                      </p>
                    </div>
                    <p class="help">Do not enter the first zero</p>
                  </div>
                </div>
              </div>

              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Department</label>
                </div>
                <div class="field-body">
                  <div class="field is-narrow">
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select>
                          <option>Business development</option>
                          <option>Marketing</option>
                          <option>Sales</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="field is-horizontal">
                <div class="field-label is-normal">
                  <label class="label">Decription</label>
                </div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <textarea class="textarea" placeholder="Describe a little about yourself."></textarea>
                    </div>
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
                      <button class="button is-primary">
                        Send message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-tab-item>
        <b-tab-item label="About your skin">
          Lorem <br>
          ipsum <br>
          dolor <br>
          sit <br>
          amet.
        </b-tab-item>
      </b-tabs>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
// .profile-info {
//   max-width: 700px;
//   width: 100%;
// }
</style>