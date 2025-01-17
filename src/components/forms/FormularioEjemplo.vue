<script setup lang="ts">
import { ref } from 'vue';

// Datos del formulario
const formData = ref({
  name: '',
  email: '',
});

// Función para manejar el envío del formulario
function submitForm() {
  console.log('Formulario enviado:', formData.value);
  alert(`Nombre: ${formData.value.name}\nCorreo: ${formData.value.email}`);
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <label>
      Nombre:
      <input v-model="formData.name" type="text" placeholder="Tu nombre" />
    </label>
    <br />
    <label>
      Correo:
      <input v-model="formData.email" type="email" placeholder="Tu correo" />
    </label>
    <br />
    <button class="btn" type="submit">Enviar</button>
  </form>
</template>

<style scoped>

</style>
