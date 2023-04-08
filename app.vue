<template>
  <div class="flex flex-col justify-center items-center bg-gray-100">
    <div class="flex flex-col items-center w-full">
      <Header />
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>
<style scoped>
.backgroundAddress {
  background: url("~~/assets/background.png");
  background-repeat: repeat;
}
</style>
