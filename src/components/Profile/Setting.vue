<template>
  <div class="columns">
    <div class="column is-7">
      <div>Add an admin by email.</div>
      <br>
      <div class="field is-horizontal ">
        <div class="field-label is-normal">
          <label class="label">Email</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" type="email" placeholder="Email" autofocus="" v-model="adminEmail">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
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
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'firebase/functions'
export default {
  name: 'Setting',
  data() {
    return {
      adminEmailL: null
    }
  }
}
</script>

<style>

</style>