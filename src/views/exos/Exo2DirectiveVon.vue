<template> 
  <div> 
    <h1 class="mt-5">Exo Réaction à un évenement n°2:</h1>
    <div class="mt-5 rounded border bg-danger bg-opacity-10 p-3">
      <div class="d-flex justify-content-center">

        <!-- Champ de saisie pour taper un message, déclenche la méthode 'updateMessage' à chaque entrée -->
        <input v-on:input="updateMessage($event)" placeholder="Tapez quelque chose...">

      </div>

      <!-- Affichage du message saisi -->
      <h2 class="mt-3">{{ message }}</h2>

    </div>
    
    <h2 class="mt-5"> Côté Code:</h2>
    <div class="mt-5 d-flex flex-column border bg-success bg-opacity-10 rounded p-5">
      <figure class="border rounded p-3 bg-primary bg-opacity-10">
        <figcaption class="mb-3 text-decoration-underline">la template:</figcaption>
        <img src="../../assets/exos/Exo2DirectiveVonTemplate.webp" alt="template" class="rounded">
      </figure>
      <figure class="border rounded p-3 bg-primary bg-opacity-10 mt-3">
        <figcaption class="mb-3 text-decoration-underline">le script:</figcaption>
        <img src="../../assets/exos/Exo2DirectiveVonScript.webp" alt="script" class="rounded">
      </figure>
    </div>

  </div> 
</template>

<script setup> 
import { ref } from 'vue'; 

/**
 * Message saisi par l'utilisateur.
 * @type {Ref<string>}
 */
const message = ref(''); 

/**
 * Met à jour le message en fonction de l'entrée de l'utilisateur.
 * @param {Event} event - L'événement d'entrée.
 * @returns {string} Le message mis à jour.
 */
const updateMessage = (event) => { 
  return message.value = event.target.value; 
};
</script>

