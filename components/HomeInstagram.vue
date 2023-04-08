<script setup lang="ts">
import VueQrcode from "@chenfengyuan/vue-qrcode";
</script>

<template>
  <div class="flex p-6 justify-center items-center gap-12 bg-neutral w-full">
    <div class="flex flex-col max-w-[1200px] gap-3">
      <h1 class="font-semibold text-4xl text-white">
        Me acompanhe no Instagram!
      </h1>
      <span class="text-xl font-medium text-white"
        >Confira meu trabalho realizado diariamente através das redes
        sociais.</span
      >
    </div>
    <figure class="qrcode">
      <VueQrcode
        class="rounded-xl"
        value="https://www.instagram.com/brunasousa.arq/"
        tag="svg"
        :options="{
          errorCorrectionLevel: 'Q',
          width: 200,
        }"
      />
      <img
        class="qrcode__image"
        src="~~/assets/instagram.png"
        alt="Bruno Sousa Arquitetura"
      />
    </figure>
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
