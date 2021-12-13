<template>
  <div class="navbar-brand">
    <div class="navbar-item">
      <button class="button" @click="$router.go(-1)">
        <span class="icon is-small">
          <i class="fas fa-arrow-left"></i>
        </span>
      </button>
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