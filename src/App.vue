<template>
  <main>
    <TopBar />
    <router-view />
  </main>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import TopBar from '@/components/TopBar.vue'
</script>

<style>
  .flex-grow {
    flex-grow: 1;
  }
</style>
