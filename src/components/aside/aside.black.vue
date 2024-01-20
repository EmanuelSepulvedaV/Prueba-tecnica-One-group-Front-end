<script setup></script>

<template>
  <aside class="asideBlack">
    <div class="asideBlack__card">
      <div class="asideBlack__card-banner">
        <img src="../../img/photo1705459959.jpeg" alt="" />
        <p>Astronaut</p>
      </div>

      <div class="asideBlack__options">
        <div class="asideBlack__options-percentages">
          <button class="asideBlack__options-player"><i class="fa-solid fa-circle"></i>100 Player</button>
          <button class="asideBlack__options-price"><i class="fa-solid fa-lightbulb"></i> ......... $500K</button>
        </div>
        <div class="asideBlack__options-render">
          <button class="asideBlack__options-btn">0.21</button>
          <button class="asideBlack__options-btn">$2m</button>
          <button class="asideBlack__options-btn">44x</button>
        </div>
        <div class="asideBlack__options-view">
          <button class="asideBlack__options-reward">View Reward</button>
          <button class="asideBlack__options-collection"> View Collection</button>
        </div>
      </div>
    </div>
  </aside>
</template>

<style lang="scss">
.asideBlack {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 70px;
  @media screen and (max-width: 1024px) {
    margin-top: 60px;
  }
  @media screen and (max-width: 760px) {
    margin-top: 10px;
  }
  @media screen and (max-width: 410px) {
    }

  &__card {
    @include flexColumn;
    width: 80%;
    height: 380px;
    background-color: #01091d;
    border-radius: 20px;
    box-shadow: 5px 10px 10px 0px rgba(107, 107, 107, 0.75);

    &-banner {
      width: 80%;
      margin-top: 20px;
      position: relative;

      img {
        width: 100%;
        max-height: 170px;
        min-height: 130px;
        border-radius: 10px;
        position: relative;
        object-fit: cover;
      }
      p {
        position: absolute;
        bottom: 20px;
        left: 10px;
        color: #cac5c5;
        font-size: 20px;
      }
    }
  }
  &__options {
    width: 80%;
    margin-top: 20px;
    @media screen and (max-width: 1024px) {
    }

    &-percentages {
      display: flex;
      width: 100%;
      height: 50px;
      gap: 10px;
    }
    &-player,
    &-price {
      width: 100px;
      border-radius: 10px;
      border: #113378 solid 1px;
      background-color: #01091d;
      color: #fff;
      font-size: 10px;
      font-weight: 900;
      cursor: pointer;
      min-width: 50px;

      i {
        color: #005cf4;
        margin-right: 5px;
      }
    }
    &-price {
      @include flexRow;
      justify-content: center;
      width: 60%;
      i {
        @include flexCenter;
        width: 30px;
        height: 30px;
        background-color: #0857f2;
        color: #fff;
        border-radius: 5px;
      }
    }
    &-render {
      @include flexRow;
      align-items: center;
      margin-top: 10px;
      gap: 10px;
    }
    &-btn {
      width: 100%;
      height: 40px;
      color: #0857f2;
      border: none;
      border-radius: 10px;
      font-size: 10px;
      font-weight: 900;
      background-color: rgb(10, 38, 70);
      cursor: pointer;
      min-width: 50px;
    }
    &-view {
      @include flexRow;
      margin-top: 10px;
      gap: 10px;
      height: 50px;
    }

    &-reward, &-collection {
      width: 50%;
      height: 40px;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
    }
    &-reward {
      background-color: rgb(59 49 255 / 63%);
      border: none ;
    }
    &-collection {
     
      background-color: #01091d;
      border: 1px #fff solid;

    }
  }
}
</style>
