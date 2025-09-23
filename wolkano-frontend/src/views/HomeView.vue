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

import { useHead } from "@vueuse/head";

useHead({
  title: "Hem - Wolkano",
  meta: [
    // Vanliga SEO-meta
    {
      name: "description",
      content:
        "Upptäck Wolkano – fullt utrustade hemside-byggare med enkel navigering, snygg design och snabb åtkomst till alla tjänster du behöver.",
    },
    {
      name: "keywords",
      content:
        "wolkano, hemside-byggare, landningssida, webbutveckling, e-tjänster",
    },

    { name: "author", content: "Wolkano" },

    // Open Graph (för Facebook, LinkedIn m.m.)
    { property: "og:title", content: "Hem - Wolkano" },
    {
      property: "og:description",
      content:
        "Upptäck Wolkano – fullt utrustade hemside-byggare med enkel navigering, snygg design och snabb åtkomst till alla tjänster du behöver.",
    },
    {
      property: "og:image",
      content: "https://wolkano.se/src/assets/wolkano-hq-logo.png",
    },
    { property: "og:url", content: "https://wolkano.se/" },
    { property: "og:type", content: "website" },

    // Twitter Cards
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Hem - Wolkano" },
    {
      name: "twitter:description",
      content:
        "Upptäck Wolkano – fullt utrustade hemside-byggare med enkel navigering, snygg design och snabb åtkomst till alla tjänster du behöver.",
    },
    {
      name: "twitter:image",
      content: "https://wolkano.se/src/assets/wolkano-hq-logo.png",
    },
  ],
});
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#f7f9fa"
        fill-opacity="1"
        d="M0,96L48,90.7C96,85,192,75,288,64C384,53,480,43,576,80C672,117,768,203,864,202.7C960,203,1056,117,1152,101.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
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

  .mainDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    flex-wrap: wrap;
    margin: auto;

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
          font-size: 24px;
          color: $detail;
          font-weight: 600;
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
  width: 100%;

  background-color: $primary;
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
