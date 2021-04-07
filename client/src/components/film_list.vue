<template>
  <div id="films_container" class="container">
     <b-row class="vh-100 text-center" align-v="center">
      <b-col offset="2">
        <film-card/>
      </b-col>
     </b-row>
  </div>
</template>
<script lang="ts">
import filmCard from './film_card.vue';
export default {
    components:{
        filmCard,
    }
};
</script>