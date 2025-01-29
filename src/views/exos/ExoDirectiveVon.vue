<template>
    <div>
        <h1 class="mt-5">Exo réaction à un évenement:</h1>

        <div class="mt-5 rounded border bg-danger bg-opacity-10 p-3">

            <!-- Affichage du nombre actuel -->
            <h2>{{ nombre }}</h2>

            <div class="d-flex justify-content-evenly mt-5">

                <!-- Bouton pour augmenter le nombre de 10, déclenche la méthode 'augmenter' au clic -->
                <button @click="augmenter(10)" class="btn btn-success mb">+</button>

                <!-- Bouton pour réduire le nombre de 44, déclenche la méthode 'reduire' au clic -->
                <button v-on:click="reduire(44)" class="btn btn-danger mb">-</button>

            </div>

        </div>

        <h2 class="mt-5"> Côté Code:</h2>
        <div class="mt-5 d-flex flex-column border bg-success bg-opacity-10 rounded p-5">
            <figure class="border rounded p-3 bg-primary bg-opacity-10">
                <figcaption class="mb-3 text-decoration-underline">la template:</figcaption>
                <img src="../../assets/exos/ExoDirectiveVonTemplate.webp" alt="template" class="rounded">
            </figure>
            <figure class="border rounded p-3 bg-primary bg-opacity-10 mt-3">
                <figcaption class="mb-3 text-decoration-underline">le script:</figcaption>
                <img src="../../assets/exos/ExoDirectiveVonScript.webp" alt="script" class="rounded">
            </figure>
        </div>
    </div>
</template>
  
<script lang="js" setup>
import { ref } from 'vue';

/**
 * Nombre actuel affiché.
 * @type {Ref<number>}
 */
const nombre = ref(0);

/**
 * Augmente le nombre actuel de la valeur spécifiée.
 * @param {number} val - La valeur à ajouter au nombre actuel.
 * @returns {number} Le nouveau nombre après l'ajout.
 */
const augmenter = (val) => {
    return nombre.value += val;
};

/**
 * Réduit le nombre actuel de la valeur spécifiée.
 * @param {number} val - La valeur à soustraire du nombre actuel.
 * @returns {number} Le nouveau nombre après la soustraction.
 */
const reduire = (val) => {
    return nombre.value -= val;
};
</script>

