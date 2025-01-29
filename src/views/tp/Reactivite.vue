<template>
    <div class="mt-5">
        <h1>TP Réactivité:</h1>
        <div class="mt-5 border rounded p-3 bg-danger bg-opacity-10">

            <!-- Affichage du nombre actuel -->
            <p>Nombre actuel : {{ nombreActuel }}</p>

            <!-- Bouton pour augmenter le nombre actuel de 1 -->
            <button @click="augmenter(1)" class="btn btn-success">+1</button>

            <!-- Bouton pour augmenter le nombre actuel de 5 -->
            <button @click="augmenter(5)" class="btn btn-danger">+5</button>

            <!-- Affichage de l'indice pour guider l'utilisateur -->
            <p class="mt-3">Indice : {{ indice }}</p>
            
            <!--petit élément inutile pour le jeu mais qui m'a aidé à vérifier que tout fonctionne-->
            <!--<p>Nombre cible : {{ nombreCible }}</p>-->
        </div>

        <h2 class="mt-5"> Côté Code:</h2>
        <div class="mt-5 d-flex flex-column border bg-success bg-opacity-10 rounded p-5">
            <figure class="border rounded p-3 bg-primary bg-opacity-10">
                <figcaption class="mb-3 text-decoration-underline">la template:</figcaption>
                <img src="../../assets/TP/ReactiviteTemplate.webp" alt="template" class="rounded">
            </figure>
            <figure class="border rounded p-3 bg-primary bg-opacity-10 mt-3">
                <figcaption class="mb-3 text-decoration-underline">le script:</figcaption>
                <img src="../../assets/TP/ReactiviteScript1.webp" alt="script" class="rounded mb-2">
                <img src="../../assets/TP/ReactiviteScript2.webp" alt="script" class="rounded">
            </figure>
        </div>
    </div>
</template>
  
<script setup>
import { ref, computed, watch } from 'vue';

/**
 * Nombre actuel affiché.
 * @type {Ref<number>}
 */
const nombreActuel = ref(0);

/**
 * Nombre cible généré aléatoirement.
 * @type {Ref<number>}
 */
const nombreCible = ref(Math.floor(Math.random() * 100) + 1);

/**
 * Indice pour guider l'utilisateur en fonction du nombre actuel et du nombre cible.
 * @returns {string} L'indice à afficher.
 */
const indice = computed(() => {
    if (nombreActuel.value < nombreCible.value) {
        return 'Le nombre est trop bas.';
    } else if (nombreActuel.value > nombreCible.value + 30) {
        return 'Vous avez beaucoup trop dépassé le nombre cible.';
    } else if (nombreActuel.value > nombreCible.value) {
        return 'Le nombre est dépassé.';
    } else {
        return 'Félicitations ! Vous avez atteint le nombre cible.';
    }
});

/**
 * Augmente le nombre actuel de la valeur spécifiée.
 * @param {number} value - La valeur à ajouter au nombre actuel.
 */
const augmenter = (value) => {
    nombreActuel.value += value;
};

/**
 * Réinitialise le nombre actuel et génère un nouveau nombre cible.
 */
const remiseAZero = () => {
    nombreActuel.value = 0;
    nombreCible.value = Math.floor(Math.random() * 100) + 1;
};

/**
 * Surveille les changements du nombre actuel et déclenche des actions en conséquence.
 * @param {number} nouvelleValeur - La nouvelle valeur du nombre actuel.
 */
watch(nombreActuel, (nouvelleValeur) => {
    if (nouvelleValeur === nombreCible.value) {
        alert('Bravo ! Vous avez atteint le nombre cible.');
        setTimeout(remiseAZero, 5000);
    } else if (nouvelleValeur > nombreCible.value + 30) {
        setTimeout(remiseAZero, 5000);
    }
});
</script>

