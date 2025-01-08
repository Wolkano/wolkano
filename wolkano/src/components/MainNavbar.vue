<template>
  <div class="mainDiv">
    <div class="navbar">
      <div class="first flex items-center justify-center">
        <router-link to="/">
          <img
            :src="
              isLightBackground
                ? require('../assets/newLogo.png')
                : require('../assets/newLogoWhite.png')
            "
            class="logo"
          />
        </router-link>

        <!--
        <router-link class="item" to="/works" v-if="!isMobile">
          <p :class="{ blackText: isLightBackground }">Hur fungerar det</p>
        </router-link>
        -->
        <div class="dropdown">
          <span
            v-if="!isMobile"
            class="menu-link dropdown-toggle"
            :class="{ blackText: isLightBackground }"
          >
            Tjänster
            <!--&nbsp;
            <font-awesome-icon :icon="['fas', 'arrow-right']" />
            -->
          </span>

          <span v-else
            ><font-awesome-icon
              :class="{ blackText: isLightBackground }"
              :icon="['fas', 'bars']"
              @click="toggleMenu"
              size="2x"
          /></span>
          <ul class="dropdown-menu" :class="{ dropdownMenuOpen: isMenuOpen }">
            <router-link class="dropdown-item" to="/OfferMe">
              <p :class="{ blackText: isLightBackground }">
                OfferMe<br />
                <span v-if="!isMobile">Vår automatiserade offerttjänst</span>
              </p>
            </router-link>
            <router-link class="dropdown-item" to="/WebbUtv">
              <p :class="{ blackText: isLightBackground }">
                Webbutveckling<br />
                <span v-if="!isMobile"
                  >Skräddarsydda hemsidor för din framgång</span
                >
              </p>
            </router-link>
            <router-link class="dropdown-item" to="/works">
              <p :class="{ blackText: isLightBackground }">
                Hur Fungerar Det?<br />
                <span v-if="!isMobile"
                  >Så fungerar vår automatiserade offerttjänst</span
                >
                <!--CRM-system (Pilot)-->
              </p>
            </router-link>
            <router-link class="dropdown-item" v-if="isMobile" to="/about"
              ><p :class="{ blackText: isLightBackground }">
                Om oss
              </p></router-link
            >
            <router-link class="dropdown-item" v-if="isMobile" to="/form"
              ><p :class="{ blackText: isLightBackground }">
                Kontakta oss
              </p></router-link
            >
            <!--
            <router-link v-if="isMobile" class="dropdown-item" to="/works">
              <p :class="{ blackText: isLightBackground }">Hur fungerar det</p>
            </router-link>
            -->
          </ul>
        </div>
      </div>
      <div class="second flex items-center justify-center" v-if="!isMobile">
        <router-link class="item" to="/about"
          ><p :class="{ blackText: isLightBackground }">Om oss</p></router-link
        >
        <router-link class="item" to="/form"
          ><p :class="{ blackText: isLightBackground }">
            Kontakta oss
          </p></router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value < 768);
const isLightBackground = computed(
  () => route.path === "/about" || route.path === "/works"
);

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

.blackText {
  color: #031a4a !important;
}

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

      //&:hover .menu-link {color: $background-color;}
      //&:hover .blackText {color: #fff;}

      .menu-link {
        color: #fff;
        padding: 0.5rem 1rem;
        text-decoration: none;
        font-size: larger;
        //-webkit-transition: color 200ms linear;
        //-ms-transition: color 200ms linear;
        transition: color 100ms linear;
        font-weight: 600;
        transition: opacity 0.3s ease, transform 0.3s ease;
        opacity: 1;
        transform: scaleX(1);
        transform-origin: right;
      }
      &:hover .menu-link {
        opacity: 0;
        transform: scaleX(0);
      }

      /* On hover show dropdown menu */
      &:hover .dropdown-menu {
        opacity: 1;
        transform: scaleX(1);
      }
      .dropdownMenuOpen {
        opacity: 1;
        transform: scaleX(1);
      }
      .dropdown-menu {
        position: absolute;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        top: -60%;
        padding: 15px 20px;
        left: 0%;
        //background-color: #fff;
        list-style: none;
        margin: 0;
        width: max-content; // ändrat från 400pxs
        //box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        text-align: left;
        border-radius: 10px;
        transition: opacity 0.3s ease, transform 0.3s ease;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left;
      }

      .dropdown-item {
        p {
          display: block;
          padding: 0.5rem 1rem;
          //color: #333;
          text-decoration: none;
          font-size: larger;
          font-weight: 600;
          -webkit-transition: color 200ms linear;
          -ms-transition: color 200ms linear;
          transition: color 200ms linear;
          -webkit-transition: background-color 200ms linear;
          -ms-transition: background-color 200ms linear;
          transition: background-color 200ms linear;
          border-radius: 5px;

          //manges kod
          span {
            padding-top: 5px;
            padding-right: 5px;
            font-size: 14px;
            font-weight: 300;
            border-top: 2px solid #fe9d01;
          }

          &:hover {
            background-color: rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .blackText {
    color: black;
  }
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
