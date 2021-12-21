<template>
  <div class="home">
      <Banner />
      <About />
      <Article />
      <BlogCardBuilder />
  </div>
</template>

<script>

import Banner from '../components/MainLayout/Banner.vue'
import About from '../components/MainLayout/About.vue'
import Article from '../components/MainLayout/Article.vue'
import BlogCardBuilder from '../components/MainLayout/BlogCardBuilder.vue'
export default {
  name: 'Home',
  components: {
    Banner,
    About,
    Article,
    BlogCardBuilder,
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
      
    }
  },
  
};
</script>
<style lang="css" scoped>

</style>