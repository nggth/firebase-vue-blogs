<template>
<section class="columns">
    <div class="column is-9">
      <div class="blogs">
        <b-field>
          <b-switch v-model="editPost" type="is-brand">
            Default
          </b-switch>
        </b-field>
        <!-- <router-link :to="{ name: 'Blogs' }">
          View more blog
          <i class="fas fa-arrow-right"></i>
        </router-link> -->
        <div class="row columns is-variable">
          <BlogCard class="column is-2 mx-1" :post="post" v-for="(post, index) in blogPostsCards" :key="index" />
        </div>
      </div>
    </div>
</section>
  
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
      return this.$store.getters.blogPosts;
    },
    blogPostsCards() {
      return this.$store.getters.blogPostsCards;
    },
  },
  beforeDestroy() {
    this.$store.commit("tonggleEditPost", false)
  }
}
</script>

<style>

</style>