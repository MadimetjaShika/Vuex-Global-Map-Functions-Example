import Vue from 'vue';
import Vuex from 'vuex';
import CreatePersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({

  state: {
    components: {
      active: [],
      dead: [],
    },
  },

  getters: {
    activeComponents(state) {
      return state.components.active;
    },
    deadComponents(state) {
      return state.components.dead;
    },
  },

  actions: {
    activateComponent({ commit, state }, componentName) {
      // Activate the component if it is not active
      if (state.components.active.indexOf(componentName) === -1) {
        commit('addActiveComponent', componentName);
      }

      // Remove the compnent from the dead components if it is present there
      const deadComponentIndex = state.components.dead.indexOf(componentName);
      if (deadComponentIndex > -1) {
        commit('removeDeadComponent', deadComponentIndex);
      }
    },

    deactivateComponent({ commit, state }, componentName) {
      // Remove the component from the active components if it's present
      const activeComponentIndex = state.components.active.indexOf(componentName);
      if (activeComponentIndex > -1) {
        commit('removeActiveComponent', activeComponentIndex);
      }

      // Set the component as deactivated if it is not deactivated already
      if (state.components.dead.indexOf(componentName) === -1) {
        commit('addDeadComponent', componentName);
      }
    },
  },

  mutations: {
    addActiveComponent(state, componentName) {
      state.components.active.push(componentName);
    },

    addDeadComponent(state, componentName) {
      state.components.dead.push(componentName);
    },

    removeActiveComponent(state, componentIndex) {
      state.components.active.splice(componentIndex, 1);
    },

    removeDeadComponent(state, componentIndex) {
      state.components.dead.splice(componentIndex, 1);
    },
  },

  strict: debug,
  plugins: [CreatePersistedState],
});
