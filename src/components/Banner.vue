<template>
    <b-carousel :indicator-inside="false">
        <b-carousel-item v-for="(item, i) in 6" :key="i">
            <b-image class="image" :src="getImgUrl(i)"></b-image>
        </b-carousel-item>
        <template #indicators="props">
            <b-image class="al image" :src="getImgUrl(props.i)" :title="props.i"></b-image>
        </template>
    </b-carousel>
</template>

<script>
export default {
    methods: {
      getImgUrl(value) {
        return require(`@/assets/banner/banner-${value}.jpg`)
      }
    }
}
</script>

<style>
.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}
</style>