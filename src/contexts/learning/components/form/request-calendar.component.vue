<template>
  <div class="card flex justify-center">
    <label for="dates" class="font-bold block mb-2"> Date </label>
    <pv-datepicker v-model="dates" selectionMode="range" :manualInput="false" showIcon fluid />
  </div>
  <div>
    <p>Contador:{{dates}}</p>
  </div>
</template>

<script setup>

import { ref } from "vue";
const dates = ref();

</script>

<style scoped>

</style>