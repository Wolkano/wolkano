<template>
  <div class="mainDiv">
    <div class="navbar">
      <div class="first flex items-center justify-center">
        <router-link to="/">
          <img
            src="../assets/wolkano-hq-logo.png"
            class="logo"
            alt="Wolkano HQ logga med 'Wolkano' i orange text på vit bakgrund och 'HQ' i vit text på orange bakgrund"
            v-if="!shouldHideLogo"
          />
        </router-link>

        <!--
        <router-link class="item" to="/works" v-if="!isMobile">
          <p :class="{ blackText: isFormView }">Hur fungerar det</p>
        </router-link>
        -->
        <div class="dropdown">
          <span
            v-if="!isMobile"
            class="menu-link"
            :class="{ blackText: isFormView }"
          >
            Tjänster
          </span>

          <span v-else
            ><font-awesome-icon
              :class="{ blackText: isFormView }"
              :icon="['fas', 'bars']"
              size="2x"
              @click="toggleMenu"
          /></span>
          <ul class="dropdown-menu" v-if="isMenuOpen">
            <router-link
              class="dropdown-item"
              to="/OfferMe"
              @click="toggleMenu"
            >
              <p :class="{ blackText: isFormView }">
                OfferMe<br />
                <span v-if="!isMobile">Vår automatiserade offerttjänst</span>
              </p>
            </router-link>

            <!--Fixas o sen display block-->
            <router-link
              style="display: none"
              class="dropdown-item"
              to="/WebbUtv"
              @click="toggleMenu"
            >
              <p :class="{ blackText: isFormView }">
                Webbutveckling<br />
                <span v-if="!isMobile"
                  >Skräddarsydda hemsidor för din framgång</span
                >
              </p>
            </router-link>

            <!--Fixas o sen display block-->
            <router-link
              style="display: none"
              class="dropdown-item"
              to="/crm"
              @click="toggleMenu"
              ><p :class="{ blackText: isFormView }">
                Vision Crm<br />
                <span v-if="!isMobile">Vårt egna Crm-system</span>
              </p>
            </router-link>

            <router-link class="dropdown-item" to="/works" @click="toggleMenu">
              <p :class="{ blackText: isFormView }">
                Hur Fungerar Det?<br />
                <span v-if="!isMobile"
                  >Så fungerar vår automatiserade offerttjänst</span
                >
              </p>
            </router-link>

            <router-link
              class="dropdown-item"
              v-if="isMobile"
              to="/about"
              @click="toggleMenu"
              ><p :class="{ blackText: isFormView }">Om oss</p></router-link
            >
            <router-link
              class="dropdown-item"
              v-if="isMobile"
              to="/form"
              @click="toggleMenu"
              ><p :class="{ blackText: isFormView }">
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
          ><p :class="{ blackText: isFormView }">Om oss</p></router-link
        >
        <router-link class="item" to="/form"
          ><p :class="{ blackText: isFormView }">Kontakta oss</p></router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isHomeView = computed(() => route.fullPath === "/");
const isFormView = computed(() => route.fullPath === "/form");
const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value < 768);

const isMenuOpen = ref(!isMobile.value);
const toggleMenu = () => {
  if (isMobile.value) {
    isMenuOpen.value = !isMenuOpen.value;
  } else {
    return;
  }
};
const shouldHideLogo = computed(() => isMobile.value && isHomeView.value);
</script>

<style scoped lang="scss">
@import "../assets/scss/variables.scss";

.blackText {
  color: black !important;
}

.mainDiv {
  z-index: 10;
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
        color: $detail !important;
      }
    }

    .router-link-exact-active {
      p {
        color: $detail !important;
      }
    }

    .dropdown {
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;

      .menu-link {
        color: #fff;
        padding: 0.5rem 1rem;
        text-decoration: none;
        font-size: larger;
        transition: color 100ms linear;
        font-weight: 600;
        transition: opacity 0.3s ease, transform 0.3s ease;
        opacity: 0;
        transform: scaleX(1);
        transform-origin: right;
      }
      &:hover .menu-link {
        opacity: 0;
        transform: scaleX(0);
      }

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
        justify-content: center;
        align-items: center;
        top: auto;
        padding: 15px 20px;
        left: 0%;
        list-style: none;
        margin: 0;
        width: max-content;
        z-index: 1000;
        text-align: left;
        border-radius: 10px;
        transition: opacity 0.3s ease, transform 0.3s ease;
        opacity: 1;
        transform: scaleX(1);
        transform-origin: left;
        gap: 10px;
      }

      .dropdown-item {
        p {
          display: block;
          padding: 0.5rem 1.5rem;
          text-decoration: none;
          font-size: larger;
          font-weight: 600;
          -webkit-transition: color 200ms linear;
          -ms-transition: color 200ms linear;
          transition: color 200ms linear;
          -webkit-transition: color 200ms linear, background-color 200ms linear;
          -ms-transition: color 200ms linear, background-color 200ms linear;
          transition: color 200ms linear, background-color 200ms linear;

          //manges kod
          span {
            padding-top: 3px;
            padding-right: 5px;
            font-size: 14px;
            font-weight: 300;
            border-top: 3px solid $detail;
          }

          &:hover {
            //background-color: rgba(0, 0, 0, 0.2);
            color: $detail !important;
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

        p {
          color: black;
        }
      }
      .dropdown {
        .dropdown-menu {
          background-color: white;
          top: 100%;
          flex-direction: column;
          width: max-content;
          left: auto;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
          padding-left: 0px;
          padding-right: 0px;
        }
      }
    }
  }
}
</style>
