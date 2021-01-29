<template>
  <div id="app">
    <navigator/> 
    <titler/>
    <about/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from './components/Navbar.vue';
import Title from './components/title.vue';
import About from './components/about_home.vue';


export default {
  name:'app',
  components:{
    'navigator': Navbar,
    'titler': Title,
    'about':About
  }
}
</script>

<style>
  
</style>
