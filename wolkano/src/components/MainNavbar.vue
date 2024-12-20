<template>
  <div class="mainDiv">
    <div class="navbar">
      <div class="first flex items-center justify-center">
        <router-link to="/">
          <img src="../assets/newLogoWhite.png" class="logo" />
        </router-link>

        <router-link class="item" to="/works" v-if="!isMobile">
          <p>Hur fungerar det</p>
        </router-link>
        <div class="dropdown">
          <span v-if="!isMobile" class="menu-link dropdown-toggle">
            Tjänster
          </span>
          <span v-else
            ><font-awesome-icon :icon="['fas', 'bars']" size="2x"
          /></span>
          <ul class="dropdown-menu">
            <router-link class="dropdown-item" to="/OfferMe">
              <p>OfferMe</p>
            </router-link>
            <router-link class="dropdown-item" to="/WebbUtv">
              <p>Webbutveckling</p>
            </router-link>
            <router-link class="dropdown-item" to="/works">
              <p>CRM-system (Pilot)</p>
            </router-link>
            <router-link class="dropdown-item" v-if="isMobile" to="/about"
              ><p>Om oss</p></router-link
            >
            <router-link class="dropdown-item" v-if="isMobile" to="/form"
              ><p>Kontakta oss</p></router-link
            >
            <router-link v-if="isMobile" class="dropdown-item" to="/works">
              <p>Hur fungerar det</p>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="second flex items-center justify-center" v-if="!isMobile">
        <router-link class="item" to="/about"><p>Om oss</p></router-link>
        <router-link class="item" to="/form"><p>Kontakta oss</p></router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value < 768);
</script>

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
      max-height: 50px;
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

    .dropdown {
      position: relative;
      cursor: pointer;

      .menu-link {
        color: #fff;
        padding: 0.5rem 1rem;
        text-decoration: none;
        font-size: larger;
        -webkit-transition: color 200ms linear;
        -ms-transition: color 200ms linear;
        transition: color 200ms linear;
        font-weight: 600;

        &:hover {
          color: #fe9d01;
        }
      }

      /* On hover show dropdown menu */
      &:hover .dropdown-menu {
        opacity: 1;
        transform: scaleY(1);
      }

      .dropdown-menu {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        top: 100%;
        padding: 15px 20px;
        left: 0;
        background-color: #fff;
        list-style: none;
        margin: 0;
        width: 400px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        text-align: left;
        border-radius: 10px;
        transition: opacity 0.3s ease, transform 0.3s ease;
        opacity: 0;
        transform: scaleY(0);
        transform-origin: top;
      }

      .dropdown-item {
        p {
          display: block;
          padding: 0.5rem 1rem;
          color: #333;
          text-decoration: none;
          font-size: larger;
          font-weight: 600;
          -webkit-transition: color 200ms linear;
          -ms-transition: color 200ms linear;
          transition: color 200ms linear;
          -webkit-transition: background-color 200ms linear;
          -ms-transition: background-color 200ms linear;
          transition: background-color 200ms linear;

          &:hover {
            background-color: #f0f0f0;
            color: #fe9d01;
            border-radius: 5px;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .mainDiv {
    width: 100%;
    .navbar {
      margin-top: 30px;
      justify-content: space-between;
      width: 100%;
      padding: 0px 20px;
      margin-left: 0;
      margin-right: 0;
      div {
        width: 100%;
        justify-content: flex-end;
      }
      .dropdown {
        .dropdown-menu {
          width: 220px;
          left: auto;
        }
      }
    }
  }
}
</style>
