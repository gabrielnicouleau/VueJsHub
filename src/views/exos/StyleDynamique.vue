<template>
    <div class="mt-5">
        <h1 class="mb-5">Exo styles dynamiques:</h1>

        <div class="mt-5 d-flex justify-content-around p-5 rounded border bg-danger bg-opacity-10">

            <!-- Première carte avec style dynamique et gestion du clic -->
            <div :style="carteStyle(cartes[0])" @click="toggleCarte(0)" class="card text-dark mb-3">
                <h5>Carte 1</h5>
            </div>

            <!-- Deuxième carte avec style dynamique et gestion du clic -->
            <div :style="carteStyle(cartes[1])" @click="toggleCarte(1)" class="card text-dark mb-3">
                <h5>Carte 2</h5>
            </div>

        </div>

        <h2 class="mt-5"> Côté Code:</h2>
        <div class="mt-5 d-flex flex-column border bg-success bg-opacity-10 rounded p-5">
        <figure class="border rounded p-3 bg-primary bg-opacity-10">
            <figcaption class="mb-3 text-decoration-underline">la template:</figcaption>
            <img src="../../assets/exos/StyleDynamiqueTemplate.webp" alt="template" class="rounded">
        </figure>
        <figure class="border rounded p-3 bg-primary bg-opacity-10 mt-3">
            <figcaption class="mb-3 text-decoration-underline">le script:</figcaption>
            <img src="../../assets/exos/StyleDynamiqueScript.webp" alt="script" class="rounded">
        </figure>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

/**
 * Tableau des cartes avec leurs styles et états.
 * @type {Ref<Array<Object>>}
 */
const cartes = ref([
    { 
        estActif: false, 
        default: '#d0e7ff', 
        actif: '#007bff' 
    },
    { 
        estActif: false, 
        default: '#d4edda', 
        actif: '#28a745' 
    }, 
]);

/**
 * Bascule l'état actif d'une carte.
 * @param {number} index - L'index de la carte à basculer.
 */
const toggleCarte = (index) => {
    cartes.value[index].estActif = !cartes.value[index].estActif;
};

/**
 * Retourne le style dynamique d'une carte en fonction de son état.
 * @param {Object} carte - L'objet représentant la carte.
 * @returns {Object} L'objet de style CSS.
 */
const carteStyle = (carte) => {
    return {
        backgroundColor: carte.estActif ? carte.actif : carte.default
    };
};
</script>


<!--Autre solution-->

<!--<template>
  <div>
    <div :style="{ color: activeColor, fontSize: myFont + 'px' }"></div>
  </div>

<h3 class="text-center">Dynamic Styling (inline) Mode  : Composition</h3>
<div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4 m-3 justify-content-center">
    <div class="col">
        <div class="card" @click="selectionCard(1)" v-bind:style="{backgroundColor: selectCard1 ==true ? 'red':'aqua' }">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
        </div>
        </div>
    </div>
    <div class="col">
        <div class="card" @click="selectionCard(2)" :style="{backgroundColor: selectCard2 ? 'green':'violet' }">
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
        </div>
        </div>
    </div>
    </div>

    <div :style="styleObject">Cool</div>
</div>
</template>

<script setup lang='js'>
import { ref } from 'vue';

// Variables réactives
const activeColor = ref('red');
const myFont = ref(30);
const selectCard1 = ref(false);
const selectCard2 = ref(false);

// Bonus : Objet pour plusieurs styles
const styleObject = ref({
  color: 'red',
  fontSize: '53px',
});

// Méthode pour gérer la sélection des cartes
function selectionCard(uneCard) {
  if (uneCard === 1) {
    selectCard1.value = !selectCard1.value;
  }
  if (uneCard === 2) {
    selectCard2.value = !selectCard2.value;
  }
}
</script>-->