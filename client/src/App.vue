<template>
  <div id="container">
    <nav-bar/>
    <router-view class="view"></router-view>
  </div>
</template>

<script lang="ts">
import navbar from './components/navbar.vue';
import Vue from "vue";
export default Vue.extend({
  name: "app",
  components: {
    "nav-bar": navbar,
  },
});
</script>

<style>
</style>
