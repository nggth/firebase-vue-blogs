import Vue from "vue"
import Vuex from "vuex"
import firebase from "firebase/app"
import "firebase/auth"
import db from "../firebase/firebaseConfig"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: "Blog card 1", blogCoverPhoto: "stock-1", blogDate: "November 21, 2021"},
      { blogTitle: "Blog card 2", blogCoverPhoto: "stock-2", blogDate: "November 21, 2021"},
      { blogTitle: "Blog card 3", blogCoverPhoto: "stock-3", blogDate: "November 21, 2021"},
      { blogTitle: "Blog card 4", blogCoverPhoto: "stock-4", blogDate: "November 21, 2021"},
    ],
    blogHTML: 'Write your blog title here...',
    blogTitle: '',
    blogPhotoName: '',
    blogPhotoFileURL: null,
    blogPhotoReview: null,
    editPost: null,
    user: null,
    
    profileEmail: null,
    profileName: null,
    profileUsername: null,
    profileId: null,
    
    profileGender: [ 'male', 'female', 'other' ],
    profileRole: [ 'member', 'admin' ],
    profileDescription: null,
    profileSkinType: null,

    info: []
  },
  getters: {
  },
  mutations: {
    newBlogPost(state, payload) {
      state.blogHTML = payload
      console.log(state.blogHTML)
    },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload
    },
    fileNameChange(state, payload) {
      state.blogPhotoName = payload
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload
    },
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileName = doc.data().name
      state.profileUsername = doc.data().username;
      state.profileGender = doc.data().gender;
      state.profileRole = doc.data().role;
      state.profileDescription = doc.data().description;
      state.profileSkinType = doc.data().skinType;
      console.log(state.profileId);
    },
    changeInfo(state, payload) {
      state.info.push({
        profileName: payload.profileName,
        profileUsername: payload.profileUsername,
        role: payload.role,
        profileGender: payload.profileGender,
        profileDescription: payload.profileDescription,
        skinType: payload.skinType
      })
    },
    openPhotoPreview(state) {
      state.blogPhotoPreview = !state.blogPhotoPreview;
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get()
      commit("setProfileInfo", dbResults);
      console.log(dbResults)
    },
    async updateUserSetting({state}) {
      const dataBase = await db.collection("users").doc(state.profileId)
      await dataBase.update({
        name: state.profileName,
        username: state.profileUsername,
        gender: state.profileGender,
        role: state.profileRole,
        description: state.profileDescription,
        skinType: state.profileSkinType
      })
    }
  },
  modules: {},
});