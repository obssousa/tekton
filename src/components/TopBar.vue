<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    active-text-color="#616161"
    :ellipsis="false"
  >
    <el-menu-item index="0"> BRUNA S ARCHTEKON </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1" @click="goToRoute('/')"> Inicio </el-menu-item>
    <el-menu-item index="2" @click="goToRoute('/projects')">
      Portifolio
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const activeIndex = ref('1')
  const goToRoute = (route: string) => {
    router.push(route)
  }
</script>

<style>
  .flex-grow {
    flex-grow: 1;
  }
</style>
