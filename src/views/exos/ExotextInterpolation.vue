<template>
  <div class="mt-5">
    <!-- Titre principal de l'exercice avec interpolation des variables 'number' et 'name' -->
    <h1>exo n°{{ number }}, réalisé par {{ name }}</h1>
    <!-- Affichage du message avec interpolation de la variable 'message' -->
    <h3> {{ message }}</h3>
    <!-- Affichage des éléments interpolés du tableau 'tab' -->
    <p>voici les éléments interpolés: {{ tab }}</p>

    <div class="mt-5 rounded border bg-danger bg-opacity-10 p-3">
      <h2>exo du prof:</h2>
      <!-- Affichage de la variable 'steven' -->
      <h4> {{ steven }}</h4>
      <!-- Affichage de la variable 'faux' -->
      <h4> {{ faux }}</h4>
      <!-- Affichage de la variable 'nombres' -->
      <h4> {{ nombres }}</h4>
      <!-- Affichage de la variable 'tab1' -->
      <h4> {{ tab1 }}</h4>
      <!-- Affichage du premier élément du tableau 'tab1' -->
      <h4> {{ tab1[0] }}</h4>
      <!-- Affichage de l'objet 'object' -->
      <h4> {{ object }}</h4>
      <!-- Affichage de la propriété 'name' de l'objet 'object' -->
      <h4> {{ object['name'] }}</h4>
      <!-- Affichage de la propriété 'name' de l'objet 'object' (notation point) -->
      <h4> {{ object.name }}</h4>
      <!-- Affichage de la propriété 'tel' de l'objet 'object' -->
      <h4> {{ object['tel'] }}</h4>
      <!-- Affichage de la propriété 'tel' de l'objet 'object' (notation point) -->
      <h4> {{ object.tel }}</h4>
      <!-- Affichage du résultat de la fonction 'msg' -->
      <h4> {{ msg() }}</h4>
    </div>

    <h2 class="mt-5"> Côté Code:</h2>
    <div class="mt-5 d-flex flex-column border bg-success bg-opacity-10 rounded p-5">
      <figure class="border rounded p-3 bg-primary bg-opacity-10">
        <figcaption class="mb-3 text-decoration-underline">la template:</figcaption>
        <img src="../../assets/exos/ExoTextInterpolationTemplate.webp" alt="template" class="rounded">
      </figure>
      <figure class="border rounded p-3 bg-primary bg-opacity-10 mt-3">
        <figcaption class="mb-3 text-decoration-underline">le script:</figcaption>
        <img src="../../assets/exos/ExoTextInterpolationScript1.webp" alt="script" class="rounded me-2">
        <img src="../../assets/exos/ExoTextInterpolationScript2.webp" alt="script" class="rounded">
      </figure>
    </div>
  </div>
</template>

<script setup lang='js'>
import { ref } from 'vue';

/**
 * Message à afficher.
 * @type {Ref<string>}
 */
const message = ref('coucou les copains!');

/**
 * Nom de l'utilisateur.
 * @type {Ref<string>}
 */
const name = ref('Gabriel');

/**
 * Numéro de l'exercice.
 * @type {Ref<number>}
 */
const number = ref(1);

/**
 * Tableau contenant les variables 'message', 'name' et 'number'.
 * @type {Ref<Array>}
 */
const tab = ref([message, name, number]);

/**
 * Titre du livre de Steven Seagal.
 * @type {Ref<string>}
 */
const steven = ref('Les mémoires de Steven Seagal');

/**
 * Valeur booléenne.
 * @type {Ref<boolean>}
 */
const faux = ref(false);

/**
 * Nombre à afficher.
 * @type {Ref<number>}
 */
const nombres = ref(1234567890);

/**
 * Tableau contenant du texte et un nombre.
 * @type {Ref<Array>}
 */
const tab1 = ref(['du texte', 99]);

/**
 * Objet contenant des informations.
 * @type {Ref<Object>}
 */
const object = ref({
  "name": "COOL",
  "tel": "060503030"
});

/**
 * Fonction retournant un message.
 * @returns {string} Le message 'Hello World'.
 */
function msg() {
  return 'Hello World';
}
</script>