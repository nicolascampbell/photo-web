<template>
  <div id="container">
    <nav-bar @goToFilms="goToFilms" @goToHome="goToHome" />
    <home v-if="home_view" />
    <film-list  v-if="film_view" />
  </div>
</template>

<script lang="ts">
import home from "./components/home.vue";
import filmList from "./components/film_list.vue";
import navbar from "./components/Navbar.vue";
import Vue from "vue";
export default Vue.extend({
  name: "app",
  data() {
    return {
      home_view: true,
      film_view: false,
    };
  },
  components: {
    "nav-bar": navbar,
    home: home,
    "film-list": filmList,
  },
  methods: {
    goToFilms: function () {
      this.home_view = false;
      this.film_view = true;
    },
    goToHome: function () {
      this.home_view = true;
      this.film_view = false;
    },
  },
});
</script>

<style>
</style>
