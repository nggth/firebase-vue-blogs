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
    }
  },
  
};
</script>
<style lang="css" scoped>
.home {
  background-color: #f3eaf5;
}
</style>