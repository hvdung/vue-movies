import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state:{
    movies: [],
    movies_detail: {}
  },
  actions: {
    loadMovies({commit}){
      axios.get('https://api.themoviedb.org/3/discover/movie?api_key=84c9b0b369a176b1392957705f84124b&language=en-US&sort_by=popularity.desc&page=1')
      .then(response => {
        commit('SET_MOVIES', response.data.results)
      })
    },
    loadMoviesDetail({commit}, movie_id){
      axios.get('https://api.themoviedb.org/3/movie/'+ movie_id +'?api_key=84c9b0b369a176b1392957705f84124b')
      .then(response => {
        commit('SET_MOVIES_DETAIL', response.data)
      })
    }
  },
  mutations: {
    SET_MOVIES(state, movies){
      state.movies = movies
    },
    SET_MOVIES_DETAIL(state, movies_detail){
      state.movies_detail = movies_detail
    }
  }
})
