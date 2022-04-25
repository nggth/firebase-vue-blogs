<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="post.blogCoverPhoto" atl="" />
      </figure>
      <div class="card-content is-overlay">
        <div v-show="editPost">
          <b-button icon-left="edit" size="is-small" />
          <b-button icon-left="trash" size="is-small" />
        </div>
      </div>
    </div>
    <div class="card-content">
      <div class="content">
        <a @click="isCardModalActive = true">
          <h4>{{post.blogTitle}}</h4>
        </a>
        <p>{{post.blogDate}}</p>
        
      </div>
    </div>
    <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
      <div class="card">
        <div class="card-image pt-3">
          <figure class="image is-16by9">
              <!-- <img :src="require(`../../assets/img/blogCards/${post.blogCoverPhoto}.jpg`)" atl="" /> -->
              <img :src="post.blogCoverPhoto" atl="" />
          </figure>
        </div>
        <div class="card-content ml-2">
          <div class="media">
            <div class="media-content">
              <h4>{{post.blogTitle}}</h4>
              <p>Posted on: {{ new Date(post.blogDate).toLocaleString('en-us', { dateStyle: 'long' }) }}</p>
            </div>
          </div>

          <div class="content">
            <router-link class="button is-link is-brand px-2" :to="{ name: 'ViewBlog', params: {blogid: this.post.blogID} }">
                View the post
            </router-link>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: ["post"],
  data() {
    return {
      isCardModalActive: false
    }
  },
  computed: {
    editPost() {
      return this.$store.state.editPost
    }
  }
}
</script>

<style lang="scss" scoped>

</style>