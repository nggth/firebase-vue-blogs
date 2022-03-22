<template>
  <div class="container">
    <div class="card">
      <div class="header">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://source.unsplash.com/random/96x96" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ this.blogTitle }} </p>
            <p class="subtitle is-6">timing</p>
          </div>
        </div>
      </div>
      <div class="card-image">
        <img :src="blogCoverPhoto" alt="" />
      </div>
      <div class="card-content">
        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item has-text-centered">
              <a href="">
                <i class="material-icons">favorite_border</i>
              </a>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <a href="">
                  <i class="material-icons">chat_bubble_outline</i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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