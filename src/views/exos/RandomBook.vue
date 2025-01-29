<template>
  <h1 class="mt-5">Exo Affichage Dynamique:</h1>
  <div class="mt-5 rounded border bg-danger bg-opacity-10 p-3 d-flex justify-content-center">

      <!-- Paragraphe affichant le résultat de la fonction 'generateBook' -->
      <p class="text-danger bg-dark rounded p-2" style="max-width: 18rem;">{{ generateBook() }}</p>

  </div>

  <h2 class="mt-5"> Côté Code:</h2>
  <div class="mt-5 d-flex flex-column border bg-success bg-opacity-10 rounded p-5">
    <figure class="border rounded p-3 bg-primary bg-opacity-10">
      <figcaption class="mb-3 text-decoration-underline">la template:</figcaption>
      <img src="../../assets/exos/RandomBookTemplate.webp" alt="template" class="rounded">
    </figure>
    <figure class="border rounded p-3 bg-primary bg-opacity-10 mt-3">
      <figcaption class="mb-3 text-decoration-underline">le script:</figcaption>
      <img src="../../assets/exos/RandomBookScript.webp" alt="script" class="rounded">
    </figure>
  </div>
</template>

<script lang="js" setup>
/**
* Génère aléatoirement le titre d'un livre.
* @returns {string} Le titre du livre généré.
*/
const generateBook = () => {
  const nombreRandom = Math.random();
  if (nombreRandom > 0.5) {
      return 'Le livre de la Jungle';
  } else {
      return 'Le livre de Boba Fet';
  }
};
</script>