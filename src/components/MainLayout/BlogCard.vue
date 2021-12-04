<template>
    <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="require(`../../assets/blogCards/${post.blogCoverPhoto}.jpg`)" atl="" />
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            <h4>{{post.blogTitle}}</h4>
            <small>11:09 PM - 1 Jan 2016</small>
            <br>
            <button 
              class="button is-link is-light"
              @click="isCardModalActive = true"
            >
              View more
            </button>

            <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
              <div class="card">
                  <div class="card-image">
                      <figure class="image is-4by3">
                          <img :src="require(`../../assets/blogCards/${post.blogCoverPhoto}.jpg`)" atl="" />
                      </figure>
                  </div>
                  <div class="card-content">
                      <div class="media">
                          <div class="media-left">
                              <figure class="image is-48x48">
                                  <img :src="require(`../../assets/blogCards/${post.blogCoverPhoto}.jpg`)" atl="" />
                              </figure>
                          </div>
                          <div class="media-content">
                              <h4>{{post.blogTitle}}</h4>
                          </div>
                      </div>

                      <div class="content">
                        <router-link class="link" to="#">
                          View the post
                          <b-icon icon="chevron-right"></b-icon>
                        </router-link>
                        <br>
                        <small>11:09 PM - 1 Jan 2016</small>
                      </div>
                  </div>
              </div>
            </b-modal>
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
  }
}
</script>

<style lang="scss" scoped>

</style>