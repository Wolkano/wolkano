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
        <div class="serviceCard">
          <p class="icon">✅</p>
          <h3>Automatiserade anbudsförfrågningar för ditt företag</h3>
          <p class="info">
            Skapa en imponerande webbplats som engagerar dina kunder.
          </p>
        </div>
        <div class="serviceCard">
          <p class="icon">✅</p>
          <h3>Professionella webbplatsbyggande tjänster för alla behov</h3>
          <p class="info">
            Skapa en imponerande webbplats som engagerar dina kunder.
          </p>
        </div>
        <div class="serviceCard">
          <p class="icon">✅</p>
          <h3>Varför välja oss för dina tjänster?</h3>
          <p class="info">
            Vi kombinerar innovation med expertis för bästa resultat.
          </p>
        </div>
      </div>
    </div>
    <div class="buttons">
      <button class="primaryButton">Läs mer</button>
      <button class="secondaryButton">Anmäl dig</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.mainDiv {
  background-color: #f7f9fa;
  padding: 100px 450px;
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
      display: flex;
      flex-direction: row;
      gap: 75px;
      .serviceCard {
        flex: 1 1 0px;
        width: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .icon {
          text-align: left;
          font-size: x-large;
        }
        h3 {
          text-align: left;
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
    button {
      padding: 10px 20px;

      border-radius: 3px;
    }
    .primaryButton {
      background-color: $orange;
      border-color: $orange;
      border-width: 2px;
      color: #f7f9fa;
      &:hover {
        background-color: #cf8102;
        border-color: #cf8102;
      }
    }

    .secondaryButton {
      color: $orange;
      background-color: #f7f9fa;
      border-color: $orange;
      border-width: 2px;
      &:hover {
        background-color: #cf8102;
        border-color: #cf8102;
        color: #f7f9fa;
      }
    }
  }
}
</style>
