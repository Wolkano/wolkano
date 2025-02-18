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
          <span class="company_name">OfferMe</span> - Den smarta lösningen för
          effektiva och lönsammare offertförfrågningar. Optimera tiden, öka
          antal projekt och leverera en förstklassig kundupplevelse.
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
  <div class="waveContainer">
    <svg
      id="wave"
      style="transform: rotate(180deg); transition: 0.3s"
      viewBox="0 -1 1440 270"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stop-color="rgba(48, 206, 225, 1)" offset="0%"></stop>
          <stop stop-color="rgb(48, 229, 249, 1)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        stroke="none"
        style="transform: translate(0, 0px); opacity: 1"
        fill="url(#sw-gradient-0)"
        d="M0,54L48,58.5C96,63,192,72,288,94.5C384,117,480,153,576,148.5C672,144,768,99,864,108C960,117,1056,180,1152,189C1248,198,1344,153,1440,153C1536,153,1632,198,1728,193.5C1824,189,1920,135,2016,112.5C2112,90,2208,99,2304,90C2400,81,2496,54,2592,40.5C2688,27,2784,27,2880,49.5C2976,72,3072,117,3168,139.5C3264,162,3360,162,3456,135C3552,108,3648,54,3744,36C3840,18,3936,36,4032,63C4128,90,4224,126,4320,126C4416,126,4512,90,4608,85.5C4704,81,4800,108,4896,126C4992,144,5088,153,5184,139.5C5280,126,5376,90,5472,63C5568,36,5664,18,5760,22.5C5856,27,5952,54,6048,58.5C6144,63,6240,45,6336,31.5C6432,18,6528,9,6624,18C6720,27,6816,54,6864,67.5L6912,81L6912,270L6864,270C6816,270,6720,270,6624,270C6528,270,6432,270,6336,270C6240,270,6144,270,6048,270C5952,270,5856,270,5760,270C5664,270,5568,270,5472,270C5376,270,5280,270,5184,270C5088,270,4992,270,4896,270C4800,270,4704,270,4608,270C4512,270,4416,270,4320,270C4224,270,4128,270,4032,270C3936,270,3840,270,3744,270C3648,270,3552,270,3456,270C3360,270,3264,270,3168,270C3072,270,2976,270,2880,270C2784,270,2688,270,2592,270C2496,270,2400,270,2304,270C2208,270,2112,270,2016,270C1920,270,1824,270,1728,270C1632,270,1536,270,1440,270C1344,270,1248,270,1152,270C1056,270,960,270,864,270C768,270,672,270,576,270C480,270,384,270,288,270C192,270,96,270,48,270L0,270Z"
      ></path>
    </svg>
  </div>
  <div class="secondDiv">
    <div>
      <div>
        <div v-motion-slide-visible-once-bottom :duration="500" :delay="100">
          <p class="icon">1.</p>
          <!--✅-->
          <h3>Enkelt för kunden</h3>
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
          <p class="icon">2.</p>
          <!--🤖-->
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
          <p class="icon">3.</p>
          <!--📄-->
          <h3>Offerten skapas</h3>
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
          <p class="icon">4.</p>
          <!--📩-->
          <h3>Presentation & plastbesök</h3>
          <p>
            En preliminär offert presenteras för kunden inom 5 minuter.
            Samtidigt får kunden möjlighet att boka platsbesök och
            kontaktuppgifter till er. Med en prisbild hos kunden innan
            platsbesöket har ni större chans att landa kunden. Vilket ger färre
            onödiga körningar!
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
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
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
        gap: 20px;
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

.waveContainer {
  background-color: $secondary;
  #wave {
    path {
      filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
    }
  }
}

.secondDiv {
  background-color: $secondary;
  padding-bottom: 30px;
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
          color: $detail;
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
    height: 90vh;
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
