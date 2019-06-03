import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    infoTwits: []
  },
  mutations: {
    SET_INFO(state, value) {
      state.infoTwits = value
    },
  },
  actions: {}
});
