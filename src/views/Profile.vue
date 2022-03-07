<template>
  <section>
    <div class="hero-body">
      <b-tabs v-model="activeTab" type="is-boxed">
        <b-tab-item label="Introduce">
          <Introduce />
        </b-tab-item>
        <b-tab-item label="About your skin">
          <Skin />
        </b-tab-item>
      </b-tabs>
    </div>
  </section>
</template>

<script>
import Introduce from '../components/Profile/Introduce.vue'
import Skin from '../components/Profile/Skin.vue'
export default {
  components: {
    Introduce,
    Skin
  },
  data() {
    return {
      activeTab: 0,
    }
  },

}
</script>

<style lang="scss" scoped>
</style>