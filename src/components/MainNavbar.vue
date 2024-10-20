<template>
  <div class="navbar">
    <div class="first">
      <router-link to="/">
        <img
          :src="currentImg"
          @mouseover="changeImageOnHover"
          @mouseout="resetImage"
          class="logo"
      />
    </router-link>
      <router-link to="/about"><p>Om oss</p></router-link>
      <router-link to="#"><p>Erbjudande</p></router-link>
      <router-link to="#"><p>Hur fungerar det</p></router-link>
    </div>
    <div class="second">
      <router-link to="#"><p>Partners</p></router-link>
      <router-link to="#"><p>Projekt</p></router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const originalImg = require('../assets/028a399e-aec3-4368-bc6e-2fc7207d884e-removebg-preview.png');
const hoverImg = require('../assets/testlogga.png');

const currentImg = ref(originalImg);

function changeImageOnHover() {
  currentImg.value = hoverImg;
}

function resetImage() {
  currentImg.value = originalImg;
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  background-color: white;
  border-radius: 50px;
  .logo {
    height: 50px;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    p {
      color: black;
      font-weight: 600;
    }
  }

}
.second{
  p{
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #ffbc4f;
    border-radius: 10px;
  }
  p:hover{
    background-color: #fe9d01;
  }
}
</style>
