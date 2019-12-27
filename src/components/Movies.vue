<template>
  <div>
    <ul>
      <li v-for='(item, index) in movies' :key='index'>
        <h5>{{item.title}}</h5>
        <p>{{item.popularity}}</p>
        <router-link :to="{ name: 'Movie', params: { id: item.id } }">Movie</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  mounted() {
    this.$store.dispatch('loadMovies')
  },
  computed: mapState([
    'movies'
  ])
}
</script>
