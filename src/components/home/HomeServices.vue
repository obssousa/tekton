<template>
  <div class="container mx-auto content">
    <div class="description flex items-stretch">
      <div class="text">
        <h1>Serviços</h1>
        <h3>Lorem ipsu upsu ipsu sdmopanspnda</h3>
        <h5>POANMSDOPMAPOSMDPOAMSOPDMAPOSMDPOAMSDASD</h5>
      </div>
      <img class="illustration" :src="EiffelIllustration" />
    </div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 text="2xl" justify="center">
          {{ item }}
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import EiffelIllustration from '@/assets/images/home/undraw_eiffel_tower_re_e11r.svg'
</script>

<style lang="scss" scoped>
  .content {
    background-image: url('@/assets/images/home/pexels-vincent-ma-janssen-2886284.jpg');
    color: white;
    .description {
      .illustration {
        width: 200px;
      }
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>
