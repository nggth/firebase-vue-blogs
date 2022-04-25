<template>
	<section class="hero is-fullheight">
		<div class="hero-body">
			<div class="container has-text-centered">
				<div class="columns is-8 is-variable zz">
					<div class="column is-two-thirds has-text-left">
            <Loading v-show="loading" />
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Title</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="text" placeholder="Enter blog title" v-model="blogTitle">
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Photo</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="file is-normal has-name">
                    <label class="file-label">
                      <input class="file-input" type="file" ref="blogPhoto" id="blog-photo" @change="fileChange" accept=".png, .jpg, .jpeg" />
                      <span class="file-cta">
                        <span class="file-icon">
                          <i class="fas fa-upload"></i>
                        </span>
                      </span>
                      <span class="file-name">
                        {{ this.$store.state.blogPhotoName || 'No photo'  }}
                      </span>
                    </label>
                    <div class="ml-3">
                      <button class="button is-infp" :disabled="!blogPhotoFileURL" @click="isCardModalActive = true">
                        Preview...
                      </button>
                    </div>
                    <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
                      <div class="card">
                        <div class="card-image">
                          <figure class="image is-16by9">
                              <img :src="this.blogPhotoFileURL" atl="" />
                          </figure>
                        </div>
                        <div class="card-content ml-2">
                          <div class="media">
                            <div class="media-content">
                              <p>*Image for title*</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-modal>
                  </div>
                </div>
              </div>
            </div>

            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Decription</label>
              </div>
              <div class="field-body blog-container">
                <div class="field">
                  <div class="control">
                    <div class="editor">
                      <vue-editor id="editor-container" :editorOptions="editorSettings" v-model="blogHTML" useCustomImageHandler @image-added="imageHandler" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="field is-horizontal">
              <div class="field-label">
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <div class="buttons">
                      <button class="button is-primary" @click="uploadBlog">Publish blog</button>
                      <router-link class="button is-link" :to="{ name: 'BlogPreview' }">Preview blog</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Quill from "quill";
window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);

import firebase from "firebase/app";
import "firebase/storage";
import db from "../../firebase/firebaseConfig"

import Loading from  '../../components/Loading.vue'

export default {
  name: 'CreateBlogs',
  components: {
    Loading
  },
  data() {
    return {
      file: '',
      editorSettings: {
        modules: {
          imageResize: {},
        },
      },
      blogPhoto: '',
      isCardModalActive: false,
      error: null,
      loading: null
    }
  },
  methods: {
    fileChange() {
      this.file = this.$refs.blogPhoto.files[0]
      const fileName = this.file.name
      this.$store.commit('fileNameChange', fileName)
      this.$store.commit('createFileURL', URL.createObjectURL(this.file))
    },

    openPreview() {
      this.$store.commit("openPhotoPreview");
    },
    
    imageHandler(file, Editor, cursorLocation, resetUploader) {
      const storageRef = firebase.storage().ref();
      const docRef = storageRef.child(`documents/blogPostPhotos/${file.name}`);
      docRef.put(file).on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          const downloadURL = await docRef.getDownloadURL();
          Editor.insertEmbed(cursorLocation, "image", downloadURL);
          resetUploader();
        }
      )
    },

    uploadBlog() {
      if (this.blogTitle.length !== 0 && this.blogHTML.length !== 0) {
        if (this.file) {
          this.loading = true;
          const storageRef = firebase.storage().ref()
          const docRef = storageRef.child(`documents/BlogCoverPhotos/${this.$store.state.blogPhotoName}`)
          docRef.put(this.file).on('state_changed', (snapshot) => {
            console.log(snapshot)
          }, (err) => {
            console.log(err)
            this.loading = false
          }, async () => {
            const downloadURL = await docRef.getDownloadURL()
            const timestamp = await Date.now()
            const database = await db.collection("blogPosts").doc()

            await database.set({
              blogID: database.id,
              blogHTML: this.blogHTML,
              blogCoverPhoto: downloadURL,
              blogPhotoName: this.blogPhotoName,
              blogTitle: this.blogTitle,
              profileId: this.profileId,
              date: timestamp,
            })
            await this.$store.dispatch("getPost")
            this.loading = false
            this.$router.push({ name: 'ViewBlog', params: { blogid: database.id } })
          })
          return
        }
        else {
          this.loading = false
          this.$toasted.show('Please upload a cover photo.', {
            type: 'error'
          })
        }
      }
      else {
        this.loading = false
        this.$toasted.show('Please ensure Blog Title and Blog Post has been filled.', {
          type: 'error'
        })
      }
    }
  },
  computed: {
    profileId() { return this.$store.state.profileId },
    blogPhotoName() { return this.$store.state.blogPhotoName },
    blogTitle: {
      get() { return this.$store.state.blogTitle },
      set(payload) {
        this.$store.commit("updateBlogTitle", payload);
      }
    },
    blogHTML: {
      get() { return this.$store.state.blogHTML },
      set(payload) {
        this.$store.commit("newBlogPost", payload);
      }
    },
    blogPhotoFileURL() { return this.$store.state.blogPhotoFileURL},
  }
}
</script>

<style>
#editor-container {
  height: 500px;
}
.ql-editor img {
   max-width: 700px;
   min-height: 200px;
   height: auto;
}

</style>