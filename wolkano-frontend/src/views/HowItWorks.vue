<template>
  <div class="home first">
    <!--<h1>Hur fungerar det</h1>-->
    <div class="mainDiv">
      <div
        class="intro"
        v-motion-slide-visible-once-left
        :duration="1500"
        :delay="100"
      >
        <h1>
          {{ copy.title }}
        </h1>
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
        v-motion-slide-visible-once-left
        :duration="1000"
        :delay="700"
      >
        <img
          class="businessManImage"
          src="../assets/vulkan.png"
          alt="3D-vulkan som spottar papper med text"
        />
      </div>
    </div>
  </div>
  <svg
    id="wave"
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
      d="M0,243L48,243C96,243,192,243,288,220.5C384,198,480,153,576,121.5C672,90,768,72,864,85.5C960,99,1056,144,1152,175.5C1248,207,1344,225,1440,193.5C1536,162,1632,81,1728,81C1824,81,1920,162,2016,189C2112,216,2208,189,2304,157.5C2400,126,2496,90,2592,94.5C2688,99,2784,144,2880,139.5C2976,135,3072,81,3168,49.5C3264,18,3360,9,3456,13.5C3552,18,3648,36,3744,63C3840,90,3936,126,4032,148.5C4128,171,4224,180,4320,175.5C4416,171,4512,153,4608,135C4704,117,4800,99,4896,81C4992,63,5088,45,5184,54C5280,63,5376,99,5472,103.5C5568,108,5664,81,5760,85.5C5856,90,5952,126,6048,139.5C6144,153,6240,144,6336,148.5C6432,153,6528,171,6624,166.5C6720,162,6816,135,6864,121.5L6912,108L6912,270L6864,270C6816,270,6720,270,6624,270C6528,270,6432,270,6336,270C6240,270,6144,270,6048,270C5952,270,5856,270,5760,270C5664,270,5568,270,5472,270C5376,270,5280,270,5184,270C5088,270,4992,270,4896,270C4800,270,4704,270,4608,270C4512,270,4416,270,4320,270C4224,270,4128,270,4032,270C3936,270,3840,270,3744,270C3648,270,3552,270,3456,270C3360,270,3264,270,3168,270C3072,270,2976,270,2880,270C2784,270,2688,270,2592,270C2496,270,2400,270,2304,270C2208,270,2112,270,2016,270C1920,270,1824,270,1728,270C1632,270,1536,270,1440,270C1344,270,1248,270,1152,270C1056,270,960,270,864,270C768,270,672,270,576,270C480,270,384,270,288,270C192,270,96,270,48,270L0,270Z"
    ></path>
  </svg>
  <div class="home">
    <div class="secondDiv">
      <div class="intro" v-motion-pop-visible-once :duration="700" :delay="100">
        <h3>Steg 1: Samla in rätt information</h3>
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
    <div class="mainDiv2">
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
    padding-bottom: 1px;
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
        color: $secondary;
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
  .mainDiv2 {
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
        color: $secondary;
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
    color: black;
    background: $secondary;
    padding: 100px 0px;
    .intro {
      text-align: left;
      max-width: 48rem;
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
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
        align-items: flex-start;
        h1 {
          margin: 0;
          padding: 0px;
        }
        p {
          font-size: 20px;
        }
      }

      .image .businessManImage {
        width: 100%;
        display: none;
      }
    }
    .mainDiv2 {
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
