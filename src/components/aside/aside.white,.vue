<script setup>
const textActivity = [
  { tittle: "Ocean Abstract", img: "../../img/photo1705459959.jpeg", nickName: "@ytewchgvf", time: "Online 1h ago" },
  { tittle: "Serena Fernandez", img: "../../img/2.webp", nickName: "@uireyw", time: "Online 20h ago" },
  { tittle: "Eth Rewads", img: "../../img/2.webp", nickName: "@aiuqqwe", time: "Online 3h ago" },
];
</script>
<template>
  <div class="asideWhite">
    <div class="asideWhite__tittle">
      <p>Recent Activity</p>
      <button>Today</button>
    </div>
    <div class="asideWhite__cards" v-for="(item, index) of textActivity" :key="index">
      <div class="asideWhite__cards-activity">
        <div class="asideWhite__cards-container">
          <img src="../../img/photo1705459787.jpeg" alt="" />
          <div class="">
            <p>{{ item.tittle }}</p>
            <p class="asideWhite__cards-text">{{ item.nickName }}</p>
          </div>
        </div>
        <p class="asideWhite__cards-time"><i class="fa-solid fa-circle"></i> {{ item.time }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.asideWhite {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }

  &__tittle {
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 30px;
    margin-top: 20px;

    button {
      width: 60px;
      border: none;
      background-color: rgb(64, 55, 241);
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  &__cards {
    @include flexCenter;
    width: 100%;
    margin-top: 10px;

    &-activity {
      @include flexRow;
      justify-content: space-between;
      gap: 10px;
      width: 80%;
      background-color: #fff;
      height: 60px;
      border-radius: 10px;
      img {
        width: 40px;
        height: 40px;
        margin-left: 20px;
        border-radius: 20px;
        object-fit: cover;
      }
    }
    &-text {
      font-size: 12px;
      color: rgb(62, 183, 236);
    }
    &-container {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    &-time {
      font-size: 10px;
      margin-right: 10px;

      i {
        color: #00ff00;
        margin-right: 10px;
      }
    }
  }
}
</style>
