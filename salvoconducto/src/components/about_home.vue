<template>
  <div id="about">
    <b-container>
      <p id="intro" class="centered">
        Hey!<br />
        My name is Nicolas and I am from Uruguay. In this page you will find the
        pictures I take with my Analog Camera and in some way see my journey in
        life.<br />
        Hope you enjoy!
      </p>
      <photo-card class="centered" />
    </b-container>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import PhotoCard from "./photo_card.vue";
export default Vue.extend({
  name: "about-home",
  components: {
    "photo-card": PhotoCard,
  },
});
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Megrim&family=Rajdhani&display=swap");
#about {
  height: 110vh;
}
#intro {
  padding: 50px;
  text-align: center;
}
.centered {
  width: 50%;
  margin: 0 auto;
}
</style>
