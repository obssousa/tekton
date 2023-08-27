<script setup lang="ts">
import VueQrcode from "@chenfengyuan/vue-qrcode";
import "vue3-instagram-feed/dist/style.css";
</script>

<template>
  <div
    class="flex flex-col md:flex-row p-6 bg-primary-40 gap-10 w-full lg:py-16 items-center justify-center z-10 md:max-w-screen-xl"
  >
    <div class="flex flex-col max-w-[700px] w-full lg:p-6 gap-4">
      <h1 class="font-semibold text-3xl text-white">Que tal bater um papo?</h1>
      <span class="text-xl font-medium text-white"
        >Estou ao seu dispor em todo horario comercial. Estou presencialmente em
        Belém e Macapá, mas também atendo remotamente.</span
      >
      <a
        href="https://wa.me/5596981148076?text=Ol%C3%A1%2C%20quero%20conversar%20sobre%20seus%20servi%C3%A7os%20de%20arquitetura."
        target="_blank"
        class="text-white btn self-center border-none bg-green-600 hover:scale-105 w-[250px] hover:bg-green-500 transition-all"
      >
        Entrar em Contato
        <img class="pl-3 h-5" src="~~/assets/whatsapp.png" />
      </a>
      <span class="text-xl font-medium text-white"
        >Ou se preferir entre em contato através do email:
        <a href="mailto:arq.brunassousa@gmail.com" class="link">
          arq.brunassousa@gmail.com
        </a></span
      >
    </div>
    <img class="w-[400px]" src="~~/assets/undraw_interview_re_e5jn.svg" />
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
