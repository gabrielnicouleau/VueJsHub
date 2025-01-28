<template>
    <div>
        <h1>Exo réaction à un évenement:</h1>

        <div class="mt-5">
            <h2>{{ nombre }}</h2>
            <div class="d-flex justify-content-evenly mt-5">
                <button @click="augmenter(10)" class="btn btn-success mb">+</button>
                <button v-on:click="reduire(44)" class="btn btn-danger mb">-</button>
            </div>
        </div>

    </div>
</template>
  
<script lang="js" setup>
import { ref } from 'vue'

const nombre = ref(0);

const augmenter = (val) => {
 return nombre.value += val;
};
const reduire = (val) => {
 return nombre.value -= val;
};
</script>
