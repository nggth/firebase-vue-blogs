<template>
  <form action="">
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">Login</p>
            <b-button
              label="Close"
              @click="$emit('close')" />

        </header>
        <section class="modal-card-body">
            <p>{{this.modalMessage}}</p> 
        </section>
    </div>
  </form>
</template>

<script>
export default {
  props: [ "modalMessage" ],
}
</script>

<style>

</style>