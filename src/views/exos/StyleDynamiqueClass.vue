<template>
    <div class="mt-5">
        <h1>Exercice : Style Dynamique (class):</h1>
        <div class="mt-5 d-flex justify-content-around p-5 rounded border bg-danger bg-opacity-10">

            <!-- Première carte avec classe dynamique et gestion du clic -->
            <div :class="[carte1 ? 'actif1' : 'default1']" @click="toggleCarte(1)" class="card text-dark mb-3">
                <h5>Carte 1</h5>
            </div>

            <!-- Deuxième carte avec classe dynamique et gestion du clic -->
            <div :class="[carte2 ? 'actif2' : 'default2']" @click="toggleCarte(2)" class="card text-dark mb-3">
                <h5>Carte 2</h5>
            </div>

        </div>

        <h2 class="mt-5"> Côté Code:</h2>
        <div class="mt-5 d-flex flex-column border bg-success bg-opacity-10 rounded p-5">
        <figure class="border rounded p-3 bg-primary bg-opacity-10">
            <figcaption class="mb-3 text-decoration-underline">la template:</figcaption>
            <img src="../../assets/exos/StyleDynamiqueClassTemplate.webp" alt="template" class="rounded">
        </figure>
        <figure class="border rounded p-3 bg-primary bg-opacity-10 mt-3">
            <figcaption class="mb-3 text-decoration-underline">le script:</figcaption>
            <img src="../../assets/exos/StyleDynamiqueClassScript.webp" alt="script" class="rounded">
        </figure>
        <figure class="border rounded p-3 bg-primary bg-opacity-10 mt-3">
            <figcaption class="mb-3 text-decoration-underline">le style:</figcaption>
            <img src="../../assets/exos/StyleDynamiqueClassStyle.webp" alt="style" class="rounded">
        </figure>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

/**
 * État de la première carte.
 * @type {Ref<boolean>}
 */
const carte1 = ref(false);

/**
 * État de la deuxième carte.
 * @type {Ref<boolean>}
 */
const carte2 = ref(false);

/**
 * Bascule l'état actif d'une carte.
 * @param {number} numeroCarte - Le numéro de la carte à basculer.
 */
const toggleCarte = (numeroCarte) => {
    if (numeroCarte === 1) {
        carte1.value = !carte1.value;
    } else if (numeroCarte === 2) {
        carte2.value = !carte2.value;
    }
};
</script>

<style>
/* Style par défaut pour la première carte */
.default1 {
    background-color: #d0e7ff;
    max-width: 18rem;
}

/* Style actif pour la première carte */
.actif1 {
    background-color: #007bff;
    max-width: 18rem;
}

/* Style par défaut pour la deuxième carte */
.default2 {
    background-color: #d4edda;
    max-width: 18rem;
}

/* Style actif pour la deuxième carte */
.actif2 {
    background-color: #28a745;
    max-width: 18rem;
}
</style>