<template>
  <div class="offerMe">
    <div class="intro">
      <div class="titel">
        <img src="../assets/offermewhitelogo.png" alt="OfferMe Logo white" />
        <!---<h1>OfferMe</h1>--->
      </div>
      <div class="col">
        <div class="animation" v-motion-pop-visible-once :duration="700" :delay="50">
          <img src="../assets/Byggproffsform.png" />
        </div>
        <div class="section" v-motion-pop-visible-once :duration="700" :delay="100">
          <h2>Offerter</h2>
          <p class="infoText">
            OfferMe är tjänsten som revolutionerar hur offerter skapas. Med vår smarta och användarvänliga plattform kan kunder snabbt och enkelt få en skräddarsydd offert direkt efter att de har fyllt i alla nödvändiga uppgifter.
            Processen är enkel: Kunden anger detaljer om sitt behov genom vårt intuitiva gränssnitt, som guidar dem genom varje steg. När alla uppgifter är inskickade bearbetas informationen av vår avancerade algoritm som automatiskt sammanställer en offert som både är tydlig och professionell. Resultatet levereras omedelbart – ingen väntetid, inget krångel.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="section" v-motion-pop-visible-once :duration="700" :delay="50">
          <h2>Varför välja OfferMe?</h2>
        <p class="infoText">
          <ul>
            <li>Snabbhet och effektivitet</li>
            Med OfferMe får dina kunder en professionell offert på några sekunder. Vår automatiserade process eliminerar väntetider och säkerställer att du alltid ligger steget före.
            <li>Skräddarsydda lösningar</li>
            Varje offert anpassas efter kundens specifika behov, vilket ökar chanserna att du vinner affären.
            <li>Tid för det som är viktigast</li>
            Genom att automatisera offertprocessen kan du fokusera mer på din kärnverksamhet och mindre på administration.
          </ul>
        </p>
        </div>
        <div class="animation" v-motion-pop-visible-once :duration="700" :delay="100">
          <img src="../assets/Förnamn.gif" />
        </div>
      </div>
      <!--
      <div class="col">
        <div class="animation" v-motion-pop-visible-once :duration="700" :delay="50">
          <img src="../assets/Förnamn.gif" />
        </div>
        <div class="section" v-motion-pop-visible-once :duration="700" :delay="100">
          <h2>Heading 2</h2>
        <p class="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        </div>
      </div>
      -->
    </div>

    <CompanyBanner />
  </div>
</template>

<script setup>
import CompanyBanner from "@/components/CompanyBanner.vue";
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.offerMe {
  background-color: rgb(20, 0, 90);

  .intro {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    
  }
  .titel {
    width: 100%;
    display: flex;
    justify-content: center;
    img{
      width: 30%;
    }
    
    /*h1 {
      font-weight: 700;
      width: fit-content;
      border-bottom: 2px solid #fe9d01;
    }*/
  }

  .col {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;


    .animation {
      width: 35%;
      margin: 30px;
      padding: 30px;

      img{
      border-style: solid;
      border-width: 5px;
      border-color: #fe9d01;
      border-radius: 20px;
      }

    }
    .section{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 35%;

      p {
      font-size: $font-size-p;
      width: 70%;
    }
    h2{
      font-size: $font-size-h2;
      color: #fe9d01;
      font-weight: 700;
    }
    ul{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    li{
      font-size: 1.2rem;
      font-weight: 600;
      border-bottom: 2px solid #fe9d01;
      width: fit-content;
      margin: 10px;
    }
    }
  }
  .col:nth-of-type(3) {
    background-color: white;
    color: black;
  }
}

@media (max-width: 768px) {
  .offerMe {
    .titel{
      img{
        width:70%;
      }
    }
    .col {
      flex-direction: column-reverse;
      .section {
        width: 70%;
        p {
          width: 100%;
        }
      }
      .animation {
        width: 80%;
        margin-top: 20px;
      }
    }
    .col:nth-of-type(3){
      .animation{
        display: none;
      }
    }
    
  }
}
</style>
