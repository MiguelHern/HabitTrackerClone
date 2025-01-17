<script setup lang="ts">
import { ref } from 'vue';
import Modal from '@/components/ui/ButtonCounter.vue';
import Formulario from '@/components/forms/FormularioEjemplo.vue';

// Referencia al modal para controlar su apertura y cierre
const modalRef = ref();

// Función para abrir el modal
function openFormModal() {
  modalRef.value.openModal();
}
</script>

<template>
  <div>
    <!-- Botón para abrir el modal -->
    <button class="btn" @click="openFormModal">Abrir</button>

    <!-- Modal que incluye el formulario como contenido dinámico -->
    <Modal ref="modalRef">
      <Formulario />
    </Modal>
  </div>
</template>

<style scoped>

</style>
