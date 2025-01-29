<template>
  <div class="mt-5">
    <h1>TP: Styles Dynamiques</h1>
    <div class="mt-5 d-flex flex-column border bg-danger bg-opacity-10 rounded p-3">
      <!--Premier input sur lequel on applique la directive v-model pour récupérer sa valeur et l'utiliser dynamiquement 
      dans la constante titreClass pour l'appliquer au premier input-->
      <input v-model="input1" placeholder="Tapez 'hello' ou 'world'" class="mb-2">

      <!--Premier titre sur lequel on applique la directive v-bind à la classe et au style pour les rendre dynamiques-->
      <h2 :class="titreClass" :style="titreStyle">Hello World! (classes dynamiques)</h2
        >
      <!--Deuxième input sur lequel on applique la directive v-model pour récupérer sa valeur et l'appliquer au deuxième 
      titre-->
      <input v-model="input2" placeholder="Tapez une couleur (red, green, yellow, etc...)" class="mb-2">

      <!--Deuxième titre sur lequel on applique la directive v-bind au style pour le rendre dynamique et y appliquer la 
      valeur du deuxième input-->
      <h2 :style="{ backgroundColor: input2, borderRadius: '5px' }">Hello World! (couleurs dynamiques)</h2>

      <div class="mt-3 d-flex justify-content-center">
        <!--bouton gerant l'affichage du premier titre sur lequel on execute la directive v-on pour appliquer le toggle 
        du booléen titreCacher au click-->
        <button @click="toggleTitle" style="max-width:18rem;" class="bg-primary text-light">Activer 1er Titre</button>
      </div>

    </div>

    <h2 class="mt-5"> Côté Code:</h2>
    <div class="mt-5 d-flex flex-column border bg-success bg-opacity-10 rounded p-5">
      <figure class="border rounded p-3 bg-primary bg-opacity-10">
        <figcaption class="mb-3 text-decoration-underline">la template:</figcaption>
        <img src="../../assets/TP/DynamiqueStylingTemplate.webp" alt="template" class="rounded">
      </figure>
      <figure class="border rounded p-3 bg-primary bg-opacity-10 mt-3">
        <figcaption class="mb-3 text-decoration-underline">le script:</figcaption>
        <img src="../../assets/TP/DynamiqueStylingScript1.webp" alt="script" class="rounded me-2">
        <img src="../../assets/TP/DynamiqueStylingScript2.webp" alt="script" class="rounded">
      </figure>
      <figure class="border rounded p-3 bg-primary bg-opacity-10 mt-3">
        <figcaption class="mb-3 text-decoration-underline">le style:</figcaption>
        <img src="../../assets/TP/DynamiqueStylingStyle.webp" alt="style" class="rounded">
      </figure>
    </div>

  </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';

/**
 * Texte saisi dans le premier input.
 * @type {Ref<string>}
 */
const input1 = ref('');

/**
 * Couleur saisie dans le deuxième input.
 * @type {Ref<string>}
 */
const input2 = ref('');

/**
 * Indique si le premier titre est caché.
 * @type {Ref<boolean>}
 */
const titreCacher = ref(false);

/**
 * Classe CSS dynamique pour le premier titre en fonction du texte saisi.
 * @returns {string} La classe CSS à appliquer.
 */
const titreClass = computed(() => {
  if (input1.value === 'hello') {
      return 'HelloClass';
  } else if (input1.value === 'world') {
      return 'WorldClass';
  } else {
      return '';
  }
});

/**
 * Style CSS dynamique pour cacher ou afficher le premier titre.
 * @returns {Object} L'objet de style CSS.
 */
const titreStyle = computed(() => {
  return titreCacher.value ? { display: 'none' } : {};
});

/**
 * Bascule l'affichage du premier titre.
 */
const toggleTitle = () => {
  titreCacher.value = !titreCacher.value;
};
</script>

<style>
/* Classes CSS à Appliquer au premier titre selon la valeur de l'input*/
.HelloClass {
  background-color: blue;
  border-radius: 5px;
}
.WorldClass {
  background-color: green;
  border-radius: 5px;
}
</style>
