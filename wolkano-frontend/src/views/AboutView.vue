<template>
  <div class="home">
    <div class="mainDiv">
      <div class="intro">
        <h1>{{ copy.title }}</h1>
        <p>
          {{ copy.description1 }}
        </p>
        <div class="buttons">
          <router-link to="/" class="button">Hem</router-link>
          <router-link to="/form" class="button">Kontakta oss</router-link>
        </div>
      </div>

      <div class="image">
        <img
          class="businessManImage"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </div>
  </div>
  <div class="ourTeamContainer">
    <OurTeam />
  </div>
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

.secondDiv {
  background-color: $offWhite2;
  padding: 30px 0px;
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
