import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    fields: [
      {
        name: 'Дата',
        key: 'date',
      },
      {
        name: 'Имя',
        key: 'name',
      },
      {
        name: 'Фамилия',
        key: 'surname',
      },
      {
        name: 'Эл. почта',
        key: 'email',
      },
      {
        name: 'Телефон',
        key: 'phone',
      },
      {
        name: 'Страна',
        key: 'country',
      },
      {
        name: 'Город',
        key: 'city',
      },
      {
        name: 'Улица',
        key: 'street',
      },
      {
        name: 'Id',
        key: 'id',
      },
    ],
    searchQuery: '',
    fromQuery: '',
    toQuery: '',
    isLoading: false,
  },
  mutations: {
    SET_USERS(state, users) {
      users.forEach((user) => {
        user.date = user.date
          .split('')
          .slice(0, 10)
          .join('');
      });
      state.users = users;
    },
    SET_SEARCH(state, value) {
      state.searchQuery = value;
    },
    SET_FROM_QUERY(state, value) {
      state.fromQuery = value;
    },
    SET_TO_QUERY(state, value) {
      state.toQuery = value;
    },
    SEARCH_USERS(state) {
      state.users = state.users.filter((user) => user.name.toLowerCase().includes(state.searchQuery));
    },
    SET_PERIOD(state) {
      state.users = state.users.filter((user) => user.date >= state.fromQuery && user.date <= state.toQuery);
    },
    SET_IS_LOADING(state, bool) {
      state.isLoading = bool;
    },
  },
  actions: {
    async getUsers({ dispatch, commit }, url) {
      try {
        dispatch('setIsLoading', true);
        const response = await fetch(url);
        if (response.status >= 300) {
          const error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
        const data = await response.json();
        commit('SET_USERS', data);
      } catch (e) {
        console.log('Что-то пошло не так');
        if (e.response && e.response.status === 404) {
          console.log('Запрос завершился неудачно. Повторите запрос!');
        }
        if (e.response && e.response.status === 403) {
          console.log('У Вас нет прав. Получите права и повторите попытку!');
        }
      } finally {
        dispatch('setIsLoading', false);
      }
    },
    setSearch({ commit }, searchQuery) {
      commit('SET_SEARCH', searchQuery);
    },
    setFromQuery({ commit }, fromQuery) {
      commit('SET_FROM_QUERY', fromQuery);
    },
    setToQuery({ commit }, toQuery) {
      commit('SET_TO_QUERY', toQuery);
    },
    async searchUsers({ state, commit, dispatch }, url) {
      await dispatch('getUsers', url);
      if (!state.searchQuery && state.fromQuery && state.toQuery) {
        dispatch('setPeriod');
      } else if (!state.searchQuery) {
        dispatch('getUsers', url);
      } else {
        commit('SEARCH_USERS');
      }
    },
    async setPeriod({ state, commit, dispatch }, url) {
      await dispatch('getUsers', url);
      if (state.searchQuery && !state.fromQuery && !state.toQuery) {
        dispatch('searchUsers');
      } else if (!state.fromQuery && !state.toQuery) {
        dispatch('getUsers', url);
      } else {
        commit('SET_PERIOD');
      }
    },
    setIsLoading({ commit }, bool) {
      commit('SET_IS_LOADING', bool);
    },
  },
  getters: {
    users: ({ users }) => users,
    fields: ({ fields }) => fields,
    searchQuery: ({ searchQuery }) => searchQuery,
    fromQuery: ({ fromQuery }) => fromQuery,
    toQuery: ({ toQuery }) => toQuery,
    isLoading: ({ isLoading }) => isLoading,
  },
});
