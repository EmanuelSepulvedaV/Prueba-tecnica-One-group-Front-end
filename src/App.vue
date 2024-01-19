<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<template>
  <section class="mainApp">
    <router-view></router-view>
  </section>
</template>

<style lang="scss">
.mainApp {
  // width: 100vw;
  // height: 100vh;
  // overflow: hidden;
  margin: 0%;
  padding: 0%;
  
  &__buttons {
    display: flex;
      background: linear-gradient(to top right, #e6d6d2, #efeeee);
  }
}
</style>
