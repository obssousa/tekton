<template>
  <div class="relative flex flex-col justify-center items-center bg-white">
    <div class="backgroundAddress flex flex-col items-center w-full">
      <Header />
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
<style scoped>
.backgroundAddress {
  @apply bg-white;
}
.backgroundAddress::before {
  content: " ";
  @apply top-0 right-0 left-0 bottom-0 z-0 opacity-20 absolute bg-repeat bg-white;
  background: url("~~/assets/background.png");
  background-size: 25%;
}
</style>
