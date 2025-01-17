<script setup lang="ts">
import DropdownMenu from '../ui/DropdownMenu.vue';

</script>

<template>
  <header class="mb-3">
    <h4 class="font-bold text-black text-xl">Nuevo hábito</h4>
  </header>
  <main>
    <form class="text-gray-500">
      <div>
        <label class="text-xs" for="suggestions">Nombre</label>
        <!-- Input con sugerencias -->
        <input list="options" id="suggestions" name="suggestions" placeholder="" class="input-main" />
        <datalist id="options">
          <option value="Nombre" />
          <option value="Correo" />
          <option value="Teléfono" />
          <option value="Código Postal" />
        </datalist>
      </div>

      <div class="grid grid-cols-3 gap-2">
        <div class="col-span-2">
          <label class="text-xs" for="">Objetivo</label>
          <div class="grid grid-cols-3 gap-3">
            <input type="number" class="input-main" />
            <select name="" id="" class="input-main">
              <option value="">Veces</option>
              <option value="">Minutos</option>
            </select>
            <DropdownMenu orientation="vertical" trigger="click" label="Repetir" class="input-main">
              <select name="" id="">
                <option value=""></option>
              </select>
            </DropdownMenu>
          </div>
        </div>

        <div class="col-span-1">
          <label class="text-xs" for="">Repetir</label>
          <input type="text" class="input-main" />
        </div>

        <div class="col-span-2">
          <label class="text-xs" for="">Hora del día</label>
          <input type="text" class="input-main" />
        </div>

        <div class="col-span-1">
          <label class="text-xs" for="">Fecha de inicio</label>
          <input type="date" class="input-main" />
        </div>
      </div>

      <div>
        <label class="text-xs" for="">Recordatorio</label>
        <input type="text" class="input-main" />
      </div>
    </form>
  </main>
</template>
