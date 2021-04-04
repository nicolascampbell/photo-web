<template>
    <div id="film_card">   
        <b-card
            header="La Paloma"
            sub-title="20.04.20 Berlin"
            style="max-width:600px;">
        <b-card-img :src="require('../assets/exampleCard.jpg')"></b-card-img>
        <b-card-text>This picture was taken in the park of good nowhere.</b-card-text>
        </b-card>
    </div>
</template>
    
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    name:'photo-card',
    
    
})

</script>
<style>
   
</style>