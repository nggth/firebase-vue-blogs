import Vue from "vue"
import Vuex from "vuex"
import firebase from "firebase/app"
import "firebase/auth"
import db from "../firebase/firebaseConfig"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogPosts: [],
    postLoaded: null,
    blogHTML: 'Write your blog title here...',
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: null,
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
    blogPostsCards(state) {
      var item = state.blogPosts.sort(() => Math.random() - Math.random()).slice(0, 4)
      if(state.blogPosts.length > 4) {
        return item
      } else return state.blogPosts
    } 
  },
  mutations: {
    newBlogPost(state, payload) {
      state.blogHTML = payload
    },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload
    },
    filterBlogPosts(state, payload) {
      state.blogPosts = state.blogPosts.filter((post) => post.blogID !== payload)
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
    setBlogState(state, payload) {
      state.blogTitle = payload.blogTitle
      state.blogHTML = payload.blogHTML
      state.blogPhotoFileURL = payload.blogCoverPhoto
      state.blogPhotoName = payload.blogCoverPhotoName
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
      // console.log(state.profileId);
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
    // openPhotoPreview(state) {
    //   state.blogPhotoPreview = !state.blogPhotoPreview;
    // },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db.collection("users").doc(firebase.auth().currentUser.uid);
      const dbResults = await dataBase.get()
      commit("setProfileInfo", dbResults);
      // console.log(dbResults)
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
    },
    async getPost({ state }) {
      const dataBase = await db.collection("blogPosts").orderBy("date", "desc");
      const dbResults = await dataBase.get();
      dbResults.forEach((doc) => {
        if (!state.blogPosts.some((post) => post.blogID === doc.id)) {
          const data = {
            blogID: doc.data().blogID,
            blogHTML: doc.data().blogHTML,
            blogCoverPhoto: doc.data().blogCoverPhoto,
            blogTitle: doc.data().blogTitle,
            blogDate: doc.data().date,
            blogCoverPhotoName: doc.data().blogCoverPhotoName,
          };
          state.blogPosts.push(data);
        }
      });
      state.postLoaded = true;
    },
    async updatePost({ commit, dispatch}, payload) {
      commit('filterBlogPosts', payload);
      await dispatch('getPost')
    },
    async deleteBlog({ commit }, payload) {
      const getPost = await db.collection('blogPosts').doc(payload)
      await getPost.delete()
      commit('filterBlogPosts', payload)
    }
  },
  modules: {},
});
