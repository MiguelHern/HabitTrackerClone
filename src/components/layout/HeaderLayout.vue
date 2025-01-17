<script setup lang="ts">
import { ref } from 'vue'
const search = ref(false)

const toggleSearcher = () => {
  search.value = !search.value
}

import Dropdown from '@/components/ui/DropdownMenu.vue'
import Modal from '../ui/ModalComponent.vue'
import CreateHabitForm from '../forms/CreateHabitForm.vue'
import { ChevronDownIcon, PlusIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'
import BreakHabitForm from '../forms/BreakHabitForm.vue'


const createHabitModalRef = ref()
const breakHabitModalRef = ref()


function openCreateHabitModal() {
  createHabitModalRef.value.openModal()
}

function openBreakHabitModal() {
  breakHabitModalRef.value.openModal()
}
</script>

<template>
  <nav class="bg-black border-gray-500 border-b flex text-white w-full items-center py-2 px-2">
    <h1 class="">Música</h1>
    <ul class="flex w-full justify-end h-full gap-3">
      <li>
        <div class="btn inline-flex justify-center place-items-center" @click="toggleSearcher">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </li>
      <li>
        <input
          type="date"
          id="date"
          name="date"
          class="font-medium h-7 text-sm btn border-none focus:outline-none"
        />
      </li>
      <li>
        <Dropdown label="Orden de mis hábitos" orientation="vertical" trigger="click">
          <template #iconRight>
            <ChevronDownIcon class="size-4" />
          </template>
          <template #iconLeft>
            <ChevronDownIcon class="size-4" />
          </template>

          <ul class="">
            <li>Opción 1</li>
            <li>Opción 2</li>
            <li>Opción 3</li>
          </ul>
        </Dropdown>
      </li>
      <li>
        <Dropdown label="Añadir hábito" orientation="vertical" trigger="click">
          <template #iconRight>
            <PlusIcon class="size-4" />
          </template>

          <ul class="py-1 flex flex-col gap-1">
            <li>
              <button @click="openCreateHabitModal" class="btn-transparent text-left pl-0">
                Crea un buen hábito
              </button>
            </li>
            <Modal ref="createHabitModalRef">
              <CreateHabitForm />
            </Modal>
            <li>
              <button @click="openBreakHabitModal" class="btn-transparent text-left pl-0">
                Romper un mal hábito
              </button>
            </li>
            <Modal ref="breakHabitModalRef">
              <BreakHabitForm />
            </Modal>
            <li>
              <Dropdown
                label="Log del humor"
                orientation="horizontal"
                trigger="hover"
                class="btn-transparent"
              >
                <template #iconRight>
                  <ChevronRightIcon class="size-4" />
                </template>
                <ul class="">
                  <li>Opción 1</li>
                  <li>Opción 2</li>
                  <li>Opción 3</li>
                </ul>
              </Dropdown>
            </li>
          </ul>
        </Dropdown>
      </li>
    </ul>
  </nav>
</template>
