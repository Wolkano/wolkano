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
            src="https://images.unsplash.com/photo-1719937050445-098888c0625e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              <!-- <img
                src="https://plus.unsplash.com/premium_photo-1678871480887-e71988d52031?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmZXJ8ZW58MHx8MHx8fDA%3D"
                alt=""
              /> -->
              <p class="emoji">✅</p>
              <div class="cardText">
                <p>Snabbt och Smidigt</p>
                <p class="bigP">skräddarsydd offert</p>
              </div>
            </div>
            <div class="infoCard">
              <!-- <img
                src="https://plus.unsplash.com/premium_photo-1678871480887-e71988d52031?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmZXJ8ZW58MHx8MHx8fDA%3D"
                alt=""
              /> -->
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
        <div class="infoTextSection">
          <div class="infoText">
            <div
              v-motion-slide-visible-once-bottom
              :duration="500"
              :delay="100"
            >
              <p class="emoji">⚡️</p>
              <h3>Snabbhet och effektivitet</h3>
              <p>
                Med OfferMe får dina kunder en professionell offert på några
                sekunder. Vår automatiserade process eliminerar väntetider och
                säkerställer att du alltid ligger steget före.
              </p>
            </div>

            <div
              v-motion-slide-visible-once-bottom
              :duration="500"
              :delay="300"
            >
              <p class="emoji">🧩</p>
              <h3>Skräddarsydda lösningar</h3>
              <p>
                Varje offert anpassas efter kundens specifika behov, vilket ökar
                chanserna att du vinner affären.
              </p>
            </div>
            <div
              v-motion-slide-visible-once-bottom
              :duration="500"
              :delay="500"
            >
              <p class="emoji">🛠️</p>
              <h3>Tid för det som är viktigast</h3>
              <p>
                Genom att automatisera offertprocessen kan du fokusera mer på
                din kärnverksamhet och mindre på administration.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="ourTeamContainer">
        <div>
          <OurTeam />
        </div>
      </div>

      <div
        class="row thirdRow"
        v-motion-pop-visible-once
        :duration="700"
        :delay="50"
      >
        <h2>Har du frågor eller funderingar?</h2>
        <div class="questionsContainer">
          <div class="knappar">
            <div class="knappDiv">
              <p>Se hur den automatiserade offertjänsten fungerar</p>
              <router-link to="/works" class="button"
                >Hur Fungerar det?</router-link
              >
            </div>
            <div class="knappDiv">
              <p>
                Vi på OfferMe finns här för att hjälpa dig - tveka inte att
                kontakta oss!
              </p>
              <div class="button">
                <router-link to="/form" class="button"
                  >Kontakta oss</router-link
                >
              </div>
            </div>
          </div>
          <div class="killarImageDiv">
            <img class="killarImage" src="../assets/4killar.jpeg" />
          </div>
        </div>
      </div>
      <div class="offertFormDiv" id="offertFormDiv">
        <div v-motion-pop-visible-once :duration="700" :delay="50">
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
import OffertForm from "@/components/OffertForm.vue";
import OurTeam from "@/components/OurTeam.vue";
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

    .infoTextSection {
      width: 90%;
      .infoText {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
        gap: 50px;
        flex-wrap: wrap;

        div {
          display: flex;
          flex-direction: column;
          text-align: left;
          width: 25%;
          .emoji {
            font-size: 50px;
          }
          p {
            font-size: 18px;
          }
        }

        h3 {
          font-weight: 600;
        }
        p {
          margin-bottom: 20px;
        }
      }
    }
  }
  .thirdRow {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-left: 20px;
    padding-right: 20px;
    .questionsContainer {
      display: flex;
      flex-direction: row;
      gap: 50px;
      justify-content: center;
      align-items: center;
    }
    .killarImageDiv {
      height: 300px;
      .killarImage {
        width: 600px;
        border-radius: 10px;
        height: 100%; /* Image height as a percentage of the container */
        object-fit: cover; /* This ensures the image fills the container, maintaining its aspect ratio */
      }
    }

    h2 {
      width: 100%;
      padding-bottom: 30px;
    }
    .button {
      font-weight: 600;
      width: fit-content;
    }
    .knappar {
      display: flex;
      flex-direction: column;
      gap: 40px;
      width: 50%;
      .knappDiv {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        gap: 20px;
        p {
          font-weight: 600;
        }
      }
    }
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

      .infoTextSection {
        width: 100%;
        .infoText {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;

          div {
            width: 100%;
          }
        }
      }
    }
    .kontakta {
      width: 80%;
    }
    .ourTeamContainer {
      width: 100%;
    }
    .thirdRow {
      flex-direction: column;
      gap: 30px;
      padding: 20px 30px;
      h2 {
        padding: 0;
        margin: 0;
      }
      .questionsContainer {
        flex-direction: column;
        gap: 30px;
        text-align: left;
        p {
          font-size: 20px;
        }
        .knappar {
          width: 100%;
          .knappDiv {
            align-items: start;
          }
        }
      }
      .killarImageDiv {
        height: 150px;
        .killarImage {
          width: 600px;
          border-radius: 10px;
          height: 100%; /* Image height as a percentage of the container */
          object-fit: cover; /* This ensures the image fills the container, maintaining its aspect ratio */
        }
      }
    }
  }
}
</style>
