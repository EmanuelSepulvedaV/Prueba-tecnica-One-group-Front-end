<script setup>
import { ref } from "vue";
import componentMenu from "./menu/menu.vue";
import componentHeader from "./header/header.vue";
import banner from "./banner/banner.vue";
import circleCard from "./circleCard/circleCard.vue";
import squareCard from "./squareCard/squareCard.vue";
import asideBlack from "./aside/aside.black.vue";
import asideWhite from "./aside/aside.white,.vue";

let searchOfHeader = ref("");

const search = ($event) => {
  searchOfHeader.value = $event;
};
</script>

<template>
  <section class="allpage">
    <div class="allpage__header">
      <componentHeader @onSearch="search($event)" />
    </div>

    <div class="allpage__container">
      <componentMenu class="allpage__container-menu" />
      <!-- <section class="allpage__dashboard"> -->
      <section class="allpage__dashboard-cards">
        <banner />
        <circleCard />
        <squareCard :search="searchOfHeader" />
      </section>
      <!-- </section> -->
      <div class="allpage__aside">
        <asideBlack />
        <asideWhite />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.allpage {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to top right, #e6d6d2, #cbe8eb);

  &__header {
    width: 90%;
    height: 70px;
    position: absolute;
    right: 0;
    z-index: 10;
    @media screen and (max-width: 1024px) {
      left: 0;
    }
  }
  &__container {
    display: flex;
    overflow: auto;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }
    &-menu {
      margin-left: 20px;
      @media screen and (max-width: 1024px) {
        margin-left: 0px;
      }
    }
  }
  &__dashboard {
    // width: 100vw;
    height: 100vh;
    margin-left: 30px;
    margin-top: 70px;

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
      width: 60%;
      margin-left: 150px;
      margin-top: 70px;
      @media screen and (max-width: 1024px) {
        @include flexColumn;
        width: 100%;
        margin-left: 0px;
      }
    }
  }
  &__aside {
    @include flexColumn;
    width: 40%;
    height: 100%;
    @media screen and (max-width: 1024px) {
      width: 90%;
      @include flexRow;
      margin-left: 100px;
      margin-bottom: 70px;
    }
    @media screen and (max-width: 760px) {
      width: 100%;

      flex-direction: column;
      margin-left: 0px;
    }
    @media screen and (max-width: 410px) {
    }
  }
}
</style>
