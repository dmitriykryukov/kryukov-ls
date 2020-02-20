export default {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    LOGOUT_USER: (state) => {
      state.user = {}
    }
  },
  actions: {
    setUser: (context, payload) => {
      context.commit("SET_USER", payload);
    },
    async logoutUser (context, payload) {
      await this.$axios.post('/logout');
      context.commit('LOGOUT_USER');
    }
  },
  getters: {
    userIsLoggedIn: state => {
      const userObj = state.user;
      const userObjetIsEmpt = Object.keys(userObj).length === 0 && userObj.constructor === Object;

      return userObjetIsEmpt === false;
    }
  }
};