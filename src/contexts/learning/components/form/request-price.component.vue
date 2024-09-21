<template>
  <div>
    <p v-if="tenantPrice !== null"> Precio Unitario: {{ tenantPrice }} soles</p>
    <p v-else>No se encontró el arrendatario.</p>
    <div>
      <pv-input-text v-model="priceFinish" disabled placeholder="Disabled" />
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted, watch } from "vue";
import { TenantApiServices } from '@/contexts/learning/services/tenant-api.services.js'

//const tenantPrice = ref(null);
const tenantPrice = ref(null);
const tenantApi = new TenantApiServices();
const priceFinish =ref(0);
const datesTotal = ref(null);

const fetchTenants = async () => {
  try {
    const response = await tenantApi.getAllTenants();
    const tenants = response.data; // Asumiendo que la respuesta tiene un array de arrendatarios

    // Filtrar el arrendatario con ID "137c"
    const tenant = tenants.find(tenant => tenant.id === "137c");
    if (tenant) {
      tenantPrice.value = tenant.price; // Asigna el precio del arrendatario encontrado
      datesTotal.value = tenant.total_days;
    } else {
      tenantPrice.value = null; // No se encontró el arrendatario
    }
  } catch (error) {
    console.error("Error fetching tenants:", error);
    tenantPrice.value = null; // Manejo de error
  }
};

// Llama a la función al montar el componente
onMounted(fetchTenants);

watch(tenantPrice, (newPrice) => {
  if (newPrice !== null) {
    priceFinish.value = newPrice * (datesTotal.value); // Multiplica por 4 y guarda en priceFinish
  } else {
    priceFinish.value = 0; // Si no hay precio, lo pone a 0
  }
});

</script>

<style scoped>

</style>