<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import OurServices from "@/components/OurServices.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isHomeView = computed(() => route.fullPath === "/");
const store = useStore();
const copy = computed(() => store.state.copy.home);
const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value < 768);
</script>

<template>
  <div class="home">
    <div class="mainDiv">
      <img
        src="../assets/wolkano-hq-logo.png"
        class="logo"
        alt="Wolkano HQ logga med 'Wolkano' i orange text på vit bakgrund och 'HQ' i vit text på orange bakgrund"
        v-if="isMobile && isHomeView"
      />
      <div class="intro">
        <h1 v-motion-slide-visible-once-left :duration="1500" :delay="100">
          {{ copy.title }}
        </h1>
        <p v-motion-slide-visible-once-bottom :duration="1000" :delay="700">
          {{ copy.description1 }}
          <span class="company_name">{{ copy.companyName }}</span
          >, {{ copy.description2 }}
        </p>
        <div
          class="buttons"
          v-motion-slide-visible-once-bottom
          :duration="1000"
          :delay="700"
        >
          <router-link to="/about" class="button">Om oss</router-link>
          <router-link to="/form" class="button">Kontakta oss</router-link>
        </div>
      </div>

      <div
        class="image"
        v-motion-slide-visible-once-right
        :duration="1500"
        :delay="100"
        v-if="!isMobile"
      >
        <img
          class="businessManImage"
          src="../assets/wolkano3d.png"
          alt="Svart vulkan med metalliska detaljer och röd lava som rinner ner för sidorna"
        />
      </div>
    </div>
  </div>
  <svg
    id="blueWave"
    style="transform: rotate(180deg); transition: 0.3s"
    viewBox="0 0 1440 100"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
        <stop stop-color="rgba(48, 206, 225, 1)" offset="0%"></stop>
        <stop stop-color="rgba(59.836, 234.05, 255, 1)" offset="100%"></stop>
      </linearGradient>
    </defs>
    <path
      style="transform: translate(0, 0px); opacity: 1"
      fill="url(#sw-gradient-1)"
      d="M0,20L26.7,18.3C53.3,17,107,13,160,21.7C213.3,30,267,50,320,58.3C373.3,67,427,63,480,56.7C533.3,50,587,40,640,33.3C693.3,27,747,23,800,30C853.3,37,907,53,960,51.7C1013.3,50,1067,30,1120,26.7C1173.3,23,1227,37,1280,48.3C1333.3,60,1387,70,1440,75C1493.3,80,1547,80,1600,71.7C1653.3,63,1707,47,1760,46.7C1813.3,47,1867,63,1920,70C1973.3,77,2027,73,2080,65C2133.3,57,2187,43,2240,43.3C2293.3,43,2347,57,2400,66.7C2453.3,77,2507,83,2560,71.7C2613.3,60,2667,30,2720,18.3C2773.3,7,2827,13,2880,18.3C2933.3,23,2987,27,3040,30C3093.3,33,3147,37,3200,41.7C3253.3,47,3307,53,3360,46.7C3413.3,40,3467,20,3520,23.3C3573.3,27,3627,53,3680,63.3C3733.3,73,3787,67,3813,63.3L3840,60L3840,100L3813.3,100C3786.7,100,3733,100,3680,100C3626.7,100,3573,100,3520,100C3466.7,100,3413,100,3360,100C3306.7,100,3253,100,3200,100C3146.7,100,3093,100,3040,100C2986.7,100,2933,100,2880,100C2826.7,100,2773,100,2720,100C2666.7,100,2613,100,2560,100C2506.7,100,2453,100,2400,100C2346.7,100,2293,100,2240,100C2186.7,100,2133,100,2080,100C2026.7,100,1973,100,1920,100C1866.7,100,1813,100,1760,100C1706.7,100,1653,100,1600,100C1546.7,100,1493,100,1440,100C1386.7,100,1333,100,1280,100C1226.7,100,1173,100,1120,100C1066.7,100,1013,100,960,100C906.7,100,853,100,800,100C746.7,100,693,100,640,100C586.7,100,533,100,480,100C426.7,100,373,100,320,100C266.7,100,213,100,160,100C106.7,100,53,100,27,100L0,100Z"
    ></path>
  </svg>
  <div class="secondDiv">
    <div>
      <div>
        <div v-motion-slide-visible-once-bottom :duration="500" :delay="100">
          <p class="icon">✅</p>
          <h3>Inmatning av information</h3>
          <p>
            Kunden fyller i ett enkelt formulär online med detaljer om sina
            behov, inklusive specifikationer, kvantiteter och önskade tidsramar.
            Systemet samlar in all nödvändig information direkt från kunden.
          </p>
        </div>
        <div
          v-motion-slide-visible-once-bottom
          :duration="500"
          :delay="isMobile ? 100 : 300"
        >
          <p class="icon">🤖</p>
          <h3>Automatisk analys</h3>
          <p>
            Systemet analyserar den inskickade informationen med hjälp av
            förinställda parametrar och smarta algoritmer. Det identifierar
            matchande produkter, tjänster eller leverantörer och beräknar
            kostnader baserat på aktuella data.
          </p>
        </div>
        <div
          v-motion-slide-visible-once-bottom
          :duration="500"
          :delay="isMobile ? 100 : 600"
        >
          <p class="icon">📄</p>
          <h3>Skapande av offert</h3>
          <p>
            Offerten genereras automatiskt och kan anpassas med företagets
            logotyp, villkor och en personlig hälsning. Systemet säkerställer
            att allt är korrekt och ser professionellt ut.
          </p>
        </div>
        <div
          v-motion-slide-visible-once-bottom
          :duration="500"
          :delay="isMobile ? 100 : 900"
        >
          <p class="icon">📩</p>
          <h3>Uppföljning och spårning</h3>
          <p>
            Systemet håller reda på när kunden öppnar offerten och kan
            automatiskt skicka påminnelser om svar. Det ger dig full insyn i
            processen och hjälper dig att stänga affärer snabbare.
          </p>
        </div>
      </div>
    </div>
  </div>
  <OurServices />
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.home {
  background: $primary;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .mainDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    flex-wrap: wrap;

    .intro {
      text-align: left;
      max-width: 48rem;
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      p {
        font-size: 24px;

        .company_name {
          color: $detail;
          font-weight: 800;
        }
      }

      .buttons {
        display: flex;
        gap: 50px;
        .button {
          font-weight: 600;
        }
      }
    }

    .image .businessManImage {
      width: 700px;
      height: auto;
    }
  }
}

#blueWave {
  margin-top: -10px;
  background-color: $secondary;
}

.secondDiv {
  background-color: $secondary;
  padding: 30px 0px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px 100px;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      div {
        width: 50%;
        .icon {
          color: #fe9d01;
          margin-bottom: 5px;
          font-size: xx-large;
          width: 100%;
        }

        h3 {
          font-weight: 700;
          color: $text-color;
          text-align: left;
        }
        p {
          color: black;
          text-align: left;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .home {
    height: 100vh;
    display: flex;
    padding: 0px 20px;
    .mainDiv {
      .intro {
        width: 100%;
        justify-content: center;
        h1 {
          font-size: $font-size-mobile-h1;
          margin-bottom: 0;
        }
        p {
          font-size: 20px;
        }
      }

      .image .businessManImage {
        width: 100%;
      }
    }
  }

  .secondDiv {
    width: 100%;
    padding: 0px 20px;
    margin-left: auto;
    margin-right: auto;
    div {
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      width: 100%;
      padding: 20px 0px;
      div {
        width: 100%;
        div {
          width: 100%;
        }
        .icon {
          align-self: center;
          margin-bottom: 30px;
        }
      }

      .flowGif {
        width: 100%;
      }
    }

    h3 {
      font-size: $font-size-mobile-h3;
    }
  }
}
</style>
