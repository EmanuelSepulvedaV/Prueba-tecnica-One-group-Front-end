<script setup>
import { ref, onUnmounted, onMounted } from "vue";
const emits = defineEmits("onSearch");

const btnAccess = [{ name: "Ad items" }, { name: "Art" }, { name: "Sports" }, { name: "Gaming" }, { name: "Utily" }, { name: "Cards" }];
const selectedIndex = ref(null);

const selectIcon = (index) => {
  selectedIndex.value = index;
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});
const isGreaterThan1024 = ref(false);
const handleResize = () => {
  isGreaterThan1024.value = window.innerWidth >= 1024;
};
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const search = ref("");

const searchFunction = (index) => {
  busqueda.value = index;
};
</script>

<template>
  <section class="viewHeader">
    <!-- all btn header  -->
    <div class="viewHeader__buttons">
      <!-- btn search -->
      <div class="viewHeader__buttons-search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input v-model="search" class="viewHeader__buttons-input" type="text" @keyup="$emit('onSearch', search)" placeholder="Search" />
      </div>

      <!-- row btn access -->
      <div class="viewHeader__buttons-access" v-for="(item, index) of btnAccess" :key="index">
        <button
          v-if="isGreaterThan1024"
          @click="selectIcon(index)"
          :class="selectedIndex == index ? 'viewHeader__buttons-selected' : 'viewHeader__buttons-btn'"
          class="viewHeader__buttons-btn"
        >
          {{ item.name }}
        </button>
      </div>
    </div>

    <!-- notifications and profle  -->
    <div class="viewHeader__online">
      <div class="viewHeader__online-profile">
        <button class="viewHeader__online-notifications"><i class="fa-regular fa-bell"></i></button>
        <img class="viewHeader__online-img" src="../../img//photo1705464341.jpeg" alt="Foto de Perfil" />
        <div>
          <p>Adam Lee</p>
          <p>@adamlee</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.viewHeader {
  @include flexRow;
  width: 100%;
  height: 70px;

  z-index: 10;
  margin-top: 5px;
  margin-bottom: 5px;

  &__buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 15px;

    &-access {
      width: 100%;
    }
    &-btn,
    &-selected {
      width: 100%;
      height: 30px;
      border-radius: 5px;
      border: none;
      font-weight: 600;
      color: #646262;
      cursor: pointer;
      background-color: #fff;
    }
    &-selected {
      background-color: #151643;
      color: #fff;
    }
    &-search {
      display: flex;
      align-items: center;
      min-width: 35%;
      max-width: 350px;
      height: 25px;
      background-color: #fff;
      padding: 5px;
      border-radius: 5px;
      font-size: 13px;
      box-shadow: 5px 5px 5px 5px rgba(201, 199, 199, 0.75);
    }
    &-input {
      align-items: center;
      border: none;
      outline: none;
      padding-left: 5px;
      width: 100%;
      height: 25px;
      min-width: 100px;
    }
  }
  &__online {
    display: flex;
    justify-content: end;
    gap: 10px;
    width: 20%;
    height: 100%;
    padding-right: 20px;

    &-notifications {
      width: 30px;
      border: none;
      font-size: 20px;
      cursor: pointer;
      background-color: #cbe8eb;
    }
    &-img {
      width: 40px;
      height: 40px;
      object-fit: cover;
      border-radius: 100%;
    }
    &-profile {
      @include flexRow;
      justify-content: center;
      gap: 5px;
      width: 100%;

      p {
        font-size: 10px;
        font-weight: 900;
      }
    }
  }
}
</style>
