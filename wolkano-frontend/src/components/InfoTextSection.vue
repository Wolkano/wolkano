<template>
  <div class="infoTextSection">
    <div class="infoText">
      <div v-motion-slide-visible-once-bottom :duration="500" :delay="100">
        <p class="emoji">⚡️</p>
        <h3>Snabbhet och effektivitet</h3>
        <p>
          Med OfferMe får dina kunder en professionell offert på några sekunder.
          Vår automatiserade process eliminerar väntetider och säkerställer att
          du alltid ligger steget före.
        </p>
      </div>

      <div v-motion-slide-visible-once-bottom :duration="500" :delay="300">
        <p class="emoji">🧩</p>
        <h3>Skräddarsydda lösningar</h3>
        <p>
          Varje offert anpassas efter kundens specifika behov, vilket ökar
          chanserna att du vinner affären.
        </p>
      </div>
      <div v-motion-slide-visible-once-bottom :duration="500" :delay="500">
        <p class="emoji">🛠️</p>
        <h3>Tid för det som är viktigast</h3>
        <p>
          Genom att automatisera offertprocessen kan du fokusera mer på din
          kärnverksamhet och mindre på administration.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
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

@media (max-width: 768px) {
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
</style>
