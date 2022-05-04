<template>
  <section class="hero ">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <figure class="image is-16by9">
              <img :src="blogCoverPhoto" alt="" />
            </figure>
          </div>
        </div>

        <section class="section">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <div class="content is-medium">
                <h1 class="title">{{ this.blogTitle }} </h1>
                <h2 class="subtitle is-4">December 25, 2022</h2>
                <div class="đeql-editor" v-html="blogHTML"></div>
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
  name: 'PostPreview',
  computed: {
    blogTitle() {
      return this.$store.state.blogTitle
    },
    blogHTML() {
      return this.$store.state.blogHTML
    },
    blogCoverPhoto() {
      return this.$store.state.blogPhotoFileURL
    }
  }
}
</script>

<style>

</style>