<template>
  <section class="hero is-info is-fullheight error-page">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-6 is-offset-3">
          <div class="box">
            <div class="title is-size-2">
              Page not found
              <i class="fas fa-frown"></i>
            </div>
            <p class="title is-size-6">Sorry, we couldn’t find the page you were looking for.</p>
            <div>
              <router-link class="button is-medium is-info" :to="{ name: 'Home' }" >
                Back to home
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.error-page {
  // background-image: url('../assets/img/error/error2.jpg');
  // background-position: center center;
  // background-repeat:  no-repeat;
  // background-attachment: fixed;
  // background-size:  cover;
  background-color: #f3eaf5;
  .box {
    background: rgba(19, 18, 18, 0.3);
    // box-shadow: 5px 5px 8px #ecd4ff, -2px -2px 8px #ecd4ff;
  }
}
</style>