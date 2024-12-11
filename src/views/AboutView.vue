<template>
  <div class="about">
    <h1>Om Wolkano</h1>
    <div class="abInfo">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.    </p>
    <img src="../assets/it-guys.jpeg" alt="4-IT-killar"/>
  </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>

.about{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: 100%;
  background-color: #28a2ff;
  padding-bottom: 500px;

  h1{
    font-size: 48px;
    font-weight: bold;
    width: 100%;
  }

  .abInfo{
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: auto;
    width: 100%;

    p{
      font-size: 24px;
      text-align: left;
      width: 30%;
    }

    img{
      border-radius: 3px;
      width: 300px;
    }
  }

}

</style>
