<template>
  <div>
    <h1>exo n°{{ number }}, réalisé par {{ name }}</h1>
    <h3> {{ message }}</h3>
    <p>voici les éléments interpolés: {{ tab }}</p>

    <div>
      <h2>exo du prof:</h2>
      <h4> {{ steven }}</h4>
      <h4> {{ faux }}</h4>
      <h4> {{ nombres }}</h4>
      <h4> {{ tab1 }}</h4>
      <h4> {{ tab1[0] }}</h4>
      <h4> {{ object }}</h4>
      <h4> {{ object['name'] }}</h4>
      <h4> {{ object.name }}</h4>
      <h4> {{ object['tel'] }}</h4>
      <h4> {{ object.tel }}</h4>
      <h4> {{ msg() }}</h4>
    </div>

  </div>
</template>

<script setup lang='js'>
import { computed, watch, onMounted, onUpdated, onBeforeUnmount } from 'vue'
import { ref } from 'vue'

const message = ref('coucou les copains!')
const name = ref('Gabriel')
const number = ref(1)
const tab = ref([message,name,number])

const steven = ref('Les mémoires de Steven Seagal')
const faux = ref(false)
const nombres = ref(1234567890)
const tab1 = ref(['du texte', 99])
const object = ref({
  "name":"COOL", 
  "tel":"060503030"
})
function msg(){
  return 'Hello World';
}


const props = defineProps({
  // v-model
  modelValue: {
    default: '',
  },
});

const emit = defineEmits({
  // v-model event with validation
  'update:modelValue': (value) => value !== null,
});

const value = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emit('update:modelValue', value);
  },
});

const stopWatch = watch(
  () => props.modelValue, async (_newValue, _oldValue) => {
    // do something
  },
  {
    immediate: true
  }
);

onMounted(() => {
});

onUpdated(() => {
});

onBeforeUnmount(() => {
  stopWatch();
});

</script>

<style scoped lang="css">
</style>