/* eslint-disable no-debugger */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    movies: [],
    movies_detail: {},
    currentPage: 1,
    totalPages: 0,
    totalResults: 0,
    searchText: ""
  },
  actions: {
    loadMovies({ commit }, page) {
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=84c9b0b369a176b1392957705f84124b&language=en-US&sort_by=popularity.desc&page=' + page)
        .then(response => {
          commit('SET_MOVIES', response.data)
        })
    },
    loadMoviesDetail({ commit }, movie_id) {
      axios.get('https://api.themoviedb.org/3/movie/' + movie_id + '?api_key=84c9b0b369a176b1392957705f84124b')
        .then(response => {
          commit('SET_MOVIES_DETAIL', response.data)
        })
    },
    loadMoviesResults({ commit }, payload) {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=84c9b0b369a176b1392957705f84124b&language=en-US&query=' + payload.text + '&page=' + payload.page)
        .then(response => {
          commit('SET_MOVIES', response.data)
        })
    }
  },
  mutations: {
    SET_MOVIES(state, data) {
      state.movies = data.results,
        state.totalPages = data.total_pages,
        state.totalResults = data.total_results
    },
    SET_MOVIES_DETAIL(state, movies_detail) {
      state.movies_detail = movies_detail
    },
    SET_CURRENT_PAGE(state, page) {
      state.currentPage = Number(page)
    }
  }
})
