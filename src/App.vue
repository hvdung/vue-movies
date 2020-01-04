<template>
  <v-app id="app">
    <v-toolbar>
      <v-toolbar-title>The movies DB</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>
          <router-link :to="{ name: 'Hello' }">Home</router-link>
        </v-btn>
        <v-btn text>
          <router-link to="/about">About</router-link>
        </v-btn>
        <v-btn text>
          <router-link :to="{ name: 'Movies' }">Movies</router-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
