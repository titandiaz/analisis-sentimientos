import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoTwits: [],
    urlTweet: ''
  },
  mutations: {
    SET_INFO(state, value) {
      state.infoTwits = value
    },
    SET_URL(state, value) {
      state.urlTweet = value
    },
  },
  actions: {}
});
