<template> 
  <div> 
    <h1 class="mt-1">Exo Réaction à un évenement n°2:</h1> 
    <div class="d-flex justify-content-center mt-5"> 
      <input v-on:input="updateMessage($event)" placeholder="Tapez quelque chose...">  
    </div> 
    <h2 class="mt-3">{{ message }}</h2>
  </div> 
</template>

<script setup> 
import { ref } from 'vue'; 
const message = ref(''); 
const updateMessage = (event) => { 
  return message.value = event.target.value; 
};
</script>
  