<template>
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
          <p class="emoji">🔧</p>
          <p>Se hur den automatiserade offertjänsten fungerar</p>
          <router-link to="/works" class="button"
            >Hur Fungerar det?</router-link
          >
        </div>
        <div class="knappDiv">
          <p class="emoji">🌟</p>
          <p>
            Vi på OfferMe finns här för att hjälpa dig - tveka inte att kontakta
            oss!
          </p>
          <div class="button">
            <router-link to="/form" class="button">Kontakta oss</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.thirdRow {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
  padding-right: 20px;
  background-image: url("../assets/placeholderbild.jpg");
  background-size: cover;
  background-position: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($background-color, 0.9);
    z-index: 1;
  }
  * {
    position: relative;
    z-index: 2;
  }

  .questionsContainer {
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }

  h2 {
    width: 100%;
    padding-bottom: 30px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .button {
    font-weight: 600;
    width: fit-content;
  }
  .knappar {
    display: flex;
    flex-direction: row;
    gap: 40px;
    width: 75%;
    .knappDiv {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      width: 500px;
      justify-content: space-between;
      text-align: left;
      .button {
        background-color: $orange;
        color: white;
        &:hover {
          background-color: $darkOrange;
        }
      }
      p {
        font-weight: 600;
        font-size: 20px;
      }
      .emoji {
        font-size: xx-large;
        align-self: center;
      }
    }
  }
}

@media (max-width: 768px) {
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
  }
}
</style>
