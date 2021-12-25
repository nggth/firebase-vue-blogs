<template>
  <div class="blogs">
    <b-field>
      <b-switch v-model="editPost" type="is-brand">
        Default
      </b-switch>
    </b-field>
    <BlogCardBuilder />
  </div>
</template>

<script>
import BlogCardBuilder from '../components/MainLayout/BlogCardBuilder.vue'

export default {
  name: 'Blogs',
  components: {
    BlogCardBuilder
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    editPost: {
      get() {
        return this.$store.state.editPost
      },
      set(payload) {
        this.$store.commit("toggleEditPost", payload)
      }
    },
  },
  beforeDestroy() {
    this.$store.commit("tonggleEditPost", false)
  }
}
</script>

<style>

</style>