<template>
  <div id="app">
    <navigator/> 
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from './components/Navbar.vue';

export default {
  name:'app',
  components:{
    'navigator': Navbar
  }
}
</script>

<style>



</style>
