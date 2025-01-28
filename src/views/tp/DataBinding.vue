<template>
    <div>
      <h1>TP DataBinding</h1>
      <div>
        <img :src="image"/>
        <h4 :innerText="nom"></h4>
        <input :value="nom"/>
        <h4 :innerText="age+' ans'"></h4>
        <h4 :innerText="'Age+10= ' + addAge()"></h4>
      <h4 :innerText="'NB Fétiche= ' + nombreFetiche()"></h4>
      </div>
    </div>
  </template>
  
<script lang="js" setup>
import { ref } from 'vue'

const image = ref ('https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg')
const nom = ref('Dr Mario')
const age = ref(30)

const addAge = () =>{
    return age.value + 10;
}
const nombreFetiche = () =>{
    return Math.random();
};
</script>