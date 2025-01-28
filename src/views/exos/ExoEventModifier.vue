<template>
    <div class="mt-2">
        <h1>Exo Event Modifier:</h1>
        <div class="mt-5 border rounded bg-danger bg-opacity-10 p-3">
            <input @input="updateInput($event)" placeholder="Tapez quelque chose..." class="form-control input-lg">
            <p class="border p-3 mt-2 bg-light rounded">{{ copie }}</p>
            <input @keyup.esc="updateEchappe($event)" placeholder="Tapez quelque chose et appuyez sur Échappe..." class="form-control input-lg mt-5">
            <p class="border p-3 mt-2 bg-light rounded">{{ copie2 }}</p>
            <button @click="showAlert" class="btn btn-success mt-3">Alerte</button>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const copie = ref('');
const copie2 = ref('');

const updateInput = (event) => {
    copie.value = event.target.value;
};

const updateEchappe = (event) => {
    copie2.value = event.target.value;
};

const showAlert = () => {
alert('Bouton cliqué!');
};
</script>

  

  