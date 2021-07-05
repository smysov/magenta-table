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
  },
  actions: {
    async getUsers({ commit }, url) {
      try {
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
      }
    },
  },
  getters: {
    users: ({ users }) => users,
    fields: ({ fields }) => fields,
  },
});
