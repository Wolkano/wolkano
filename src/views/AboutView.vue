<template>
  <div class="about">
    <h1>Om <span class="cName">Wolkano</span></h1>
    <div class="abInfo">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <img src="../assets/it-guys.jpeg" alt="4-IT-killar" />
    </div>
    <div class="kButton">
      <router-link to="/test" class="button">Kontakta oss</router-link>
    </div>
    <div class="custBanner">
      <div class="customers">
        <img src="../assets/byggproffs.webp" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.about {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  background: #{$gradient-background};
  padding-bottom: 50px;

  .cName {
    color: #fe9d01;
    text-shadow: 0px 1px 1px rgb(0, 0, 0);
  }

  .abInfo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
    width: 100%;

    p {
      font-size: 24px;
      text-align: left;
      width: 30%;
    }

    img {
      border-radius: 3px;
      width: 300px;
    }
  }

  .kButton {
    .button {
      background-color: white;
      border-radius: 100px;
      color: black;
      padding: 10px 20px;
      transition: background-color 200ms linear;
      font-weight: 500;
      &:hover {
        background-color: rgb(231, 231, 231);
      }
    }
  }
  .custBanner {
    background-color: rgb(39, 39, 39);
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 50px;
    .customers {
      padding: 10px;
      width: 20%;
    }
  }
}
</style>
