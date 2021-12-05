<template>
  <div class="container">
    <div class="section">
      <div class="level-right">
        <b-field>
          <b-switch v-model="editPost" type="is-brand">
              Default
          </b-switch>
        </b-field>
      </div>
      <div class="section">
        <div class="row columns is-variable">
          <BlogCard class="column is-3 mx-1" :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from '../components/MainLayout/BlogCard.vue'

export default {
  name: 'Blogs',
  components: {
    BlogCard
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
    editPost: {
      get() {
        return this.$store.state.editPost;
      },
      set(payload) {
        this.$store.commit("tonggleEditPost", payload);
      }
    }
  },
  beforeDestroy() {
    this.$store.commit("tonggleEditPost", false)
  }
}
</script>

<style>

</style>