<template>
  <div>
    <h1 class="mt-5">Computed Mode : Composition</h1>
    <div class="mt-5 rounded border bg-danger bg-opacity-10 p-3">
      <div class="mb-3">

        <!-- Bouton pour augmenter le nombre de 20, déclenche la méthode 'augmenter' au clic -->
        <button v-on:click="augmenter(20)" type="button" class="btn btn-success">+</button>

        <!-- Bouton pour réduire le nombre de 10, déclenche la méthode 'reduire' au clic gauche -->
        <button v-on:click.left="reduire(10)" type="button" class="btn btn-danger">-</button>

      </div>
      <div class="mb-3">

        <!-- Affichage de la propriété calculée 'afficherNameUser' -->
        <p>{{ afficherNameUser }}</p>

      </div>
      <div class="mb-3">

        <!-- Affichage de la variable réactive 'leNombre' -->
        <p>{{ leNombre }}</p>

      </div>
    </div>

    <h2 class="mt-5"> Côté Code:</h2>
    <div class="mt-5 d-flex flex-column border bg-success bg-opacity-10 rounded p-5">
      <figure class="border rounded p-3 bg-primary bg-opacity-10">
        <figcaption class="mb-3 text-decoration-underline">la template:</figcaption>
        <img src="../../assets/exos/ComputedModTemplate.webp" alt="template" class="rounded">
      </figure>
      <figure class="border rounded p-3 bg-primary bg-opacity-10 mt-3">
        <figcaption class="mb-3 text-decoration-underline">le script:</figcaption>
        <img src="../../assets/exos/ComputedModScript.webp" alt="script" class="rounded">
      </figure>
    </div>

  </div>
</template>

<script setup lang='js'>
import { ref, computed } from 'vue';

/**
 * Nombre actuel affiché.
 * @type {Ref<number>}
 */
const leNombre = ref(0);

/**
 * Nom de l'utilisateur.
 * @type {Ref<string>}
 */
const nameUser = ref('');

/**
 * Propriété calculée pour afficher le nom de l'utilisateur.
 * @returns {string} 'test' si le nom de l'utilisateur est vide, sinon 'autre Test'.
 */
const afficherNameUser = computed(() => {
  console.log('fonction qui gère le NAME exécutée');
  return nameUser.value === '' ? 'test' : 'autre Test';
});

/**
 * Augmente le nombre actuel de la valeur spécifiée.
 * @param {number} num - La valeur à ajouter au nombre actuel.
 */
function augmenter(num) {
  leNombre.value += num;
}

/**
 * Réduit le nombre actuel de la valeur spécifiée.
 * @param {number} num - La valeur à soustraire du nombre actuel.
 */
function reduire(num) {
  leNombre.value -= num;
}
</script>
