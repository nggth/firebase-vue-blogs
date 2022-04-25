<template>
  <div class="container">
    <div class="section">
      <div class="columns">
        <div class="column has-text-centered">
          <h1 class="title">Bulma Card Layout Template</h1><br>
        </div>
      </div>
      <b-field>
        <b-switch v-model="editPost" type="is-brand">
          Default
        </b-switch>
      </b-field>
      <div class="columns">
        <BlogCard class="column is-one-third has-text-left" :post="post" v-for="(post, index) in blogPosts" :key="index" />
      </div>
    </div>
  </div>

</template>

<script>
import BlogCard from '../../components/Blog/BlogCard.vue'

export default {
  name: 'Blogs',
  components: {
    BlogCard
  },
  computed: {
    editPost: {
      get() {
        return this.$store.state.editPost
      },
      set(payload) {
        this.$store.commit("toggleEditPost", payload)
      }
    },
    blogPosts() {
      return this.$store.state.blogPosts;
    },
    // blogPostsCards() {
    //   return this.$store.getters.blogPostsCards;
    // },
  },
  // beforeDestroy() {
  //   this.$store.commit("tonggleEditPost", false)
  // }
}
</script>

<style>

</style>