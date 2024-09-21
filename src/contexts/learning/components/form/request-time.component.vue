<template>
  <div class="flex-auto">
    <label for="pick_up_time" class="font-bold block mb-2"> Pick Up Time </label>
    <pv-datepicker v-model="pick_up_time" showIcon fluid iconDisplay="input" timeOnly inputId="pick_up_time">
      <template #inputicon="slotProps">
        <i class="pi pi-clock" @click="slotProps.clickCallback" />
      </template>
    </pv-datepicker>
  </div>
  <div class="flex-auto">
    <label for="return_time" class="font-bold block mb-2"> Return Time </label>
    <pv-datepicker v-model="return_time" showIcon fluid iconDisplay="input" timeOnly inputId="return_time">
      <template #inputicon="slotProps">
        <i class="pi pi-clock" @click="slotProps.clickCallback" />
      </template>
    </pv-datepicker>
  </div>
  <div>
    <p>Hora de inicio: {{formattedPickUpTime}}</p>
    <p>Hora de final: {{formattedReturnTime}}</p>
  </div>
</template>

<script setup>

import { ref, computed } from "vue";

const pick_up_time = ref();
const return_time = ref();

// Computed para formatear las horas
const formattedPickUpTime = computed(() => {
  return pick_up_time.value ? new Date(pick_up_time.value).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'No seleccionada';
});

const formattedReturnTime = computed(() => {
  return return_time.value ? new Date(return_time.value).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'No seleccionada';
});



</script>

<style scoped>

</style>