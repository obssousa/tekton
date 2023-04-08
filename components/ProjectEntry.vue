<script setup>
import { useRoute } from "vue-router";
import { useStoryblok } from "@storyblok/vue";

const route = useRoute();
const story = await useStoryblok(`projects/${route.params.slug}`, {
  version: "draft",
});

console.log(story.value);
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
