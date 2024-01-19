<script setup>
import { ref } from "vue";
import router from "@/routes";
import axios from "axios";
import Menu from "../menu/menu.vue";

const loading = ref(false);

const uploadVideo = () => {
  loading.value = true;
  const form = document.getElementById("videoForm");
  const formData = new FormData(form);

  axios
    .post("http://localhost:9000/api/v1/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      loading.value = false;
      router.push("/");
    })
    .catch((error) => {
      console.error("Error al subir el video:", error);
      loading.value = false;
    });
};
</script>

<template>
  <div class="viewVideos">
    <Menu class="viewVideos__menu" />
    <div class="viewVideos__container" v-if="!loading">
      <div class="viewVideos__container-test">
        <!-- upload videos  -->
        <div class="viewVideos__container-video">
          <!-- form for send video -->
          <form id="videoForm" class="viewVideos__container-form" @submit.prevent="uploadVideo()">
            <input type="text" name="name" placeholder="Nombre del Video" />
            <input type="file" id="videoFile" name="video" accept=".mp4" />
            <button type="submit">Subir Video</button>
            <i @click="$router.push('/')">Ver Video</i>
          </form>
        </div>
      </div>
    </div>
    <div class="spinnerLoading" v-if="loading">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<style lang="scss">
.viewVideos {
  display: flex;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top right, #e6d6d2, #cbe8eb);
  position: absolute;
  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
  &__menu {
    margin-left: 30px;
  }
  &__container {
    @include flexColumn;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-left: 120px;
    @media screen and (max-width: 1024px) {
      margin-left: 30px;
    }

    &-test {
      background-color: #fff;
      border-radius: 20px;
    }
    &-video {
      width: 100%;
      height: 100%;
    }

    &-form {
      @include flexColumn;
      width: 301px;
      height: 150px;
      padding: 10px;
      gap: 10px;
      margin: auto;
      border-radius: 20px;
      box-shadow: 5px 5px 5px 5px rgba(201, 199, 199, 0.75);

      input {
        width: 90%;
        height: 30px;
        border: none;
        border-radius: 5px;
        padding: 5px;
        background-color: #ffffff;
      }
      button {
        width: 100px;
        height: 40px;
        border-radius: 5px;
        border: none;
        background-color: $second-color;
        color: #fff;
      }
      i {
        cursor: pointer;
      }
    }
  }
}
</style>
