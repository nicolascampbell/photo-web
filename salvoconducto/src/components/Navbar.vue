<template>
    <div id="navbar">   
        <b-navbar class="fixed-scroll shadow" v-bind:class="scrolled" fixed="top" type="dark" toggleable="sm" variant="transparent" >
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav  style="font-size: 1.2em !important;width: 100%;" align="center" >
                    <b-nav-item active href="#">Home</b-nav-item>
                    <b-nav-item>Films</b-nav-item>
                    <b-nav-item>Collections</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
    
<script lang="ts">

export default {
    name:'navbar',
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    data () {
    return {
      lastScrollPosition:0,
      scrolled:{
          scrolled_up:false,
          scrolled_down:false
      }
      
    }
    },
    methods: {
        handleScroll () :void{
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop    // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
            if (currentScrollPosition < 30) {
                return
            }    // Here we determine whether we need to show or hide the navbar
            if(currentScrollPosition < this.lastScrollPosition )  {
                this.scrolled.scrolled_up=true
                this.scrolled.scrolled_down=false
            }else{
                this.scrolled.scrolled_down=true
                this.scrolled.scrolled_up=false
            } // Set the current scroll position as the last scroll position
            this.lastScrollPosition = currentScrollPosition
  }
    }
  }



</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Megrim&family=Rajdhani&display=swap');
    div:first-child{
        font-family:'Rajdhani', sans-serif;
    }
    .fixed-scroll{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1030;
        background-color: rgba(0, 0, 0, 0.4)!important;
       
    }
    
    .scrolled_down{
        transform:translateY(-100%); transition: all 0.3s ease-in-out;
    }
    .scrolled_up{
        transform:translateY(0); transition: all 0.3s ease-in-out;
    }
    
</style>