<script setup>
import { useStoryblokApi } from "@storyblok/vue";
// import Project from '../components/Project.vue';

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/", {
  version: "draft",
  starts_with: "projects",
});
const projects = data.stories;
console.log(projects);
</script>

<template>
  <div class="flex flex-col p-6">
    <h2 class="font-semibold text-4xl text-primary-50">Confira o Portifolio</h2>
    <span class="font-medium text-xl text-primary-60">
      Tenha um vislumbre de como pode ficar seu projeto dos sonhos.</span
    >
    <div class="flex flex-row py-6 gap-2">
      <div
        class="card bg-base-100 shadow-xl image-full max-h-[300px] h-[300px] w-full max-w-[300px]"
        v-for="project in projects"
      >
        <figure>
          <img :src="project.content.thumbnail" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ project.name }}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  </div>
</template>
