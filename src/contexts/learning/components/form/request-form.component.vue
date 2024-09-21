<script setup>
import RequestCalendar from '@/contexts/learning/components/form/request-calendar.component.vue'
import RequestTime from '@/contexts/learning/components/form/request-time.component.vue'
import RequestPrice from '@/contexts/learning/components/form/request-price.component.vue'
</script>

<template>
  <div class="form">
    <h2>Request Details</h2>
    <div class="calendar">
      <RequestCalendar></RequestCalendar>
    </div>
    <div class="Time">
      <RequestTime></RequestTime>
    </div>
    <div class="price">
      <RequestPrice></RequestPrice>
    </div>
  </div>
</template>

<style scoped>
h2{
  position: absolute;
  font-size: 40px;
  left: 30px;
  top: 120px;
  color:#222222;
}

.form {
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.calendar {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.Time {
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.price {
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>