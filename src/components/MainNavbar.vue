<template>
  <div class="mainDiv">
    <div class="navbar">
      <div class="first flex items-center justify-center">
        <router-link to="/">
          <img src="../assets/newLogo.png" class="logo"
        /></router-link>
        <router-link class="item" to="/about"><p>Om oss</p></router-link>
        <router-link class="item" to="/form"><p>Kontakta oss</p></router-link>
        <router-link class="item" to="/something"
          ><p>Hur fungerar det</p></router-link
        >
      </div>
      <div class="second flex items-center justify-center">
        <router-link class="item" to="/testar"><p>Partners</p></router-link>
        <router-link class="item" to="/något"><p>Projekt</p></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mainDiv {
  width: 100%;

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    background-color: transparent;
    .logo {
      height: 50px;
    }
    div {
      display: flex;
      flex-direction: row;
      gap: 20px;
      p {
        color: white;
        font-weight: 600;
      }
    }
    .item {
      padding: 5px;
      font-size: larger;
      p {
        -webkit-transition: color 200ms linear;
        -ms-transition: color 200ms linear;
        transition: color 200ms linear;
      }
    }
    .item:hover {
      text-decoration: none;
      p {
        color: #fe9d01 !important;
      }
    }
    .router-link-exact-active {
      p {
        color: #fe9d01 !important;
      }
    }
  }
}
</style>
