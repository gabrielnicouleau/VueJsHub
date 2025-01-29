<template>
    <div>
        <h1 class="mt-5">Exo Event Modifier:</h1>
        <div class="mt-5 border rounded bg-danger bg-opacity-10 p-3">

            <!-- Champ de saisie pour taper un message, déclenche la méthode 'updateInput' à chaque entrée -->
            <input @input="updateInput($event)" placeholder="Tapez quelque chose..." class="form-control input-lg">

            <!-- Affichage du message saisi dans le premier champ de saisie -->
            <p class="border p-3 mt-2 bg-light rounded">{{ copie }}</p>

            <!-- Champ de saisie pour taper un message, déclenche la méthode 'updateEchappe' à chaque appui sur la touche Échappe -->
            <input @keyup.esc="updateEchappe($event)" placeholder="Tapez quelque chose et appuyez sur Échappe..." class="form-control input-lg mt-5">

            <!-- Affichage du message saisi dans le deuxième champ de saisie -->
            <p class="border p-3 mt-2 bg-light rounded">{{ copie2 }}</p>

            <!-- Bouton pour afficher une alerte, déclenche la méthode 'showAlert' au clic -->
            <button @click="showAlert" class="btn btn-success mt-3">Alerte</button>

        </div>

        <h2 class="mt-5"> Côté Code:</h2>
        <div class="mt-5 d-flex flex-column border bg-success bg-opacity-10 rounded p-5">
        <figure class="border rounded p-3 bg-primary bg-opacity-10">
            <figcaption class="mb-3 text-decoration-underline">la template:</figcaption>
            <img src="../../assets/exos/ExoEventModifierTemplate.webp" alt="template" class="rounded" style="max-width: 1000px;">
        </figure>
        <figure class="border rounded p-3 bg-primary bg-opacity-10 mt-3">
            <figcaption class="mb-3 text-decoration-underline">le script:</figcaption>
            <img src="../../assets/exos/ExoEventModifierScript.webp" alt="script" class="rounded">
        </figure>
        </div>

    </div>
</template>
  
<script setup>
import { ref } from 'vue';

/**
 * Message saisi dans le premier champ de saisie.
 * @type {Ref<string>}
 */
const copie = ref('');

/**
 * Message saisi dans le deuxième champ de saisie.
 * @type {Ref<string>}
 */
const copie2 = ref('');

/**
 * Met à jour le message saisi dans le premier champ de saisie.
 * @param {Event} event - L'événement d'entrée.
 */
const updateInput = (event) => {
    copie.value = event.target.value;
};

/**
 * Met à jour le message saisi dans le deuxième champ de saisie lorsque la touche Échappe est pressée.
 * @param {Event} event - L'événement d'entrée.
 */
const updateEchappe = (event) => {
    copie2.value = event.target.value;
};

/**
 * Affiche une alerte lorsque le bouton est cliqué.
 */
const showAlert = () => {
    alert('Bouton cliqué!');
};
</script>


  

  