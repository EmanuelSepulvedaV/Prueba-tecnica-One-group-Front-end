<script setup></script>
<template>
  <section class="banner">
    <div class="banner__text">
      <p>Discover, Collect, sell, and create your own <span>NFTs</span></p>
      <div class="banner__text-btn">
        <button class="banner__text-discover">Discover Now</button>
        <button class="banner__text-art">Create your art</button>
      </div>
    </div>
    <img class="banner__img" src="../../img/Banner.jpeg" alt="" />
  </section>
</template>

<style lang="scss">
.banner {
  // width: 650px;
  min-width: 150px;
  height: 250px;
  position: relative;
  box-shadow: 5px 10px 10px 0px rgba(107, 107, 107, 0.75);
  border-radius: 20px;

  @include mediaResolucion(1024px, 80%);
  @include mediaResolucion(592px, 90%);


  &__text {
    @include columnCenter;
    gap: 20px;
    width: 50%;
    height: 100%;
    position: absolute;
    padding: 10px;
    @include mediaResolucion(459px, 70%);

    p {
      font-size: 25px;
      font-weight: 100;
      font-family: sans-serif;

      span {
        color: #254aae;
      }
    }
    &-art,
    &-discover {
      width: 110px;
      height: 35px;
      border: none;
      border-radius: 5px;
      font-weight: 600;
      cursor: pointer;
    }
    &-discover {
      background-color: #456cd8;
      color: #fff;
      margin-left: 15px;
    }
    &-btn {
      display: flex;
      gap: 10px;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
  p {
    color: #fff;
  }
}
</style>
