<template>
  <div>
    <h1 class="mt-5">TP DataBinding</h1>
    <div class="mt-5 rounded border bg-danger bg-opacity-10 p-3">

      <!-- Image affichée avec la source dynamique -->
      <img :src="image" class="rounded"/>

      <!-- Nom affiché avec le texte dynamique -->
      <h4 :innerText="nom"></h4>

      <!-- Input pour saisir le nom avec la valeur dynamique -->
      <input :value="nom"/>

      <!-- Âge affiché avec le texte dynamique -->
      <h4 :innerText="age+' ans'"></h4>

      <!-- Âge + 10 affiché avec le texte dynamique -->
      <h4 :innerText="'Age+10= ' + addAge()"></h4>

      <!-- Nombre fétiche affiché avec le texte dynamique -->
      <h4 :innerText="'NB Fétiche= ' + nombreFetiche()"></h4>
    </div>
  </div>

  <h2 class="mt-5"> Côté Code:</h2>
  <div class="mt-5 d-flex flex-column border bg-success bg-opacity-10 rounded p-5">
    <figure class="border rounded p-3 bg-primary bg-opacity-10">
      <figcaption class="mb-3 text-decoration-underline">la template:</figcaption>
      <img src="../../assets/TP/DataBindingTemplate.webp" alt="template" class="rounded">
    </figure>
    <figure class="border rounded p-3 bg-primary bg-opacity-10 mt-3">
      <figcaption class="mb-3 text-decoration-underline">le script:</figcaption>
      <img src="../../assets/TP/DataBindingScript.webp" alt="script" class="rounded">
    </figure>
  </div>

</template>
  
<script lang="js" setup>
import { ref } from 'vue'

/**
 * URL de l'image à afficher.
 * @type {Ref<string>}
 */
const image = ref ('https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg')

/**
 * Nom à afficher.
 * @type {Ref<string>}
 */
const nom = ref('Dr Mario')

/**
 * Âge à afficher.
 * @type {Ref<number>}
 */
const age = ref(30)

/**
 * Ajoute 10 à l'âge actuel.
 * @returns {number} L'âge actuel plus 10.
 */
const addAge = () =>{
    return age.value + 10;
}

/**
 * Génère un nombre aléatoire.
 * @returns {number} Un nombre aléatoire entre 0 et 1.
 */
const nombreFetiche = () =>{
    return Math.random();
};
</script>