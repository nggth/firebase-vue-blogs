<template>
  <div class="container pt-4 blog-wrapper">
    <div class="blog-content columns is-vcentered">
      <div class="column is-6">
        <h2 class="title is-3" v-if="post.welcomeScreen">{{post.title}}</h2>
        <h2 class="title is-3" v-else>{{post.blogTitle}}</h2>
        <p v-if="post.welcomeScreen">{{post.blogPost}}</p>
        <p class="content-preview" v-else v-html="post.blogHTML"></p>
        <router-link class="link light-link" v-if="post.welcomeScreen" to="#">
          Login/Register
          <b-icon icon="chevron-right"></b-icon>
        </router-link>
        <router-link class="link light-link" v-else :to="{ name: 'ViewBlog', params: { blogid: this.post.blogID } }">
          View the post
          <b-icon icon="chevron-right"></b-icon>
        </router-link>
      </div>
      <hr class="line">
      <div class="blog-photo column is-6">
        <img v-if="post.welcomeScreen" :src="require(`../assets/img/blogPhotos/${post.photo}.jpg`)" atl="" />
        <!-- <img v-else :src="require(`../assets/img/blogPhotos/${post.blogCoverPhoto}.jpg`)" atl="" /> -->
        <img v-else :src="post.blogCoverPhoto" atl="" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "blogPost",
  props: ["post"],
}
</script>

<style lang="scss" scoped>
.blog-wrapper {
  .blog-content {
    justify-content: center;
    align-items: center;

    div {
      max-width: 600px;
      padding: 52px 14px;
      h2 {
        margin-bottom: 24px;
      }
      
      .content-preview {
        white-space: 24px;
        max-height: 24px;
        width: 250px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .link {
        display: inline-flex;
        align-items: center;
        margin-top: 32px;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
        transition: .5s ease-in all;

        &:hover {
          border-bottom-color: #303030;
        }
      }
      .link-light {
        &:hover {
          border-bottom-color: #ffff;
        }
      }
    }
  }

  .blog-photo {
    img {
      display: block;
      max-width: 600px;
      max-height: 350px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      box-shadow: 0 8px 8px -4px #7d8dd1;
    }

  }
  
}

</style>