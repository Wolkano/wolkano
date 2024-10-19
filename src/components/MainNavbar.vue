<template>
  <div class="navbar">
    <div class="first">
      <img
        src="../assets/028a399e-aec3-4368-bc6e-2fc7207d884e-removebg-preview.png"
        class="logo" />
      <p>Om oss</p>
      <p>Erbjudande</p>
      <p>Hur fungerar det</p>
    </div>
    <div class="second">
      <p>Partners</p>
      <p>Projekt</p>
    </div>
  </div>
</template>

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
    gap: 20px;
    p {
      color: black;
      font-weight: 600;
    }
  }
}
</style>
