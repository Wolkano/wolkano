<template>
  <div class="home first">
    <h1>Hur fungerar det</h1>
    <div class="mainDiv">
      <div class="intro">
        <h2>{{ copy.title }}</h2>
        <p>
          {{ copy.description1 }}
        </p>
        <div class="buttons">
          <router-link to="/" class="button">Hem</router-link>
          <router-link to="/form" class="button">Kontakta oss</router-link>
        </div>
      </div>

      <div class="image">
        <img class="businessManImage" src="../assets/vulkan.png" />
      </div>
    </div>
  </div>
  <div class="home">
    <div class="secondDiv">
      <div class="intro" v-motion-pop-visible-once :duration="700" :delay="100">
        <h2>Steg 1: Samla in rätt information</h2>
        <p>
          Börja med att fylla i eller importera den data som behövs för att
          skapa offerten. Vårt system integreras med dina befintliga verktyg och
          ser till att all relevant information om kunden, produkterna eller
          tjänsterna är lättillgänglig. Detta minskar risken för fel och gör
          processen smidigare.
        </p>
      </div>

      <div class="image" v-motion-pop-visible-once :duration="700" :delay="100">
        <p class="icon">🔍</p>
      </div>
    </div>
  </div>
  <div class="home">
    <div class="mainDiv">
      <div class="intro" v-motion-pop-visible-once :duration="700" :delay="100">
        <h2>Steg 2: Generera offerten automatiskt</h2>
        <p>
          När all data är på plats tar systemet över och räknar ut priser,
          rabatter och villkor baserat på dina förinställda regler. Inom några
          sekunder får du en professionellt utformad offert som är redo att
          skickas, anpassad efter kundens behov och dina krav.
        </p>
      </div>

      <div class="image" v-motion-pop-visible-once :duration="700" :delay="100">
        <p class="icon">⚙️</p>
      </div>
    </div>
  </div>
  <div class="home">
    <div class="secondDiv">
      <div class="intro" v-motion-pop-visible-once :duration="700" :delay="100">
        <h2>Steg 3: Skicka och följ upp</h2>
        <p>
          Med ett klick kan du skicka offerten direkt till kunden via e-post
          eller andra kanaler. Systemet hjälper dig dessutom att hålla koll på
          uppföljningar och påminnelser, så att du aldrig missar en chans att
          avsluta affären. Allt för att maximera din effektivitet och kundens
          nöjdhet!
        </p>
      </div>

      <div class="image" v-motion-pop-visible-once :duration="700" :delay="100">
        <p class="icon">📤</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const copy = computed(() => store.state.copy.works);
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

@keyframes spinAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.first {
  padding-top: 150px;
}

.home {
  background-color: $primary;
  h1 {
    color: white;
  }

  .mainDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    color: white;
    padding: 100px 0px;

    .image {
      img {
        border-radius: 10px;
      }
    }

    .intro {
      text-align: left;
      max-width: 48rem;
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      h2 {
        color: $detail;
      }

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

    .icon {
      width: 650px;
      height: auto;
      border-radius: 10px;
      font-size: 100px;
      display: inline-block; /* Necessary for animations */
      animation: spinAnimation 4s linear infinite;
    }
  }
  .secondDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    flex-wrap: wrap;
    flex-direction: row;
    color: white;
    background: $primary;
    padding: 100px 0px;
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
          background-color: #fe9d01;
          color: white;
          font-weight: 600;
          min-width: 100px;
          text-align: center;
        }
      }
    }

    .icon {
      width: 650px;
      height: auto;
      border-radius: 10px;
      font-size: 100px;
    }
  }
}

@media (max-width: 768px) {
  .home {
    h1 {
      padding-left: 20px;
      padding-right: 20px;
      text-align: left;
    }
    .mainDiv {
      padding-left: 20px;
      padding-right: 20px;
      .intro {
        width: 100%;
        justify-content: center;
        h2 {
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
    .secondDiv {
      padding-left: 20px;
      padding-right: 20px;
      .intro {
        width: 100%;
        justify-content: center;
        h1 {
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
}
</style>
