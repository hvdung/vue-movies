<template>
  <div>
    <ul>
      <li>{{movies_detail.original_title}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  mounted() {
    this.$store.dispatch('loadMoviesDetail', this.$route.params.id)
  },
  computed: mapState([
    'movies_detail'
  ])
}
</script>
