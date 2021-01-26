<template>
    <div>
        <!-- Navigation -->
        <nav class="navbar navbar-expand-sm navbar-dark shadow fixed-top">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item active">
                <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Films</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Collections</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>

        <!-- Full Page Image Header with Vertically Centered Content -->
        <header id="title">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
            <div class="col-12 text-center">
                <h1 class="font-weight-light">Salvoconducto</h1>
                
            </div>
            </div>
        </div>
        </header>
    </div>
</template>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Megrim&family=Rajdhani&display=swap');
    #title {
    height: 100vh;
    min-height: 500px;
    background-Image: url('https://i.imgur.com/5Alff1S.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color:#ffff;
    font-family: 'Megrim', cursive;
    }
    div:first-child{
        font-family:'Rajdhani', sans-serif;
    }
</style>