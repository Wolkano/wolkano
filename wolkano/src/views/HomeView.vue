<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const copy = computed(() => store.state.copy.home);
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

      <div class="image">
        <img
          class="businessManImage"
          src="../assets/—Pngtree—happy corporate business professional one_13504468.png" />
      </div>
    </div>
  </div>
  <div class="secondDiv">
    <div>
      <div>
        <h3>Inmatning av information</h3>
        <p>
          Kunden fyller i ett enkelt formulär online med detaljer om sina behov,
          inklusive specifikationer, kvantiteter och önskade tidsramar. Systemet
          samlar in all nödvändig information direkt från kunden.
        </p>

        <h3>Automatisk analys</h3>
        <p>
          Systemet analyserar den inskickade informationen med hjälp av
          förinställda parametrar och smarta algoritmer. Det identifierar
          matchande produkter, tjänster eller leverantörer och beräknar
          kostnader baserat på aktuella data.
        </p>

        <h3>Skapande av offert</h3>
        <p>
          Offerten genereras automatiskt och kan anpassas med företagets
          logotyp, villkor och en personlig hälsning. Systemet säkerställer att
          allt är korrekt och ser professionellt ut.
        </p>

        <h3>Uppföljning och spårning</h3>
        <p>
          Systemet håller reda på när kunden öppnar offerten och kan automatiskt
          skicka påminnelser om svar. Det ger dig full insyn i processen och
          hjälper dig att stänga affärer snabbare.
        </p>
      </div>

      <img class="flowGif" src="../assets/Förnamn.gif" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.home {
  background: #{$gradient-background};
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

      h3 {
        color: #fe9d01;
        text-align: left;
        font-size: 1.5rem;
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
      div {
        width: 90%;
      }
    }

    h3 {
      font-size: $font-size-mobile-h3;
    }

    .flowGif {
      width: 100%;
    }
  }
}
</style>
