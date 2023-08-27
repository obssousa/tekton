<script setup>
import { useStoryblokApi } from "@storyblok/vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
import { component as Viewer } from "v-viewer";
import "viewerjs/dist/viewer.css";

const emit = defineEmits(["close"]);

const props = defineProps({
  slug: String,
  show: Boolean,
});

const story = ref({
  name: undefined,
});
const images = ref([]);

onMounted(async () => {
  const storyblokApi = useStoryblokApi();
  await storyblokApi
    .get(`cdn/stories/${props.slug}`, {
      version: "draft",
    })
    .then((response) => {
      story.value = response.data.story;
      images.value = story.value.content.images.map((image) => image.filename);
    })
    .catch((error) => {
      throw new Error(error);
    });
});
</script>

<template>
  <Dialog :open="show" @close="emit('close')" class="relative z-50">
    <!-- The backdrop, rendered as a fixed sibling to the panel container -->
    <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

    <!-- Full-screen container to center the panel -->
    <div class="xl:flex justify-center fixed inset-0 overflow-y-auto">
      <div
        class="flex min-h-full items-center justify-center p-4 xl:max-w-screen-xl w-full"
      >
        <!-- The actual dialog panel -->
        <DialogPanel
          class="overflow-x-hidden min-w-full min-h-[calc(100vh_-_35px)] rounded bg-white h-full"
        >
          <DialogTitle
            class="flex items-center p-4 font-bold text-2xl text-primary-50"
            ><Transition v-if="story.name">
              <span>{{ story.name }}</span>
            </Transition>
            <div v-else class="flex h-full items-center animate-pulse">
              <div
                class="h-5 bg-gray-50 rounded-full dark:bg-gray-300 w-48 mb-4"
              ></div>
            </div>
            <hr class="border-none flex-grow" />
            <button
              class="md:hover:bg-primary-95 rounded-xl"
              @click="emit('close')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </DialogTitle>
          <DialogDescription>
            <div
              class="flex flex-row flex-wrap gap-4 justify-center animate-pulse"
              v-if="images.length <= 0"
            >
              <div
                v-for="image in 9"
                class="flex items-center justify-center w-full h-48 bg-gray-50 rounded sm:w-96 dark:bg-gray-300"
              >
                <svg
                  class="w-12 h-12 text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path
                    d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"
                  />
                </svg>
              </div>
            </div>
            <Transition>
              <Viewer
                v-if="images.length > 0"
                :images="[...images, ...images, ...images]"
                class="viewer transition-opacity ease-in duration-700 opacity-100 max-w-[1248px] overflow-scroll"
                ref="viewer"
              >
                <template #default="scope">
                  <div class="flex flex-wrap flex-start gap-4 w-[1248px]">
                    <img
                      v-for="src in scope.images"
                      class="max-w-[300px] max-h-[300px] h-[300px] w-full object-cover"
                      :src="src"
                      :key="src"
                    />
                  </div>
                  {{ scope.options }}
                </template>
              </Viewer>
            </Transition>
          </DialogDescription>
          <!-- ... -->
        </DialogPanel>
      </div>
    </div>
  </Dialog>
</template>
<style lang="postcss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
