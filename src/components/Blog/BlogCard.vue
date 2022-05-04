<template>
  <div class="card large">
    <div class="card-image">
      <figure class="image is-16by9">
        <img :src="post.blogCoverPhoto" atl="" />
      </figure>
      <div class="card-content is-overlay">
        <div class="level-right">
          <div class="level-item" v-show="editPost">
            <b-button icon-left="edit" @click="editBlog" size="is-small" />
            <b-button icon-left="trash" @click="deleteBlog" size="is-small" />
          </div>
        </div>
      </div>
    </div>
    <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
      <div class="card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img :src="post.blogCoverPhoto" atl="" />
          </figure>
        </div>
        <div class="card-content ml-2">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{post.blogTitle}}</p>
              <p class="subtitle is-6">Posted on: {{ new Date(post.blogDate).toLocaleString('en-us', { dateStyle: 'long' }) }}</p>
              <div class="quick-content ql-editor" v-html="post.blogHTML"></div>
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
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://png.pngtree.com/png-clipart/20190706/original/pngtree-cartoon-hand-drawn-cute-fruit-smiley-png-image_4381234.jpg" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{post.blogTitle}}</p>
          <p class="subtitle is-6">Posted on: {{ new Date(post.blogDate).toLocaleString('en-us', { dateStyle: 'long' }) }}</p>
        </div>
      </div>
      <div class="content">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <router-link class="button is-info is-light px-2" :to="{ name: 'ViewBlog', params: {blogid: this.post.blogID} }">
                View the post
              </router-link>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <button class="button is-info is-light" @click="isCardModalActive = true">
                View Quick
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
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

  methods: {
    deleteBlog() {
      if (confirm('Are you sure you want to save this thing into the database?')) {
        this.$store.dispatch('deleteBlog', this.post.blogID)
        console.log('Thing was saved to the database.');
      } else {
        // Do nothing!
      }
    },
    editBlog() {
      this.$router.push({ name: 'EditBlog', params: { blogid: this.post.blogID } })
    },
    sliceText() {
      let str = this.post.blogHTML
      let re = str.substring(0, 400) + " ..."
      return re
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