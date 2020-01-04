<template>
  <div class="d-flex align-center">
    <v-text-field label="Search movies" single-line v-model="searchText"></v-text-field>
    <v-btn icon @click="submitForm">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </div>
</template>

<script>
/* eslint-disable no-debugger */
export default {
  data() {
    return {
      searchText: ""
    };
  },
  created() {
    this.$store.dispatch("loadMoviesResults", {
      text: this.$router.currentRoute.query.s,
      page: this.$router.currentRoute.query.page
    });
  },
  methods: {
    submitForm: function() {
      this.$router.push({
        name: "Movies search",
        params: { search: this.searchText, page: 1 }
      });
      this.$store.dispatch("loadMoviesResults", {
        text: this.searchText,
        page: 1
      });
    }
  }
};
</script>
