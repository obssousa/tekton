<script setup lang="ts"></script>

<template>
  <div class="flex flex-col bg-primary-40 lg:p-6 w-full">
    <div class="flex flex-col max-w-screen-xl gap-3">
      <h1 class="font-semibold text-4xl text-white">Entre em contato!</h1>
      <span class="text-xl font-medium text-white"
        >Estou ao seu dispor em todo horario comercial. Estou presencialmente em
        Belém e Macapá, mas também atendo remotamente.</span
      >
      <form class="flex flex-row gap-6">
        <input
          type="text"
          placeholder="Nome"
          class="input w-full max-w-xs focus:outline-none focus:border-white border-2"
        />
        <input
          type="text"
          placeholder="Email"
          class="input w-full max-w-xs focus:outline-none focus:border-white border-2"
        />
        <input
          type="text"
          placeholder="Celular"
          class="input w-full max-w-xs focus:outline-none focus:border-white border-2"
        />
        <button type="submit" class="btn btn-primary">ENTRAR EM CONTATO</button>
      </form>
    </div>
  </div>
</template>
