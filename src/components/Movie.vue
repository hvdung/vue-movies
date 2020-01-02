<template>
  <v-container>
    <v-card>
      <h4>{{movies_detail.original_title}}</h4>
    </v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  mounted() {
    this.$store.dispatch("loadMoviesDetail", this.$route.params.id);
  },
  computed: mapState(["movies_detail"])
};
</script>
