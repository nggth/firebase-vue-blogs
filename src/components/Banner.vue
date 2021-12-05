<template>
  <div class="container">
    <section class="articles">
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
    </section>
</div>
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