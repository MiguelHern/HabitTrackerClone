<script setup lang="ts">

import SidebarLayout from '@/components/layout/SidebarLayout.vue';

</script>

<template>
  <SidebarLayout/>
  <main class="sm:ml-64 flex h-screen bg-gray-500">
    <RouterView/>
  </main>

</template>
