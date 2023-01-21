<template>
    <div v-editable="articleContent" class="px-6">
      {{ project.content.title }}
      <img :src="project.content.thumbnail" />
      <div v-html="articleContent"></div>
    </div>
  </template>

<script setup>
import { computed } from 'vue';
import { renderRichText } from '@storyblok/vue';

const props = defineProps({ project: Object });
const articleContent = computed(() => renderRichText(props.project.content.description));

</script>
