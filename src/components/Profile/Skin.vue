<template>
  <div class="columns">
    <div class="column is-7">
      <!-- <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Type of skin</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <div class="control">
              <div class="select is-fullwidth">
                <select >
                  <option>Normal skin</option>
                  <option>Dry skin</option>
                  <option>Oily skin</option>
                  <option>Combination skin</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Type</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea class="textarea" rows="2" placeholder="Type of your skin." v-model="skinType"></textarea>
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
              <textarea class="textarea" rows="10" placeholder="Describe a little about yourself." v-model="description"></textarea>
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
  name: 'skin',
  computed: {
    skinType: {
      get() { return this.$store.state.profileSkinType },
      set(payload) { this.$store.commit('changeSkinType', payload) }
    },
    description: {
      get() { return this.$store.state.profileDescription },
      set(payload) { this.$store.commit('changeDescription', payload) }
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