<template>
  <div class="mainDiv">
    <div class="headingAndCards">
      <div class="headingAndText">
        <h2>Våra fokusområden</h2>
        <p style="display: none">
          Vi erbjuder automatiserade anbudsförfrågningar som sparar tid och
          resurser. Vårt professionella webbplatsbyggande säkerställer att din
          online-närvaro är både attraktiv och funktionell. Låt oss hjälpa dig
          att växa och nå dina affärsmål.
        </p>
      </div>
      <div class="serviceCards">
        <div
          class="serviceCard"
          v-motion-slide-visible-once-bottom
          :duration="500"
          :delay="100"
        >
          <p style="display: none" class="icon">✅</p>
          <div>
            <h3>OfferMe</h3>
            <p class="info">
              Automatiska offerter Ett revolutionerande leadssystem som ökar er
              omsättning.
            </p>
          </div>
        </div>
        <div
          class="serviceCard"
          v-motion-slide-visible-once-bottom
          :duration="500"
          :delay="isMobile ? 100 : 300"
        >
          <p style="display: none" class="icon">✅</p>
          <div>
            <h3>CRM</h3>
            <p class="info">
              Nästa system under utveckling är ett CRM-system utvecklat av
              byggbranschens behov. Hantera löner, projekt, fakturering,
              leverantörer, allt i samma system.
            </p>
          </div>
        </div>
        <div
          class="serviceCard"
          v-motion-slide-visible-once-bottom
          :duration="500"
          :delay="isMobile ? 100 : 600"
        >
          <p style="display: none" class="icon">✅</p>
          <div>
            <h3>Webbutveckling</h3>
            <p class="info">
              Är er hemsida anpassad för nästa generations kunder? Vi erbjuder
              allt ifrån helt ny hemsida, webshoppar, hosting till mindre
              justeringar och SEO-förbättringar.
            </p>
          </div>
        </div>
      </div>
      <div class="buttons">
        <router-link style="display: none" class="primaryButton" to="/works"
          >Läs mer</router-link
        >
        <router-link class="secondaryButton" to="/form"
          >Kontakta oss</router-link
        >
      </div>
    </div>
    <!--<div class="meetDiv">
      <h3>Boka möte</h3>
      
      <iframe
        class="meet"
        src="https://calendar.app.google/kQD7sogtCaGNXxma9"
      ></iframe>
      
    </div>-->
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
const windowWidth = ref(window.innerWidth);
const isMobile = computed(() => windowWidth.value < 768);
</script>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.mainDiv {
  background-color: $secondary;
  padding: 100px 30px;
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .headingAndCards {
    width: max-content;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;

    text-align: left;
    .headingAndText {
      display: flex;
      flex-direction: row;
      text-align: left;
      justify-content: space-between;
      margin-bottom: 50px;
    }
    .serviceCards {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 150px;

      .serviceCard {
        background-color: $offWhite;
        max-width: 300px;
        // flex: 1 1 0px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        padding: 20px 30px;
        border-radius: 10px;

        .icon {
          text-align: left;
          font-size: x-large;
        }
        div {
          h3 {
            color: $detail;
            text-align: left;
            font-weight: 600;
          }
          .info {
            align-self: flex-end;
          }
        }
      }
    }
  }
  .buttons {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: first baseline;
    gap: 30px;

    .primaryButton {
      background-color: $detail;
      border-color: $detail;
      border-width: 2px;
      color: #f7f9fa;
      padding: 10px 20px;

      border-radius: 3px;
      &:hover {
        background-color: $darkDetail;
        border-color: $darkDetail;
      }
    }

    .secondaryButton {
      color: $detail;
      background-color: #f7f9fa;
      border-color: $detail;
      border-width: 2px;
      padding: 10px 20px;
      font-weight: 700;
      &:hover {
        background-color: $darkDetail;
        border-color: $darkDetail;
        color: #f7f9fa;
      }
    }
  }
  .meetDiv {
    padding: 30px 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-weight: 600;
      padding: 20px;
    }
    .meet {
      max-width: 600px;
      width: 100%;

      height: 800px;
    }
  }
}
@media (max-width: 1300px) {
  .mainDiv {
    padding: 50px 20px;
    .headingAndCards {
      flex-direction: column;
      width: 100%;
      .headingAndText {
        display: flex;
        flex-direction: column;
        text-align: left;
        justify-content: space-between;
        margin-bottom: 50px;
      }
      .serviceCards {
        display: flex;
        flex-direction: column;
        gap: 30px;

        .serviceCard {
          width: 100%;
          max-width: 100%;
          .info {
            text-align: left;
          }
        }
      }
    }
    .meetDiv {
      padding: 30px 10px;
    }
  }
}
</style>
