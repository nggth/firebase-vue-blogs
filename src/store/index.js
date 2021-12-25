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
    editPost: null,
    user: null,
    profileEmail: null,
    profileName: null,
    profileUsername: null,
    profileId: null,
  },
  getters: {
  },
  mutations: {
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
      console.log(state.profileId);
    },
    changeName(state, payload) {
      state.profileName = payload
    },
    changeUsername(state, payload) {
      state.profileUsername = payload
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
      })
    }
  },
  modules: {},
});