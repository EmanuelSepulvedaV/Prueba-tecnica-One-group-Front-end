<script setup>
import img1 from "../../img/1.webp";
import img2 from "../../img/2.webp";
import img3 from "../../img/3.jpg";
import img4 from "../../img/4.jpg";
import img5 from "../../img/5.webp";
import img6 from "../../img/6.jpeg";
import img7 from "../../img/7.jpeg";

const srcImg = [img1, img2, img3, img4, img5, img6, img7];
</script>

<template>
  <div class="CircleCards">
    <div class="CircleCards__tittle">
      <span>Trending Creators</span>
    </div>
    <div class="CircleCards__cards-container">
      <div class="CircleCards__cards" v-for="(item, index) of srcImg" :key="index">
        <img class="CircleCards__cards-img" :src="item" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.CircleCards {
  // width: 55%;
  width: fit-content;
  margin-top: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 1024px) {
  }

  &__tittle {
    p {
      font-family: sans-serif;
      font-weight: 700;
      color: #514f4f;
    }
  }
  &__cards {
    @include flexCenter();
    // height: 70px;
    padding: 5px;
    border-radius: 100%;
    outline: #dab0c8 solid;
 
    &-container {
      @include flexRow;
      // width: 100%;
      width: fit-content;
      gap: 30px;
      margin-top: 10px;
      @media screen and (max-width: 1024px) {
        gap: 20px;
        flex-wrap: wrap;
      }
    }
    &-img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 100%;
      cursor: pointer;
    //   @media screen and (max-width: 1024px) {
    //     width: 40px;
    //   height: 40px;
    // }

    }
  }
}
</style>
