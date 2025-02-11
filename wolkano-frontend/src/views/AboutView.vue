<template>
  <div class="home">
    <div class="mainDiv">
      <div
        class="intro"
        v-motion-slide-visible-once-bottom
        :duration="1500"
        :delay="100"
      >
        <h1>{{ copy.title }}</h1>
        <p>
          {{ copy.description1 }}
        </p>
        <div class="buttons">
          <router-link to="/" class="button">Hem</router-link>
          <router-link to="/form" class="button">Kontakta oss</router-link>
        </div>
      </div>

      <div
        class="image"
        v-motion-slide-visible-once-bottom
        :duration="1500"
        :delay="500"
      >
        <img
          class="businessManImage"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Fem personer med laptops sitter vid ett bord och arbetar tillsammans"
        />
      </div>
    </div>
  </div>
  <div class="ourTeamContainer" style="display: none">
    <OurTeam />
  </div>
  <svg
    id="bluewave"
    style="transform: rotate(180deg); transition: 0.3s"
    viewBox="0 0 1440 270"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
        <stop stop-color="rgba(48, 206, 225, 1)" offset="0%"></stop>
        <stop stop-color="rgba(48, 206, 225, 1)" offset="100%"></stop>
      </linearGradient>
    </defs>
    <path
      style="transform: translate(0, 0px); opacity: 1"
      fill="url(#sw-gradient-0)"
      d="M0,108L48,103.5C96,99,192,90,288,108C384,126,480,171,576,162C672,153,768,90,864,85.5C960,81,1056,135,1152,153C1248,171,1344,153,1440,126C1536,99,1632,63,1728,58.5C1824,54,1920,81,2016,112.5C2112,144,2208,180,2304,193.5C2400,207,2496,198,2592,180C2688,162,2784,135,2880,126C2976,117,3072,126,3168,112.5C3264,99,3360,63,3456,54C3552,45,3648,63,3744,72C3840,81,3936,81,4032,85.5C4128,90,4224,99,4320,108C4416,117,4512,126,4608,117C4704,108,4800,81,4896,63C4992,45,5088,36,5184,36C5280,36,5376,45,5472,54C5568,63,5664,72,5760,72C5856,72,5952,63,6048,76.5C6144,90,6240,126,6336,126C6432,126,6528,90,6624,90C6720,90,6816,126,6864,144L6912,162L6912,270L6864,270C6816,270,6720,270,6624,270C6528,270,6432,270,6336,270C6240,270,6144,270,6048,270C5952,270,5856,270,5760,270C5664,270,5568,270,5472,270C5376,270,5280,270,5184,270C5088,270,4992,270,4896,270C4800,270,4704,270,4608,270C4512,270,4416,270,4320,270C4224,270,4128,270,4032,270C3936,270,3840,270,3744,270C3648,270,3552,270,3456,270C3360,270,3264,270,3168,270C3072,270,2976,270,2880,270C2784,270,2688,270,2592,270C2496,270,2400,270,2304,270C2208,270,2112,270,2016,270C1920,270,1824,270,1728,270C1632,270,1536,270,1440,270C1344,270,1248,270,1152,270C1056,270,960,270,864,270C768,270,672,270,576,270C480,270,384,270,288,270C192,270,96,270,48,270L0,270Z"
    ></path>
  </svg>
  <div class="secondDiv">
    <div>
      <div v-motion-slide-visible-once-bottom :duration="500" :delay="100">
        <p class="icon">✅</p>
        <h3>Inmatning av information</h3>
        <p>
          Kunden fyller i ett enkelt formulär online med detaljer om sina behov,
          inklusive specifikationer, kvantiteter och önskade tidsramar. Systemet
          samlar in all nödvändig information direkt från kunden.
        </p>
      </div>
      <div v-motion-slide-visible-once-bottom :duration="500" :delay="300">
        <p class="icon">🤖</p>
        <h3>Automatisk analys</h3>
        <p>
          Systemet analyserar den inskickade informationen med hjälp av
          förinställda parametrar och smarta algoritmer. Det identifierar
          matchande produkter, tjänster eller leverantörer och beräknar
          kostnader baserat på aktuella data.
        </p>
      </div>
      <div v-motion-slide-visible-once-bottom :duration="500" :delay="600">
        <p class="icon">📄</p>
        <h3>Skapande av offert</h3>
        <p>
          Offerten genereras automatiskt och kan anpassas med företagets
          logotyp, villkor och en personlig hälsning. Systemet säkerställer att
          allt är korrekt och ser professionellt ut.
        </p>
      </div>
      <div v-motion-slide-visible-once-bottom :duration="500" :delay="900">
        <p class="icon">📩</p>
        <h3>Uppföljning och spårning</h3>
        <p>
          Systemet håller reda på när kunden öppnar offerten och kan automatiskt
          skicka påminnelser om svar. Det ger dig full insyn i processen och
          hjälper dig att stänga affärer snabbare.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import OurTeam from "@/components/OurTeam.vue";

const store = useStore();
const copy = computed(() => store.state.copy.about);
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.home {
  background-color: $primary;
  padding-top: 150px;
  padding-bottom: 150px;
  .mainDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    color: $secondary;

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
          background-color: $detail;
          color: white;
          font-weight: 600;
          min-width: 100px;
          text-align: center;
          &:hover {
            background-color: $darkDetail;
          }
        }
      }
    }

    .image .businessManImage {
      width: 650px;
      height: auto;
      border-radius: 10px;
    }
  }
}
.ourTeamContainer {
  padding: 30px 0px;
}
#blueWave {
  margin-top: -5px;
  background-color: $secondary;
  path {
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
  }
}

.secondDiv {
  background-color: $secondary;
  padding-top: 0px;
  padding-bottom: 30px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px 0px;
    align-items: center;
    flex-wrap: wrap;
    width: 75%;
    gap: 20px;
    margin: auto;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      width: 40%;
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
    padding-top: 150px;
    padding-left: 20px;
    padding-right: 20px;

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
        display: none;
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
