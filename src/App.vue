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
  margin: 0%;
  padding: 0%;

  &__buttons {
    display: flex;
    background: linear-gradient(to top right, #d9cac6, #efeeee);
  }
}
</style>
