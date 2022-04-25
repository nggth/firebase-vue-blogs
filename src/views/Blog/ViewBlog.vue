<template>
  <section class="hero" v-if="currentBlog">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <figure class="image is-16by9">
              <img :src="this.currentBlog[0].blogCoverPhoto" alt="" />
            </figure>
          </div>
        </div>

        <section class="section">
          <div class="columns">
            <div class="column is-10 is-offset-1">
              <div class="content is-medium">
                <p class="title is-1">{{ this.currentBlog[0].blogTitle }}</p>
                <h4> Posted on: {{ new Date(this.currentBlog[0].blogDate).toLocaleString("vi-vn", { dateStyle: "long" }) }}</h4>
                <div class="post-content ql-editor" v-html="this.currentBlog[0].blogHTML"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ViewBlog',
  data() {
    return {
      currentBlog: null,
    }
  },
  async mounted() {
    this.currentBlog = await this.$store.state.blogPosts.filter(post => {
      return post.blogID === this.$route.params.blogid
    })
  }
}
</script>

<style>

</style>