<template>
    <div class="mt-5">
        <h1 class="mb-5">Exo styles dynamiques:</h1>

        <div class="mt-3 d-flex justify-content-around">
                <div :style="carteStyle(cartes[0])" @click="toggleCarte(0)" class="card text-dark mb-3">
                    <h5>Carte 1</h5>
                </div>
                <div :style="carteStyle(cartes[1])" @click="toggleCarte(1)" class="card text-dark mb-3">
                    <h5>Carte 2</h5>
                </div>
        </div>

    </div>
</template>
  
<script setup>
import { ref } from 'vue';

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

const toggleCarte = (index) => {
    cartes.value[index].estActif = !cartes.value[index].estActif;
};

const carteStyle = (carte) => {
    return {
    backgroundColor: carte.estActif ? carte.actif : carte.default
    };
};
</script>
  