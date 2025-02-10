<template>
  <div class="mainDiv">
    <div class="headingAndCards">
      <div class="headingAndText">
        <h2>Upptäck våra kärntjänster för ditt företag</h2>
        <p>
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
          <p class="icon">✅</p>
          <div>
            <h3>Automatiserade anbudsförfrågningar för ditt företag</h3>
            <p class="info">
              Skapa en imponerande webbplats som engagerar dina kunder.
            </p>
          </div>
        </div>
        <div
          class="serviceCard"
          v-motion-slide-visible-once-bottom
          :duration="500"
          :delay="300"
        >
          <p class="icon">✅</p>
          <div>
            <h3>Professionella webbplatsbyggande tjänster för alla behov</h3>
            <p class="info">
              Skapa en imponerande webbplats som engagerar dina kunder.
            </p>
          </div>
        </div>
        <div
          class="serviceCard"
          v-motion-slide-visible-once-bottom
          :duration="500"
          :delay="600"
        >
          <p class="icon">✅</p>
          <div>
            <h3>Varför välja oss för dina tjänster?</h3>
            <p class="info">
              Vi kombinerar innovation med expertis för bästa resultat.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="buttons">
      <router-link class="primaryButton" to="/works">Läs mer</router-link>
      <router-link class="secondaryButton" to="/Form">Kontakta oss</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.mainDiv {
  background-color: $secondary;
  padding: 100px 300px;
  color: black;
  .headingAndCards {
    display: flex;
    flex-direction: column;
    .headingAndText {
      display: flex;
      flex-direction: row;
      text-align: left;
      justify-content: space-between;
      margin-bottom: 50px;
      > * {
        width: 40%;
      }
    }
    .serviceCards {
      width: 100%;
      display: flex;
      flex-direction: row;
      gap: 75px;

      .serviceCard {
        background-color: $offWhite;

        flex: 1 1 0px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left;
        padding: 20px;
        border-radius: 10px;
        .icon {
          text-align: left;
          font-size: x-large;
        }
        div {
          h3 {
            text-align: left;
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

      border-radius: 3px;
      &:hover {
        background-color: $darkDetail;
        border-color: $darkDetail;
        color: #f7f9fa;
      }
    }
  }
}
@media (max-width: 1300px) {
  .mainDiv {
    padding: 50px 20px;
    .headingAndCards {
      flex-direction: column;
      .headingAndText {
        display: flex;
        flex-direction: column;
        text-align: left;
        justify-content: space-between;
        margin-bottom: 50px;
        > * {
          width: 100%;
        }
      }
      .serviceCards {
        display: flex;
        flex-direction: column;
        gap: 30px;

        .serviceCard {
          width: 100%;
          .info {
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
