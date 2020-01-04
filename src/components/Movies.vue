<template>
  <v-container>
    <FormSearch></FormSearch>
    <v-pagination
      class="pagination"
      v-model="currentPage"
      :length="totalPages"
      :total-visible="7"
      @input="loadMoviesData"
    ></v-pagination>
    <v-row>
      <v-col md="3" v-for="(item, index) in movies" :key="index">
        <v-card>
          <v-card-title class="d-flex justify-center">
            <h4>{{item.original_title}}</h4>
          </v-card-title>
          <v-card-subtitle>{{item.release_date}}</v-card-subtitle>
          <v-img
            :src="item.backdrop_path ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}` : `http://placehold.jp/500x281.png`"
          ></v-img>
          <v-card-text>{{item.overview}}</v-card-text>
          <v-btn class="mb-4" color="error">
            <router-link
              :to="{ name: 'Movie', params: { id: item.id } }"
              class="color-white"
            >Read more</router-link>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      :total-visible="7"
      @input="loadMoviesData"
    ></v-pagination>
  </v-container>
</template>

<script>
/* eslint-disable no-debugger */
import { mapState } from "vuex";
import FormSearch from "./FormSearch.vue";

export default {
  components: {
    FormSearch
  },
  created() {
    this.$store.dispatch("loadMovies", this.$router.currentRoute.query.page);
  },
  computed: {
    ...mapState({
      movies: state => state.movies,
      totalPages: state => state.totalPages,
      totalResults: state => state.totalResults
    }),
    currentPage: {
      get() {
        return this.$store.state.currentPage;
      },
      set(val) {
        this.$store.commit("SET_CURRENT_PAGE", val);
      }
    }
  },
  methods: {
    loadMoviesData: function() {
      this.$router.push({
        name: "Movies page",
        params: { page: this.$store.state.currentPage }
      });
      this.$store.dispatch("loadMovies", this.$store.state.currentPage);
    }
  }
};
</script>

<style>
.color-white {
  color: #fff !important;
  text-decoration: none;
}
</style>
