<template>
  <div class="offerMe">
    <div class="body">
      <div class="titel">
        <img src="../assets/offermewhitelogo.png" alt="OfferMe Logo white" />
      </div>

      <div class="row firstRow">
        <div
          class="imgElement"
          v-motion-pop-visible-once
          :duration="700"
          :delay="50"
        >
          <img
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div
          class="textSection"
          v-motion-pop-visible-once
          :duration="700"
          :delay="100"
        >
          <p class="infoText">
            OfferMe är tjänsten som revolutionerar hur offerter skapas. Med vår
            smarta och användarvänliga plattform kan kunder snabbt och enkelt få
            en skräddarsydd offert direkt efter att de har fyllt i alla
            nödvändiga uppgifter. Processen är enkel: Kunden anger detaljer om
            sitt behov genom vårt intuitiva gränssnitt, som guidar dem genom
            varje steg. När alla uppgifter är inskickade bearbetas informationen
            av vår avancerade algoritm som automatiskt sammanställer en offert
            som både är tydlig och professionell. Resultatet levereras
            omedelbart – ingen väntetid, inget krångel.
          </p>
          <div class="infoCards">
            <div class="infoCard">
              <p class="emoji">✅</p>
              <div class="cardText">
                <p>Snabbt och Smidigt</p>
                <p class="bigP">skräddarsydd offert</p>
              </div>
            </div>
            <div class="infoCard">
              <p class="emoji">✅</p>
              <div class="cardText">
                <p>Intuitiv Process</p>
                <p class="bigP">Enkel steg-för-steg vägledning</p>
              </div>
            </div>
          </div>
          <button class="button" href="#" v-scroll-to="'#offertFormDiv'">
            Testa redan idag!
          </button>
        </div>
      </div>
      <div class="row secondRow">
        <InfoTextSection />
      </div>
      <div class="ourTeamContainer">
        <OurTeam />
      </div>
      <QuestionsBanner />
      <div class="offertFormDiv" id="offertFormDiv">
        <div>
          <OffertForm />
        </div>
      </div>
    </div>
  </div>
  <!--
    <CompanyBanner />
    -->
</template>

<script setup>
//import CompanyBanner from "@/components/CompanyBanner.vue";
import InfoTextSection from "@/components/InfoTextSection.vue";
import OffertForm from "@/components/OffertForm.vue";
import OurTeam from "@/components/OurTeam.vue";
//import QuestionsBanner from "@/components/QuestionsBanner.vue";
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.offerMe {
  background-color: $background-color;

  .body {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
  .titel {
    width: 100%;
    display: flex;
    justify-content: center;
    img {
      width: 20%;
    }
  }

  .ourTeamContainer {
    padding: 50px 0;
    background-color: white;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    gap: 100px;

    .imgElement {
      max-width: 30%;

      img {
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 10px;
      }
    }
    .textSection {
      display: flex;
      flex-direction: column;
      width: 40%;
      justify-content: space-between;
      align-items: start;
      gap: 40px;
      height: 100%;
      .infoCards {
        display: flex;
        flex-direction: row;
        gap: 30px;

        .infoCard {
          justify-content: space-between;
          display: flex;
          flex-direction: column;
          background-color: white;
          color: black;
          width: 50%;
          border-radius: 10px;
          padding: 10px 10px;
          .emoji {
            font-size: xx-large;
            text-align: left;
          }

          p {
            color: darkgray;
          }
          .bigP {
            color: $orange;
            text-transform: uppercase;
            font-weight: 700;
          }
          img {
            width: 100%;
            aspect-ratio: 1 / 1;
            border-radius: 8px 8px 0px 0px;
          }
        }
      }

      .button {
        width: 30%;
        font-weight: 600;
      }

      p {
        width: 80%;
      }
      h2 {
        color: #fe9d01;
      }
    }
  }
  .firstRow {
    text-align: left;
    h2 {
      margin: 0;
    }
    p {
      width: 100%;
      font-size: 18px;
    }
  }
  .secondRow {
    background-color: #f7f9fa;
    color: black;
    padding: 75px 0px;
  }
}

.offertFormDiv {
  padding: 30px 0px;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .offerMe {
    .titel {
      img {
        width: 70%;
      }
    }
    .row {
      flex-direction: column-reverse;
      padding: 40px;
      .textSection {
        width: 100%;
        p {
          width: 90%;
        }
      }
      .imgElement {
        width: 100%;
        margin-top: 20px;
      }
    }
    .firstRow {
      padding: 20px;
      .imgElement {
        display: none;
      }
      .textSection {
        .infoText {
          width: 100%;
        }
        .button {
          width: 100%;
          padding: 20px 0px;
          background-color: $orange;
          color: white;
          align-self: center;
        }
        .infoCards {
          flex-direction: column;

          .infoCard {
            flex-direction: row;
            width: 100%;
            min-height: 150px;
            padding: 0px 15px;
            align-items: center;
            .emoji {
              font-size: 40px;

              width: 20%;
            }
            .cardText {
              width: 80%;
            }
          }
        }
      }
    }
    .secondRow {
      padding: 30px 20px;
      .textSection {
        .infoText {
          text-align: left;
        }
      }
      .animation {
        display: none;
      }
    }
    .kontakta {
      width: 80%;
    }
    .ourTeamContainer {
      width: 100%;
    }
  }
}
</style>
