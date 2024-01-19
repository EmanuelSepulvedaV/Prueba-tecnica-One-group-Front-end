<script setup>
import { ref } from "vue";
import componentMenu from "./menu/menu.vue";
import componentHeader from "./header/header.vue";
import banner from "./banner/banner.vue";
import circleCard from "./circleCard/circleCard.vue";
import squareCard from "./squareCard/squareCard.vue";
let searchOfHeader = ref("");

const search = ($event) => {
  searchOfHeader.value = $event;
};
</script>

<template>
  <section class="allpage">
    <div class="allpage__container">
      <section class="allpage__dashboard">
        <componentMenu />
        <section class="allpage__dashboard-cards">
          <componentHeader @onSearch="search($event)" />
          <banner />
          <circleCard />
          <squareCard :search="searchOfHeader" />
        </section>
      </section>
    </div>
  </section>
</template>

<style lang="scss">
.allpage {
  display: flex;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top right, #e6d6d2, #cbe8eb);

  &__container {
    display: flex;
    overflow: auto;
    width: 100%;
    height: 100%;
  }
  &__dashboard {
    width: 100vw;
    height: 100vh;
    margin-left: 30px;
    @media screen and (max-width: 592px) {
      margin-left: 10px;
      margin-right: 10px;
    }

    @media screen and (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &-cards {
      margin-left: 100px;
      @media screen and (max-width: 1024px) {
        @include flexColumn;
        width: 100%;
        margin-left: 0px;
      }
    }
  }
}
</style>
