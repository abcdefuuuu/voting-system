import { createStore } from 'vuex';

export default createStore({
    state: {
        isAuthenticated: localStorage.getItem('authenticated') === 'true'
    },
    mutations: {
        SET_AUTHENTICATED(state, status) {
            state.isAuthenticated = status;
            localStorage.setItem('authenticated', status);
        }
    },
    actions: {
        login({ commit }) {
            commit('SET_AUTHENTICATED', true);
        },
        logout({ commit }) {
            commit('SET_AUTHENTICATED', false);
        }
    }
});
