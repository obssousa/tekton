<script setup lang="ts">
import VueQrcode from "@chenfengyuan/vue-qrcode";
import "vue3-instagram-feed/dist/style.css";
</script>

<template>
  <div class="flex flex-col bg-primary-40 w-full items-center z-10">
    <div class="flex flex-col max-w-[1200px] w-full lg:p-6 gap-3">
      <h1 class="font-semibold text-3xl text-white">Entre em contato!</h1>
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
<style scoped>
.qrcode {
  display: inline-block;
  font-size: 0;
  margin-bottom: 0;
  position: relative;
}

.qrcode__image {
  background-color: #fff;
  border: 0.25rem solid #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  height: 15%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 15%;
}
</style>
