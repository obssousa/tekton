<script setup>
import { useStoryblok } from '@storyblok/vue';

const story = await useStoryblok('home', { version: 'draft' });

console.log(story.value);

</script>

<template>
  <diV class="bg-grey-200">
    <img
      src="https://images.unsplash.com/photo-1617565817140-53081ee8f047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80" />
  </diV>
</template>
