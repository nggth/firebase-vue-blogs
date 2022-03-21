<template>
  <div class="columns section">
    <div class="column is-7">
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
                  <!-- {{ blogPhotoName || 'No photo' }} -->
                  {{ this.$store.state.blogPhotoName || 'No photo'  }}
                </span>
              </label>
              <div class="ml-3">
                <button class="button is-infp" :class="{'button-inactive': !blogPhotoFileURL}">
                  Preview...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Decription</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <div class="editor">
                <vue-editor :editorOptions="editorSettings" v-model="blogHTML" useCustomImageHandler @image-added="imageHandler" />
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
                <button class="button is-primary">
                  Publish blog
                </button>
                <button class="button is-link">
                  Preview blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Quill from 'quill';
window.Quill = Quill
const ImageResize = require('quill-image-resize-module').default
Quill.register('modules/imageResize', ImageResize);
import firebase from "firebase/app";
import "firebase/storage";

export default {
  name: 'CreateBlogs',
  data() {
    return {
      file: '',
      editorSettings: {
        modules: {
          imageResize: {}
        }
      },
      blogPhoto: ''
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

</style>