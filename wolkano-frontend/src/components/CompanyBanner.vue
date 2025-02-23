<template>
  <div class="custBanner">
    <div class="customer">
      <a>
        <img src="../assets/BannerIMG/byggproffs.webp" />
      </a>
    </div>
    <div class="customer">
      <a>
        <img src="../assets/BannerIMG/SofleteLogo.png" />
        <img src="../assets/BannerIMG/SofleteName.png" />
      </a>
    </div>
    <div class="customer">
      <a>
        <img src="../assets/BannerIMG/stavab-logo.png" />
      </a>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.custBanner {
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 20vh;
  .customer {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      cursor: pointer;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 33%;
      height: fit-content;
      img {
        height: 70px;
        width: min-content;
      }
    }
  }
}
</style>
