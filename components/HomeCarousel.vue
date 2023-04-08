<script setup lang="ts">
const currentStepIndex = ref<number>(0);

const steps = reactive([
  "Arquitetura Acessivel",
  "Nossos Projetos, Seu Jeito",
  "Quem somos?",
]);

const isCurrentStep = (index: number) => index === currentStepIndex.value;

const bgImages = reactive({
  first:
    "bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18951330532212884),rgba(0,0,0,0.4472163865546218)),url('https://images.unsplash.com/photo-1617565817140-53081ee8f047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80')]",
  second:
    "bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18951330532212884),rgba(0,0,0,0.4472163865546218)),url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80')]",
  third:
    "bg-cover bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18951330532212884),rgba(0,0,0,0.4472163865546218)),url('https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')]",
});
</script>

<template>
  <div class="relative">
    <div class="carousel w-full h-[600px] min-h-full rounded-b-3xl">
      <div id="item1" class="carousel-item w-full" :class="bgImages.first">
        <div class="mt-24 mx-6">
          <span>lorim ipsiu</span>
        </div>
      </div>
      <div id="item2" class="carousel-item w-full" :class="bgImages.second">
        <div class="mt-24 mx-6">
          <span>lorim ipsiu2</span>
        </div>
      </div>
      <div id="item3" class="carousel-item w-full" :class="bgImages.third">
        <div class="mt-24 mx-6">
          <span>lorim ipsiu3</span>
        </div>
      </div>
    </div>
    <ol
      class="absolute bottom-4 w-full py-2 gap-2 flex flex-row justify-around"
      type="1"
    >
      <li v-for="(step, index) in steps" class="w-full">
        <a
          :href="`#item${index + 1}`"
          @click="currentStepIndex = index"
          class="btn w-full border-0 border-b-2 rounded-none bg-transparent hover:bg-transparent hover:text-primary-60 hover:border-white"
          :class="{
            'border-primary-60 ': isCurrentStep(index),
            'border-white': !isCurrentStep(index),
          }"
        >
          {{ step }}
        </a>
      </li>
    </ol>
  </div>
</template>
