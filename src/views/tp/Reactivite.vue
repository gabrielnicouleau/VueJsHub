<template>
    <div class="mt-5">
        <h1>TP Réactivité:</h1>
        <div class="mt-5 border rounded p-3 bg-primary bg-opacity-10">
            <p>Nombre actuel : {{ nombreActuel }}</p>
            <button @click="augmenter(1)" class="btn btn-success">+1</button>
            <button @click="augmenter(5)" class="btn btn-danger">+5</button>
            <p class="mt-3">Indice : {{ indice }}</p>
            <!--<p>Nombre cible : {{ nombreCible }}</p>--> <!--petit élément inutile pour le jeu mais qui m'a aidé à vérifier que tout fonctionne-->
        </div>
    </div>
</template>
  
<script setup>
import { ref, computed, watch } from 'vue';

const nombreActuel = ref(0);
const nombreCible = ref(Math.floor(Math.random() * 100) + 1);

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

const augmenter = (value) => {
    nombreActuel.value += value;
};

const remiseAZero = () => {
    nombreActuel.value = 0;
    nombreCible.value = Math.floor(Math.random() * 100) + 1;
};

watch(nombreActuel, (nouvelleValeur) => {
    if (nouvelleValeur === nombreCible.value) {
        alert('Bravo ! Vous avez atteint le nombre cible.');
        setTimeout(remiseAZero, 5000);
    } else if (nouvelleValeur > nombreCible.value + 30) {
        setTimeout(remiseAZero, 5000);
    }
});
</script>
