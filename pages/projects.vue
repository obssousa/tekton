<script setup>
import { useStoryblokApi } from '@storyblok/vue';
// import Project from '../components/Project.vue';

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/', { version: 'draft', starts_with: 'projects' });
const projects = data.stories;

</script>

<template>
  <div>
    <Project v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>
