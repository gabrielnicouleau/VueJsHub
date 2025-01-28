<template>
    <div id="app">
      <p class="text-danger bg-dark">{{ generateBook() }}</p>
    </div>
  </template>
  
<script lang="js" setup>
const generateBook = () =>{
    const nombreRandom = Math.random();
    if(nombreRandom > 0.5) {
        return 'Le livre de la Jungle';
    } else {
        return 'Le livre de Boba Fet';
    }
};
</script>