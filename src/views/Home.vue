<template>
  <div class="home">
      <Banner />
      <About />
      <Article />
      <div>
        <div class="container is-fullwidth">
            <div class="section">
              <h2 class="title is-4">View more blog</h2>
              <div class="row columns is-variable">
                <BlogCard class="column is-3 mx-1" :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>

import Banner from '../components/Banner.vue'
import About from '../components/MainLayout/About.vue'
import Article from '../components/MainLayout/Article.vue'
import BlogCard from '../components/MainLayout/BlogCard.vue'
export default {
  name: 'Home',
  components: {
    Banner,
    About,
    Article,
    BlogCard,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Weekely blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post.",
        welcomeScreen: true,
        photo: "coding"
      },
      sampleBlogPost: [
        {
          title: "This is a Filter Title",
          blogHTML: "This is a Filter post title.",
          blogCoverPhoto: "blog-phto1",
        },
        {
          title: "This is a Filter Title",
          blogHTML: "This is a Filter post title.",
          blogCoverPhoto: "blog-phto2",
        }
      ],
    }
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    }
  }
};
</script>
<style lang="css" scoped>

</style>