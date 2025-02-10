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
      d="M0,0L21.8,13.3C43.6,27,87,53,131,55C174.5,57,218,33,262,31.7C305.5,30,349,50,393,61.7C436.4,73,480,77,524,70C567.3,63,611,47,655,48.3C698.2,50,742,70,785,65C829.1,60,873,30,916,30C960,30,1004,60,1047,75C1090.9,90,1135,90,1178,90C1221.8,90,1265,90,1309,81.7C1352.7,73,1396,57,1440,41.7C1483.6,27,1527,13,1571,16.7C1614.5,20,1658,40,1702,55C1745.5,70,1789,80,1833,75C1876.4,70,1920,50,1964,38.3C2007.3,27,2051,23,2095,23.3C2138.2,23,2182,27,2225,26.7C2269.1,27,2313,23,2356,28.3C2400,33,2444,47,2487,46.7C2530.9,47,2575,33,2618,23.3C2661.8,13,2705,7,2749,15C2792.7,23,2836,47,2880,51.7C2923.6,57,2967,43,3011,31.7C3054.5,20,3098,10,3120,5L3141.8,0L3141.8,100L3120,100C3098.2,100,3055,100,3011,100C2967.3,100,2924,100,2880,100C2836.4,100,2793,100,2749,100C2705.5,100,2662,100,2618,100C2574.5,100,2531,100,2487,100C2443.6,100,2400,100,2356,100C2312.7,100,2269,100,2225,100C2181.8,100,2138,100,2095,100C2050.9,100,2007,100,1964,100C1920,100,1876,100,1833,100C1789.1,100,1745,100,1702,100C1658.2,100,1615,100,1571,100C1527.3,100,1484,100,1440,100C1396.4,100,1353,100,1309,100C1265.5,100,1222,100,1178,100C1134.5,100,1091,100,1047,100C1003.6,100,960,100,916,100C872.7,100,829,100,785,100C741.8,100,698,100,655,100C610.9,100,567,100,524,100C480,100,436,100,393,100C349.1,100,305,100,262,100C218.2,100,175,100,131,100C87.3,100,44,100,22,100L0,100Z"
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
    padding: 0px 100px;
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
