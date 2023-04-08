<script setup>
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";
</script>
<template>
  <div class="flex flex-col justify-center items-center bg-gray-100">
    <div class="max-w-screen-xl w-full" direction="x">
      <Header />
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
