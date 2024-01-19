<script setup>
import axios from "axios";
import { ref, onMounted, reactive, watch } from "vue";
const props = defineProps(["search"]);
let auxVideoTotal = ref([]);
let searchText = ref("");
const videoBack = ref([]);
let videosload = ref([]);
let loading = ref(true);

const changeCards = () => {
  let coincidence = auxVideoTotal.value.filter((x) => x.name.includes(searchText.value));
  videoBack.value = coincidence;
};

watch(
  () => props.search,
  (first, second) => {
    searchText.value = props.search;
    changeCards();
  }
);

onMounted(async () => {
  axios
    .get("http://localhost:9000/api/v1/upload/getVideos")
    .then(async (response) => {
      videoBack.value = response.data.videos;
      for (let index = 0; index < videoBack.value?.length; index++) {
        await getVideo(videoBack.value[index]);
      }
      loading.value = false;
      auxVideoTotal.value = videoBack.value;
    })
    .catch((error) => {
      console.error("Error al obtener datos:", error);
    });
});

const deleteVideo = async (item) => {
  const response = await axios.delete("http://localhost:9000/api/v1/upload/deleteVideo?dir=" + item.linkvideo);
  if (response?.data?.success) {
    auxVideoTotal.value = auxVideoTotal.value.filter((e) => e.linkvideo != item.linkvideo);
    videoBack.value = auxVideoTotal.value;
  }
};

const getVideo = async (item) => {
  videosload.value.push("http://localhost:9000/api/v1/upload/getVideosMedia?linkvideo=" + item.linkvideo);
};

const newPage = (item) => {
  window.open("http://localhost:9000/api/v1/upload/getVideosMedia?linkvideo=" + item.linkvideo, "_blank");
};
</script>

<template>
  <div class="squareCard__container" v-if="!loading">
    <section class="squareCard" v-for="(item, index) of videoBack" :key="index">
      <video :poster="videosload[index]" class="squareCard__img" width="320" height="240" controls alt="Arte IA">
        <source :src="videosload[index]" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>

      <div class="squareCard__img-text">
        <div class="squareCard__description">
          <p class="squareCard__description-name">{{ item.name }}</p>
        </div>
      </div>
      <button class="squareCard__description-link" @click="newPage(item)">Ver Video</button>
      <button class="squareCard__description-delete" @click="deleteVideo(item)">Eliminar</button>
    </section>

    <button class="squareCard__container-btn" v-if="!videoBack.length" @click="$router.push('/sendandreceivevideos')">Sube un nuevo video</button>
  </div>
</template>

<style lang="scss">
.squareCard {
  @include flexColumn;
  width: 167px;
  height: 220px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  overflow: hidden;
  box-shadow: 5px 10px 5px 5px rgba(189, 188, 188, 0.75);
  @media screen and (max-width: 1024px) {
    width: 135px;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    width: fit-content;

    @media screen and (max-width: 592px) {
      justify-content: start;
      gap: 20px;
      height: 60%;

    }
    &-btn {
      @include flexCenter;
      width: 200px;
      height: 30px;
      background-color: $second-color;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      box-shadow: 5px 1px 5px 5px rgba(210, 210, 210, 0.75);
    }
  }
  &__img {
    width: 90%;
    min-width: 150px;
    height: 150px;
    min-height: 150px;
    border-radius: 10px;
    object-fit: cover;
  }
  &__description {
    width: 100%;
    height: 100%;
    margin-top: 10px;

    &-name {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 600;
      font-size: 13px;
      text-overflow: ellipsis;
    }
    &-link,   &-delete {
      border: none;
      margin-top: 5px;
      background-color: $second-color;
      color: #fff;
      width: 100px;
      height: 35px;
      border-radius: 5px;
      cursor: pointer;
    }
    &-delete {
      background-color: rgb(213, 36, 36);
    }
  }
}
</style>
