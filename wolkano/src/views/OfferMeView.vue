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
        <svg
          class="lavaUp"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fe9d01"
            fill-opacity="1"
            d="M0,96L15,133.3C30,171,60,245,90,261.3C120,277,150,235,180,218.7C210,203,240,213,270,186.7C300,160,330,96,360,101.3C390,107,420,181,450,218.7C480,256,510,256,540,229.3C570,203,600,149,630,154.7C660,160,690,224,720,229.3C750,235,780,181,810,144C840,107,870,85,900,69.3C930,53,960,43,990,53.3C1020,64,1050,96,1080,101.3C1110,107,1140,85,1170,64C1200,43,1230,21,1260,53.3C1290,85,1320,171,1350,202.7C1380,235,1410,213,1425,202.7L1440,192L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
          ></path>
        </svg>
        <div class="textSection">
          <InfoTextSection />
        </div>
        <svg
          class="lavaDown"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fe9d01"
            fill-opacity="1"
            d="M0,128L15,144C30,160,60,192,90,192C120,192,150,160,180,133.3C210,107,240,85,270,101.3C300,117,330,171,360,176C390,181,420,139,450,106.7C480,75,510,53,540,42.7C570,32,600,32,630,58.7C660,85,690,139,720,181.3C750,224,780,256,810,245.3C840,235,870,181,900,170.7C930,160,960,192,990,186.7C1020,181,1050,139,1080,112C1110,85,1140,75,1170,69.3C1200,64,1230,64,1260,64C1290,64,1320,64,1350,69.3C1380,75,1410,85,1425,90.7L1440,96L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"
          ></path>
        </svg>
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
      align-items: center;
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
    display: flex;
    gap: 0;
    padding: 0;
    justify-content: center;
    flex-direction: column;
    .textSection {
      background-color: $orange;
      width: 100%;
      height: 100%;
    }
    .lavaDown {
      background-color: white;
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
      flex-direction: column;
      gap: 0;
      width: 100%;
      padding: 0;
      .textSection {
        padding: 20px;
        .infoText {
          text-align: left;
        }
      }
      .animation {
        display: none;
      }
      .lavaUp {
        margin-bottom: -2px;
      }
      .lavaDown {
        margin-top: -2px;
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
