<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import OurServices from "@/components/OurServices.vue";

const store = useStore();
const copy = computed(() => store.state.copy.home);
const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value < 768);
</script>

<template>
  <div class="home">
    <div class="mainDiv">
      <div class="intro">
        <h1>{{ copy.title }}</h1>
        <p>
          {{ copy.description1 }}
          <span class="company_name">{{ copy.companyName }}</span
          >, {{ copy.description2 }}
        </p>
        <div class="buttons">
          <router-link to="/about" class="button">Om oss</router-link>
          <router-link to="/form" class="button">Kontakta oss</router-link>
        </div>
      </div>

      <div class="image" v-if="!isMobile">
        <img
          class="businessManImage"
          src="../assets/—Pngtree—happy corporate business professional one_13504468.png"
        />
      </div>
    </div>
  </div>
  <Transition name="fade" appear>
    <div class="secondDiv">
      <div>
        <div>
          <div v-motion-pop-visible-once :duration="700" :delay="100">
            <p class="icon">✅</p>
            <h3>Inmatning av information</h3>
            <p>
              Kunden fyller i ett enkelt formulär online med detaljer om sina
              behov, inklusive specifikationer, kvantiteter och önskade
              tidsramar. Systemet samlar in all nödvändig information direkt
              från kunden.
            </p>
          </div>
          <div v-motion-pop-visible-once :duration="700" :delay="100">
            <p class="icon">🤖</p>
            <h3>Automatisk analys</h3>
            <p>
              Systemet analyserar den inskickade informationen med hjälp av
              förinställda parametrar och smarta algoritmer. Det identifierar
              matchande produkter, tjänster eller leverantörer och beräknar
              kostnader baserat på aktuella data.
            </p>
          </div>
          <div v-motion-pop-visible-once :duration="700" :delay="100">
            <p class="icon">📄</p>
            <h3>Skapande av offert</h3>
            <p>
              Offerten genereras automatiskt och kan anpassas med företagets
              logotyp, villkor och en personlig hälsning. Systemet säkerställer
              att allt är korrekt och ser professionellt ut.
            </p>
          </div>
          <div v-motion-pop-visible-once :duration="700" :delay="100">
            <p class="icon">📩</p>
            <h3>Uppföljning och spårning</h3>
            <p>
              Systemet håller reda på när kunden öppnar offerten och kan
              automatiskt skicka påminnelser om svar. Det ger dig full insyn i
              processen och hjälper dig att stänga affärer snabbare.
            </p>
          </div>
        </div>
        <img class="flowGif" src="../assets/Förnamn.gif" />
      </div>
    </div>
  </Transition>
  <OurServices />
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.home {
  background: $background-color;
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
          color: #fe9d01;
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
      width: 800px;
      height: auto;
    }
  }
}

.secondDiv {
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px 0px;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      width: 30%;
      div {
        width: 100%;
        .icon {
          color: #fe9d01;
          margin-top: 20px;
          margin-bottom: 5px;
          font-size: xx-large;
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

    .flowGif {
      width: 30%;
      height: min-content;
      border-style: solid;
      border-width: 5px;
      border-color: #fe9d01;
      border-radius: 20px;
    }
  }
}

// Mobile styles for smaller screens
@media (max-width: 768px) {
  .home {
    height: 80vh;
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
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    div {
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      width: 100%;
      div {
        width: 100%;
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
