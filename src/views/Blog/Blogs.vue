<template>
    <div class="container">
      <div class="section">
        <p class="title is-">Profile of website</p>
        <b-field v-if="role === 'admin'">
          <b-switch v-model="editPost" type="is-info">
            Default
          </b-switch>
        </b-field>
        <hr>
        <div class="row columns is-multiline">
          <BlogCard class="is-3 m-2" :post="post" v-for="(post, index) in blogPosts" :key="index" />
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