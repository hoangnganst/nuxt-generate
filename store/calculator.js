const state = {
  history: []
};
const getters = {
  allhistory: state => state.history
};
const actions = {
  async addHistory({ commit }, formular) {
    console.log(formular);
    commit("NEW_HISTORY", formular);
  },
  async deleteHistory({ commit }) {
    commit("SET_HISTORY", []);
  }
};
const mutations = {
  SET_HISTORY: (state, history) => (state.history = history),
  NEW_HISTORY: (state, formular) => state.history.unshift(formular)
};

export default { state, getters, actions, mutations };
