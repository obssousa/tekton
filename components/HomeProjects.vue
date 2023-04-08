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
        class="card bg-base-100 shadow-xl max-h-[300px] h-[300px] w-full max-w-[300px] hover:cursor-pointer hover:scale-110 hover:z-20 transition-all ease-in-out"
        v-for="project in projects"
      >
        <figure class="h-full w-full">
          <img
            class="h-full w-full opacity-100 object-cover"
            :src="project.content.thumbnail"
            alt="Shoes"
          />
        </figure>
      </div>
    </div>
  </div>
</template>
