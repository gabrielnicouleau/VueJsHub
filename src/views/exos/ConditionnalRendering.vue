<template>
  <div class="mt-5">
    <h1>Exo Conditionnal Rendering:</h1>
    <div class="mt-5 rounded border bg-danger bg-opacity-10 p-3">
      <h1 class="mb-5">WatchList:</h1>
      
      <!-- Champ de saisie pour ajouter un film, lié à la propriété réactive 'nomFilm' -->
      <input v-model="nomFilm" placeholder="Ajouter un film" class="form-control mb-3">
      
      <!-- Bouton pour ajouter un film à la liste, déclenche la méthode 'ajouterFilm' au clic -->
      <button @click="ajouterFilm" class="btn btn-primary mb-3">Ajouter</button>
      
      <!-- Affiche le nom du film si la liste 'mesFilms' contient des éléments -->
      <h2 v-if="mesFilms.length > 0">{{ nomFilm }}</h2>
      
      <!-- Affiche un message si la liste 'mesFilms' est vide -->
      <h2 v-else>Pas encore de Films dans votre Liste. Veuillez en Ajouter !</h2>
      
      <!-- Liste des films ajoutés, utilise 'v-for' pour itérer sur 'mesFilms' -->
      <ul>
        <li v-for="(film, index) in mesFilms" :key="index" style="list-style:none" @click="supprimerFilm(index)">{{ film }}</li>
      </ul>
    </div>

    <h2 class="mt-5"> Côté Code:</h2>
    <div class="mt-5 d-flex flex-column border bg-success bg-opacity-10 rounded p-5">
      <figure class="border rounded p-3 bg-primary bg-opacity-10">
        <figcaption class="mb-3 text-decoration-underline">la template:</figcaption>
        <img src="../../assets/exos/ConditionnalRenderingTemplate.webp" alt="template" class="rounded">
      </figure>
      <figure class="border rounded p-3 bg-primary bg-opacity-10 mt-3">
        <figcaption class="mb-3 text-decoration-underline">le script:</figcaption>
        <img src="../../assets/exos/ConditionnalRenderingScript.webp" alt="script" class="rounded">
      </figure>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

/**
 * Tableau des films ajoutés.
 * @type {Ref<Array<string>>}
 */
const mesFilms = ref([]);

/**
 * Nom du film à ajouter.
 * @type {Ref<string>}
 */
const nomFilm = ref('');

/**
 * Ajoute un film au tableau mesFilms.
 */
const ajouterFilm = () => {
    if (nomFilm.value.trim() !== '') {
        mesFilms.value.push(nomFilm.value);
        nomFilm.value = '';
    }
};

/**
 * Supprime un film du tableau mesFilms à l'index spécifié.
 * @param {number} index - L'index du film à supprimer.
 */
const supprimerFilm = (index) => {
    mesFilms.value.splice(index, 1);
};
</script>
