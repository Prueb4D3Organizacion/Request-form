<template>
  <div class="card flex justify-center">
    <label for="dates" class="font-bold block mb-2">Date</label>
    <pv-datepicker v-model="dates" selectionMode="range" :manualInput="false" showIcon fluid @input="updateDates" />
  </div>

  <!-- Mostrar las fechas seleccionadas y la diferencia de días -->
  <div>
    <p>Fecha de inicio: {{ formattedStartDate }}</p>
    <p>Fecha de fin: {{ formattedEndDate }}</p>
    <p>Diferencia de días: {{ daysDifference }}</p>
  </div>
</template>

<script setup>

import { ref, computed } from 'vue';
import {TenantApiServices} from '@/contexts/learning/services/tenant-api.services.js'

// Aquí se almacenan las fechas seleccionadas
const dates = ref([]);
const tenantApi = new TenantApiServices();
const tenantId = '137c'; // ID del arrendatario

// Computed para formatear la fecha de inicio
const formattedStartDate = computed(() => {
  return dates.value[0] ? new Date(dates.value[0]).toLocaleDateString() : 'No seleccionada';
});

// Computed para formatear la fecha de fin
const formattedEndDate = computed(() => {
  return dates.value[1] ? new Date(dates.value[1]).toLocaleDateString() : 'No seleccionada';
});

// Computed para calcular la diferencia de días entre las dos fechas
const daysDifference = computed(() => {
  if (dates.value[0] && dates.value[1]) {
    // Convertir las fechas a objetos Date
    const startDate = new Date(dates.value[0]);
    const endDate = new Date(dates.value[1]);

    // Restar las fechas y dividir por los milisegundos en un día
    const diffTime = Math.abs(endDate - startDate); // Diferencia en milisegundos
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convertir milisegundos a días
    return diffDays; // Retornar la diferencia en días
  } else {
    return 'Selecciona ambas fechas';
  }
});

// Función para actualizar las fechas en la API
const updateDates = async () => {
  if (dates.value[0] && dates.value[1]) {
    const updatedData = {
      from: dates.value[0], // Asignar la fecha de inicio
      to: dates.value[1],   // Asignar la fecha de fin
    };

    try {
      await tenantApi.updateTenantDates(tenantId, updatedData);
      console.log("Fechas actualizadas exitosamente.");
    } catch (error) {
      console.error("Error actualizando fechas:", error);
    }
  }
};

</script>

<style scoped>

</style>