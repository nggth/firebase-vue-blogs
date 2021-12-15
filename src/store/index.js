import Vue from 'vue';
import Vuex from 'vuex';
// import db from '../firebase/initFirebase'
// import firebase from "firebase/app";
import "firebase/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: "Blog card 1", blogCoverPhoto: "stock-1", blogDate: "November 21, 2021"},
      { blogTitle: "Blog card 2", blogCoverPhoto: "stock-2", blogDate: "November 21, 2021"},
      { blogTitle: "Blog card 3", blogCoverPhoto: "stock-3", blogDate: "November 21, 2021"},
      { blogTitle: "Blog card 4", blogCoverPhoto: "stock-4", blogDate: "November 21, 2021"},
    ],
    editPost: null,
    user: null,
    profileEmail: null,
    profileName: null,
    profileId: null,
    profileInitials: null,
  },
  mutations: {
    tonggleEditPost(state, payload) {
      state.editPost = payload
      console.log(state.editPost)
    }
  }
})