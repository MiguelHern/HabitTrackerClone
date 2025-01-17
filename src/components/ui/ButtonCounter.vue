<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

function openModal() {
  isOpen.value = true
}

function closeModal() {
  isOpen.value = false
}

defineExpose({
  openModal,
  closeModal,
})
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    role="dialog"
    aria-modal="true"
  >
    <div class="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow">
      <div class="text-end">
        <button
          aria-label="Cerrar modal"
          class="text-end text-gray-400 hover:text-gray-900"
          @click="closeModal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <slot/>
    </div>
  </div>
</template>

<style scoped>
</style>
