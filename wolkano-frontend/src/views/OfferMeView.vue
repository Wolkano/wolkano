<template>
  <div class="offerMe">
    <div class="body">
      <div class="titel">
        <img
          src="../assets/Newestlogo.png"
          alt="OfferMe logga med 'Offer' i orange text på vit bakgrund och 'Me' i vit text på orange bakgrund"
        />
      </div>
      <div class="subMenu" style="display: none">
        <router-link
          to="/works"
          class="btns"
          v-motion-pop-visible-once
          :duration="700"
          :delay="50"
        >
          Hur Fungerar Det?
        </router-link>
        <button
          class="btns"
          href="#"
          v-scroll-to="'#offertFormDiv'"
          v-motion-pop-visible-once
          :duration="700"
          :delay="50"
        >
          Testa en låtsas offert
        </button>
        <button
          class="btns"
          v-motion-pop-visible-once
          :duration="700"
          :delay="50"
        >
          Prislista
        </button>
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
            alt="Laptop på ett bord med en webbläsare som visar texten 'I design and develop experiences that make people's lives simple'"
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
          <button
            class="button"
            href="#"
            v-scroll-to="'#offertFormDiv'"
            style="display: none"
          >
            Testa redan idag!
          </button>
        </div>
      </div>

      <div class="row secondRow">
        <svg
          class="lavaUp"
          style="transform: rotate(0deg); transition: 0.3s"
          viewBox="0 0 1440 270"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(247, 249, 250, 1)" offset="0%"></stop>
              <stop stop-color="rgba(247, 249, 250, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style="transform: translate(0, 0px); opacity: 1"
            fill="url(#sw-gradient-0)"
            d="M0,27L48,58.5C96,90,192,153,288,153C384,153,480,90,576,85.5C672,81,768,135,864,135C960,135,1056,81,1152,76.5C1248,72,1344,117,1440,117C1536,117,1632,72,1728,85.5C1824,99,1920,171,2016,198C2112,225,2208,207,2304,166.5C2400,126,2496,63,2592,49.5C2688,36,2784,72,2880,94.5C2976,117,3072,126,3168,108C3264,90,3360,45,3456,31.5C3552,18,3648,36,3744,45C3840,54,3936,54,4032,67.5C4128,81,4224,108,4320,117C4416,126,4512,117,4608,103.5C4704,90,4800,72,4896,85.5C4992,99,5088,144,5184,148.5C5280,153,5376,117,5472,90C5568,63,5664,45,5760,45C5856,45,5952,63,6048,99C6144,135,6240,189,6336,211.5C6432,234,6528,225,6624,189C6720,153,6816,90,6864,58.5L6912,27L6912,270L6864,270C6816,270,6720,270,6624,270C6528,270,6432,270,6336,270C6240,270,6144,270,6048,270C5952,270,5856,270,5760,270C5664,270,5568,270,5472,270C5376,270,5280,270,5184,270C5088,270,4992,270,4896,270C4800,270,4704,270,4608,270C4512,270,4416,270,4320,270C4224,270,4128,270,4032,270C3936,270,3840,270,3744,270C3648,270,3552,270,3456,270C3360,270,3264,270,3168,270C3072,270,2976,270,2880,270C2784,270,2688,270,2592,270C2496,270,2400,270,2304,270C2208,270,2112,270,2016,270C1920,270,1824,270,1728,270C1632,270,1536,270,1440,270C1344,270,1248,270,1152,270C1056,270,960,270,864,270C768,270,672,270,576,270C480,270,384,270,288,270C192,270,96,270,48,270L0,270Z"
          ></path>
        </svg>
        <div class="textSection">
          <InfoTextSection />
        </div>
        <svg
          class="lavaDown"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style="display: none"
        >
          <path
            fill="#ff5500"
            fill-opacity="1"
            d="M0,256L48,229.3C96,203,192,149,288,138.7C384,128,480,160,576,197.3C672,235,768,277,864,256C960,235,1056,149,1152,133.3C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div class="ourTeamContainer" style="display: none">
        <OurTeam />
      </div>
      <QuestionsBanner />
      <div class="offertFormDiv" style="display: none" id="offertFormDiv">
        <div>
          <OffertForm />
        </div>
      </div>
    </div>
  </div>
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
  background-color: $primary;

  .body {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;

    .subMenu {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      box-sizing: border-box;
      margin-top: 50px;
      margin-bottom: 100px;
      width: 100%;
      padding: 40px 0px;

      .btns {
        position: relative;
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 10px 15px;
        gap: 10px;
        cursor: pointer;
        border-radius: 10px;
        font-size: larger;
        font-weight: 600;
        color: black;

        background-color: $offWhite;
        -webkit-transition: color 200ms linear, background-color 200ms linear;
        -ms-transition: color 200ms linear, background-color 300ms linear;
        transition: color 200ms linear, background-color 200ms linear;

        &:hover {
          background-color: rgb(0, 0, 0, 0.1);
          color: $offWhite;
        }
      }
    }
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
    background-color: $secondary;
    z-index: 2;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    // padding-bottom: 40px;
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
          background-color: $secondary;
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
            color: $detail;
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
        color: $detail;
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
    padding-top: 0;
    justify-content: center;
    flex-direction: column;
    .textSection {
      background-color: $secondary;
      color: black;
      width: 100%;
      height: 100%;
      z-index: 2;
      padding-bottom: 100px;
    }
    .lavaDown {
      background-color: $secondary;
      margin-bottom: -1px;
      path {
        filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
      }
    }
    .lavaUp {
      margin-bottom: -1px;
      path {
        filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
      }
    }
  }
}

.offertFormDiv {
  padding: 30px 0px;
  z-index: 2;
  background-color: $secondary;
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
