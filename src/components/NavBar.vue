<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" aria-current="page" to="/home">Accueil</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Leçons
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <router-link class="nav-link active" aria-current="page" to="/LessonTextInterpolation">Interpolation</router-link>
                            <router-link class="nav-link active" aria-current="page" to="/LessonAttributeBinding">DataBinding</router-link>
                            <router-link class="nav-link active" aria-current="page" to="/LessonTwoWayBinding">TwoWayBinding</router-link>
                            <router-link class="nav-link active" aria-current="page" to="/LessonWatchers">Watchers</router-link>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Exercices
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <router-link class="nav-link active" aria-current="page" to="/ExoInterpolation">Interpolation</router-link>
                            <router-link class="nav-link active" aria-current="page" to="/RandomBook">Random Book</router-link>
                            <router-link class="nav-link active" aria-current="page" to="/ExoDirectiveVon">EventBinding</router-link>
                            <router-link class="nav-link active" aria-current="page" to="/ExoDirectiveVon2">EventBinding2</router-link>
                            <router-link class="nav-link active" aria-current="page" to="/ExoEventModifier">EventModifier</router-link>
                            <router-link class="nav-link active" aria-current="page" to="/ComputedMod">ComputedMod</router-link>
                            <router-link class="nav-link active" aria-current="page" to="/StyleDynamique">Styles Dynamiques</router-link>
                            <router-link class="nav-link active" aria-current="page" to="/StyleDynamiqueClass">Styles Dynamiques (class)</router-link>
                            <router-link class="nav-link active" aria-current="page" to="/ConditionnalRendering">ConditionnalRendering</router-link>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            TP
                        </a>
                        <ul class="dropdown-menu dropdown-menu-dark">
                            <router-link class="nav-link active" aria-current="page" to="/DataBinding">DataBinding</router-link>
                            <router-link class="nav-link active" aria-current="page" to="/Reactivite">Réactivité</router-link>
                            <router-link class="nav-link active" aria-current="page" to="/DynamiqueStyling">Dynamique Styling</router-link>
                            <router-link class="nav-link active" aria-current="page" to="/JeuTourParTour">Jeu Tour par Tour</router-link>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="hero text-white text-center py-5">
      <div class="container">
        <h1 class="display-4 fw-bold">Bienvenue dans le Hub de Cours Vue</h1>
        <p class="lead">
          Centralisez toutes vos leçons, exercices et TP dans une seule application web.
        </p>
        <router-link to="/list-lessons" class="btn btn-light btn-lg mt-3">
          Découvrir.
        </router-link>
      </div>
    </header>

</template>

<style scoped lang="css">
.hero{
  background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
}
</style>