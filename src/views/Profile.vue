<template>
  <section>
    <div class="hero-body">
      <b-tabs v-model="activeTab" type="is-boxed">
        <b-tab-item label="Introduce">
          <Introduce />
        </b-tab-item>
        <b-tab-item label="About your skin">
          Lorem <br>
          ipsum <br>
          dolor <br>
          sit <br>
          amet.
        </b-tab-item>
        <b-tab-item label="Setting">
          <Setting />
        </b-tab-item>
      </b-tabs>
    </div>
  </section>
</template>

<script>
import Introduce from '../components/Profile/Introduce.vue'
import Setting from '../components/Profile/Setting.vue'
export default {
  components: {
    Introduce,
    Setting
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