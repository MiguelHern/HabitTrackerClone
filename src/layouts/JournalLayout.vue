<script setup lang="ts">
import HeaderLayout from '@/components/layout/HeaderLayout.vue';
import { RouterView } from 'vue-router';

</script>
<template>
  <section class="basis-1/2 bg-black">
    <HeaderLayout/>
    <RouterView/>
  </section>
  <section class="basis-1/2">
  </section>

</template>
