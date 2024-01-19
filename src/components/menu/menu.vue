<script setup>
import router from "@/routes";
import { ref } from "vue";
const optionsMenu = [{ icon: "fa-solid fa-house" }, { icon: "fa-solid fa-cloud" }];

let selectedIndex = ref(null);

const selectIcon = (index) => {
  selectedIndex.value = index;
  if (index == 1) router.push("/sendandreceivevideos");
  if (index == 0) router.push("/");
};
</script>

<template>
  <div class="viewMenu__wrapper">
    <div class="viewMenu__menu-container">
      <nav class="viewMenu__menu">
        <!-- btn profile -->
        <div class="viewMenu__menu-profile"><i class="fa-solid fa-p"></i></div>

        <!-- btn iconos -->
        <div class="viewMenu__menu-icon">
          <div
            class="viewMenu__menu-options"
            v-for="(item, index) of optionsMenu"
            :key="index"
            @click="selectIcon(index)"
            :class="selectedIndex == index ? 'viewMenu__menu-selected' : 'viewMenu__menu-options'"
          >
            <i :class="item.icon"></i>
          </div>
        </div>
      </nav>

      <!-- btn settings  -->
      <div class="viewMenu__menu-settings">
        <i class="fa-solid fa-gear"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.viewMenu {
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    height: 100vh;
    z-index: 10;
    position: absolute;
    box-shadow: 5px 10px 10px 0px rgba(107, 107, 107, 0.75);

    @media screen and (max-width: 1024px) {
      display: block;
      order: 10;
      position: fixed;
      bottom: 0px;
      width: 400px;
      height: 50px;
      margin-top: 10px;
    }
    @media screen and (max-width: 440px) {
      width: 100%;
      border-radius: 0px;
    }
  }

  &__menu {
    @include flexColumn;
    height: 90%;
    gap: 40px;

    @media screen and (max-width: 1024px) {
      flex-direction: row;
    }
    &-container {
      @include flexColumn;
      width: 70px;
      height: 98%;
      // margin-left: 20px;
      background-color: #fff;
      border-radius: 20px;
      @media screen and (max-width: 590px) {
        border-radius: 0px;
      }

      @media screen and (max-width: 1024px) {
        flex-direction: row;
        width: 100%;
        padding: 3px;
        border-radius: 10px;
        margin-left: 0px;
        padding-left: 10px;
        background-color: #000;
      }
    }
    &-profile {
      @include flexCenter;
      width: 50px;
      height: 50px;
      background-color: #000000;
      border-radius: 10px;
      margin-top: 20px;
      margin-bottom: 20px;
      cursor: pointer;
      color: #ffffff;

      @media screen and (max-width: 1024px) {
        width: 30px;
        height: 30px;
        margin-top: 0px;
        margin-bottom: 0px;
        border-radius: 5px;
      }
      @media screen and (max-width: 440px) {
        border-radius: 0px;
      }
    }

    &-icon {
      width: 100%;
      @include flexColumn;
      gap: 35px;
      font-size: 16px;
      @media screen and (max-width: 1024px) {
        flex-direction: row;
        gap: 60px;
      }
    }
    &-options,
    &-selected {
      @include flexCenter;
      width: 97%;
      height: 30px;
      cursor: pointer;
      color: #8d8989;
    }
    &-selected {
      border-right: rgb(100 168 239) solid;
    }
    &-settings {
      @include flexCenter;
      width: 100%;
      height: 50px;
      cursor: pointer;
      color: #8d8989;
    }
  }
}
</style>
