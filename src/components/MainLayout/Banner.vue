<template>
  <section class="hero is-fullheight is-default is-bold">
    <!-- <section class="articles">
      <div class="column is-8 is-offset-2">
        <b-carousel :indicator-inside="false">
          <b-carousel-item v-for="(item, i) in 6" :key="i">
            <b-image class="image" :src="getImgUrl(i)"></b-image>
          </b-carousel-item>
          <template #indicators="props">
            <b-image class="al images" :src="getImgUrl(props.i)" :title="props.i"></b-image>
          </template>
        </b-carousel>
      </div>
    </section> -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-vcentered">
          <div class="column is-5">
            <b-carousel>
              <b-carousel-item v-for="(item, i) in 6" :key="i">
                  <b-image class="image" :src="getImgUrl(i)"></b-image>
              </b-carousel-item>
            </b-carousel>
          </div>
          <div class="column is-6 is-offset-1">
            <h1 class="title is-2">
                Welcome to Cecilia
            </h1>
            <h2 class="subtitle is-4">
              I'm Claire. I'm waiting for you.
            </h2>
            <h3>Let Cecilia sympathize with you skin.</h3>
            <br>
            <p class="has-text-centered">
              <a class="button is-medium is-info is-outlined">
                  Learn more
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    methods: {
      getImgUrl(value) {
        return require(`@/assets/img/home/banner-${value}.jpg`)
      }
    }
}
</script>

<style lang="scss" scoped>

</style>