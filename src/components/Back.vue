<template>
  <div class="navbar-brand">
    <div class="navbar-item">
      <!-- <button class="button" @click="$router.go(-1)"> -->
      <router-link class="button" to="/">
        <span class="icon is-small">
          <i class="fas fa-arrow-left"></i>
        </span>
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: 'back'
}
</script>

<style>

</style>