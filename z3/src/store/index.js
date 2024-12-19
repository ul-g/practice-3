import { createStore } from 'vuex';

export default createStore({
  state: {
    movies: [
      { id: 1, title: 'Интерстеллар' },
      { id: 2, title: 'Начало' },
      { id: 3, title: 'Матрица' },
    ],
  },
  mutations: {
    addMovie(state, movie) {
      state.movies.push(movie);
    },
    removeMovie(state, movieId) {
      state.movies = state.movies.filter(movie => movie.id !== movieId);
    },
  },
  actions: {
    addMovie({ commit }, movie) {
      commit('addMovie', movie);
    },
    removeMovie({ commit }, movieId) {
      commit('removeMovie', movieId);
    },
  },
  getters: {
    allMovies(state) {
      return state.movies;
    },
  },
});
