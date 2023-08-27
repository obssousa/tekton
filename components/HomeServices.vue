<script setup lang="ts">
const services = reactive([
  {
    title: "Serviço 1",
    features: ["Descrição 1", "Descrição 2", "Descrição 3", "Descrição 4"],
    image:
      "https://images.unsplash.com/photo-1617565817140-53081ee8f047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80",
  },
  {
    title: "Serviço 2",
    features: [
      "Descrição 1",
      "Descrição 2",
      "Descrição 3",
      "Descrição 4",
      "Descrição 5",
      "Descrição 6",
    ],
    image:
      "https://images.unsplash.com/photo-1617565817140-53081ee8f047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80",
  },
  {
    title: "Serviço 3",
    features: [
      "Descrição 1",
      "Descrição 2",
      "Descrição 3",
      "Descrição 4",
      "Descrição 5",
      "Descrição 6",
    ],
    image:
      "https://images.unsplash.com/photo-1617565817140-53081ee8f047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80",
  },
  {
    title: "Serviço 4",
    features: ["Descrição 1", "Descrição 2", "Descrição 3"],
    image:
      "https://images.unsplash.com/photo-1617565817140-53081ee8f047?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80",
  },
]);
</script>

<template>
  <div class="flex flex-col items-start p-4 lg:p-6 gap-12 bg-white">
    <div class="flex flex-col md:flex-row items-center justify-center gap-6">
      <div class="flex flex-col gap-6 w-full md:max-w-[600px]">
        <h1 class="font-bold text-4xl text-primary-50">
          Sua casa é o seu templo
        </h1>
        <span class="text-xl text-primary-60"
          >Passamos a maior parte de nossas vidas em casa, é onde encontramos
          conforto e acolhimento. Confira como nossos serviços podem deixar o
          seu canto com a sua cara e o seu estilo!</span
        >
      </div>
      <img
        class="w-full md:max-w-[500px]"
        src="~~/assets/undraw_urban_design_kpu8.svg"
      />
    </div>
    <div
      class="flex flex-row overflow-x-scroll md:overflow-hidden relative h-[527px] md:h-auto w-full"
    >
      <div class="flex flex-row gap-4 absolute md:relative h-full md:w-full">
        <div
          class="block card hover:-translate-y-2 transition ease-in-out delay-150 min-h-full w-96 bg-primary-30 shadow-xl rounded-none first:rounded-bl-[76px] last:rounded-tr-[76px]"
          v-for="service in services"
        >
          <figure>
            <img :src="service.image" alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {{ service.title }}
              <div class="badge badge-primary">NEW</div>
            </h2>
            <div class="flex flex-col">
              <li v-for="feature in service.features">
                {{ feature }}
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
