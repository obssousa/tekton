<script setup lang="ts">
import { useStoryblok } from "@storyblok/vue";
</script>

<template>
  <div class="flex flex-col w-full md:max-w-screen-xl bg-white z-10">
    <HomeCarousel id="about" />
    <HomeServices id="services" />
    <HomeProjects id="projects" />
  </div>
  <HomeInstagram class="z-10" id="contact" />
</template>
