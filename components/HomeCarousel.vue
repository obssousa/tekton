<script setup lang="ts">
const currentStepIndex = ref<number>(0);

const steps = reactive([
  "Arquitetura Acessivel",
  "O Projeto Do Seu Jeito",
  "Quem sou?",
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
    <div class="carousel w-full h-[700px] min-h-full rounded-b-3xl">
      <div id="item1" class="carousel-item w-full" :class="bgImages.first">
        <div
          class="flex flex-col mt-24 mx-6 w-full items-center justify-center gap-6 text-gray-100"
        >
          <h2 class="font-bold text-5xl">
            Arquitetura acessivel e direto ao ponto
          </h2>
          <span class="font-medium text-2xl"
            >Todos podem ter uma casa bonita, tire seus sonhos da imaginação e
            os traga para pratica</span
          >
          <span class="font-medium text-xl"
            >Você não precisa de muito para começar!</span
          >
          <button class="btn btn-outline btn-wide">VEJA NOSSOS SERVIÇOS</button>
        </div>
      </div>
      <div id="item2" class="carousel-item w-full" :class="bgImages.second">
        <div
          class="flex flex-col mt-24 mx-6 w-full items-center justify-center gap-6 text-gray-100"
        >
          <h2 class="font-bold text-5xl">O projeto feito para você</h2>
          <span class="font-medium text-2xl"
            >No meu metodo o cliente é a prioridade.</span
          >
          <span class="font-medium text-xl"
            >Os projetos são adapatados para o contexto de cada um.</span
          >
        </div>
      </div>
      <div
        id="item3"
        class="carousel-item w-full flex flex-row items-center justify-center"
        :class="bgImages.third"
      >
        <div class="flex flex-row mt-24 mx-6 w-[1000px] gap-6 text-gray-100">
          <img
            class="w-[300px] h-[400px] object-cover rounded-br-[76px] rounded-tl-[76px]"
            src="~~/assets/profile.jpg"
          />
          <div class="flex flex-col mt-24 mx-6 w-full gap-3 text-gray-100">
            <h2 class="font-bold text-5xl">Quem sou eu?</h2>
            <span class="font-medium text-2xl"
              >Prazer, meu nome é Bruna, sua arquiteta.</span
            >
            <span class="font-medium text-xl"
              >Formada da Universidade Federal do Amapá. Sou especialista em
              decoração e design de interiores.</span
            >
          </div>
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
