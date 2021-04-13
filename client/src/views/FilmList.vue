<template>
  <div id="films_container" class="container">
     <b-row class="vh-100 text-center" align-v="center">
      <b-col offset="2" v-for="film in films" :key="film.name">
        <film-card :filmInfo="film"/>
      </b-col>
     </b-row>
  </div>
</template>
<script lang="ts">
import filmCard from '../components/film_card.vue';
import store from  "../store.json";
export default ({
  components:{
      filmCard,
    },
  data(){
    return{
      films:store.films
    }
  }
});
</script>
