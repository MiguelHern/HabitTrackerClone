<script setup lang="ts">
import { ref } from 'vue'

const activeSection = ref<'left' | 'right' | null>('left')

const openLeftMenu = () => {
  activeSection.value = 'left'
}

const openRightMenu = () => {
  activeSection.value = 'right'
}
</script>

<template>
  <header class="flex justify-between mb-3">
    <h4 class="font-bold text-black text-xl">Nuevo hábito</h4>
    <div class="flex gap-1 bg-primary px-1 py-1 rounded-sm">
      <div>
        <button
          class="btn-transparent"
          @click="openLeftMenu"
          :class="{ btn: activeSection === 'left' }"
        >
          Dejar
        </button>
      </div>
      <div>
        <button
          class="btn-transparent"
          @click="openRightMenu"
          :class="{ btn: activeSection === 'right' }"
        >
          Limitar
        </button>
      </div>
    </div>
  </header>
  <main>
    <section>
      <form class="text-gray-500">
        <div class="flex flex-col">
          <label class="text-xs" for="habit-name">Nombre</label>
          <input class="input-main" id="habit-name" type="text" />
        </div>
        <div class="grid grid-cols-3 gap-3">
          <div v-if="activeSection === 'right'" class="flex flex-col col-span-2">
              <label class="text-xs" for="goal">Objetivo</label>
            <div class="grid grid-cols-3 gap-3">
              <input class="input-main" id="goal" type="number" />
              <select class="input-main" id="goal-unit">
                <option value="">Veces</option>
                <option value="">Minutos</option>
              </select>
              <select class="input-main" id="goal-timeframe">
                <option value="">Día</option>
                <option value="">Semana</option>
                <option value="">Mes</option>
              </select>
            </div>
          </div>
          <div
            class="flex flex-col col-span-1"
            :class="{
              'col-span-3': activeSection === 'left',
              'col-span-1': activeSection === 'right',
            }"
          >
            <label class="text-xs" for="start-date-left">Fecha de inicio</label>
            <input class="input-main" id="start-date-left" type="date" />
          </div>
        </div>
      </form>
    </section>
  </main>
</template>
