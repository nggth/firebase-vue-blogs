<template>
  <div class="hero-body">
    <div class="section">
      <div v-if="$route.path == '/'" class="title is-4">
        <router-link :to="{ name: 'Blogs' }">
          View more blog
          <i class="fas fa-arrow-right"></i>
          </router-link>
      </div>
      <div class="row columns is-variable">
        <BlogCard class="column is-3 mx-1" :post="post" v-for="(post, index) in blogPostsCards" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from '../../components/Blog/BlogCard.vue'
export default {
  components: { 
    BlogCard
  },
  data() {
    return {
    }
  },
  computed: {
    blogPostsCards() {
      return this.$store.getters.blogPostsCards;
    },
  }
}
</script>

<style>

</style>