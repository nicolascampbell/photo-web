<template>
  <div id="home" class="container">
    <b-row>
      <b-col col-3 offset="4">
        <b-card id="card" style="max-width: 20rem">
          <b-card-text>
            Hey!<br />
            My name is Nicolas and I am from Uruguay. In this page you will find
            the pictures I take with my Analog Camera and in some way see my
            journey in life.<br />
            Hope you enjoy!
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style>
#home {
  height: 100vh;
  max-height: 800px;
  min-height: 500px;
  max-width: 1611px;
  background-image: url(../assets/background_home.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
#card {
  position: fixed;
  bottom: 0;
}
</style>
