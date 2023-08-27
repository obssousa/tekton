<script setup>
import { useStoryblokApi } from "@storyblok/vue";

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/", {
  version: "draft",
  starts_with: "projects",
});
const projects = data.stories;
const currentSlug = ref("");
const showModal = ref(false);

function showCurrentProject(full_slug) {
  currentSlug.value = full_slug;
  console.log(full_slug);
  showModal.value = true;
}

function closeModal() {
  currentSlug.value = "";
  showModal.value = false;
}
</script>

<template>
  <div id="projects" class="flex flex-col p-6 bg-transparent">
    <h2 class="font-semibold text-4xl text-primary-50">Confira o Portifolio</h2>
    <span class="font-medium text-xl text-primary-60">
      Tenha um vislumbre de como pode ficar seu projeto dos sonhos.</span
    >
    <div
      class="flex flex-row whitespace-nowrap no-scrollbar md:overflow-hidden overflow-x-scroll overflow-y-hidden md:relative h-full md:w-full md:flex-wrap py-6 gap-2 outline-none border-none"
    >
      <button
        v-for="project in projects"
        :key="project.full_slug"
        class="inline-block card min-h-full h-full min-w-[280px] bg-base-100 shadow-xl max-h-[280px] w-full max-w-[280px] hover:cursor-pointer md:hover:scale-110 hover:z-20 transition-all ease-in-out"
        @click="showCurrentProject(project.full_slug)"
      >
        <figure class="h-full w-full">
          <img
            class="h-full w-full opacity-100 object-cover"
            :src="project.content.thumbnail"
          />
        </figure>
      </button>
    </div>
  </div>
  <ProjectEntry
    v-if="showModal"
    :show="showModal"
    @close="closeModal"
    :slug="currentSlug"
  />
</template>
<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
