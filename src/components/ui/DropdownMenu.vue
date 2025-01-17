<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface DropdownProps {
  label: string
  orientation: 'vertical' | 'horizontal'
  id?: string
  trigger?: 'click' | 'hover'
  class?: string
}

const props = withDefaults(defineProps<DropdownProps>(), {
  id: () => `dropdown-${Math.random().toString(36).substr(2, 9)}`,
  trigger: 'click',
  class: 'btn',
}) as Readonly<DropdownProps & { id: string }>

const isOpen = ref(false)
let timeoutId: number | null = null;

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (!target.closest(`#${props.id}`)) {
    isOpen.value = false
  }
}

// Manejo de hover
const onHoverEnter = () => {
  if (props.trigger === 'hover') {
    clearTimeout(timeoutId as number)
    isOpen.value = true
  }
}

const onHoverLeave = () => {
  if (props.trigger === 'hover') {
    timeoutId = setTimeout(() => {
      isOpen.value = false
    }, 500)
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<template>
  <div :id="id" class="relative inline-block text-left w-full"
       @mouseover="onHoverEnter"
       @mouseleave="onHoverLeave">
    <button
      type="button"
      class="flex items-center justify-between"
      :class="[props.class, {'btn-transparent': props.class === 'btn-transparent'}]"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      aria-controls="dropdownMenu-{{ id }}"
      @click="trigger === 'click' ? toggleDropdown() : null"
    >
      <div class="inline-flex gap-1">
        <span class="flex items-center justify-center">
          <slot name="iconLeft"></slot>
        </span>
        {{ label }}
      </div>

      <span class="ml-2 flex items-center justify-center">
        <slot name="iconRight"></slot>
      </span>
    </button>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute border border-gray-900 text-sm rounded-sm w-52 bg-slate-500 text-white font-semibold divide-y divide-black"
        role="menu"
        aria-orientation="vertical"
        :class="{
          'mt-2 ': props.orientation === 'vertical',
          'ml-2 left-full top-0': props.orientation === 'horizontal',
        }"
        :id="'dropdownMenu-' + id"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
