<template>
  <div class="mainDiv" v-if="!hasSubmitted">
    <div
      v-motion-fade-visible-once
      :duration="500"
      :delay="100"
      v-if="!isSubmitting"
    >
      <h1><span class="companyName">Testa</span> denna låtsas-offert</h1>
      <form class="form">
        <p class="description">
          Har du frågor om våra automatiserade offerttjänster, eller vill du
          veta hur vi kan hjälpa ditt företag att spara tid och öka
          effektiviteten? Vi finns här för att hjälpa dig! Fyll i formuläret
          nedan, så återkommer vi till dig så snart som möjligt.
        </p>
        <div class="newRadioButtons">
          <FormRadioButton
            v-model:activePlan="offerInformation.activePlan"
            :title="'Produkt 1'"
            description="Testar"
            :planDollars="5"
          />
          <FormRadioButton
            v-model:activePlan="offerInformation.activePlan"
            :title="'Produkt 2'"
            description="Testar igen"
            :planDollars="5"
          />
          <FormRadioButton
            v-model:activePlan="offerInformation.activePlan"
            :title="'Produkt 3'"
            description="Lorem ipsum"
            :planDollars="5"
          />
        </div>
        <div class="slidecontainer">
          <h3>Välj antal produkter</h3>
          <p>
            <b>{{ offerInformation.sliderValue }}</b>
            {{ offerInformation.sliderValue === 1 ? "produkt" : "produkter" }}
          </p>
          <input
            type="range"
            min="0"
            max="10"
            step="1"
            v-model="offerInformation.sliderValue"
            class="slider"
            id="myRange"
          />
        </div>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Namn*"
            v-model="offerInformation.name"
          />
          <p
            class="missingField"
            v-if="!offerInformation.name && hasMissingFields"
          >
            ❌ Fyll i namn
          </p>
        </div>
        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Telefonnummer*"
            v-model="offerInformation.phone"
          />
          <p
            class="missingField"
            v-if="!offerInformation.phone && hasMissingFields"
          >
            ❌ Fyll i telefonnummer
          </p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            v-model="offerInformation.email"
          />
          <p
            class="missingField"
            v-if="!offerInformation.email && hasMissingFields"
          >
            ❌ Fyll i email
          </p>
        </div>
        <button @click.prevent="submit">Skicka in</button>
      </form>
    </div>

    <div v-if="isSubmitting" class="spinner-container">
      <div class="spinner"></div>
      <div v-motion-slide-left :duration="500" :delay="100" class="icon">
        🤞
      </div>
      <p>Skickar in...</p>
    </div>
  </div>

  <div class="success" v-if="hasSubmitted && success">
    <div v-motion-slide-left :duration="1500" :delay="100" class="icon">📨</div>
    <div
      v-motion-fade-visible-once
      :duration="1000"
      :delay="100"
      class="successText"
    >
      <h1>Tack för din inskickade information!</h1>
      <p>
        Vi har mottagit ditt formulär och behandlar det så snart som möjligt.
        <br />
        Du kommer att få en bekräftelse eller svar inom kort.
      </p>
      <div class="bounce-container">
        <div class="bounce-box" @click="scrollToTop">
          <p>👆</p>
        </div>
      </div>
    </div>
  </div>

  <div class="failure" v-if="hasSubmitted && !success">
    <div v-motion-pop-visible-once :duration="1500" :delay="100" class="icon">
      ❌
    </div>
    <div v-motion-fade-visible-once :duration="1000" :delay="100">
      <h1>Något gick fel!</h1>
      <p>Vänligen försök igen senare</p>
      <button @click.prevent="reset">Försök igen</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from "vue";
import { useStore } from "vuex";
import FormRadioButton from "./FormRadioButton.vue";
const store = useStore();
const success = computed(() => store.state.submittedOfferSuccessfully);
const hasSubmitted = computed(() => store.state.hasSubmittedOffer);
const offerInformation = reactive({
  name: "",
  email: "",
  phone: "",
  activePlan: "",
  sliderValue: 5,
});
const hasMissingFields = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const submit = async () => {
  if (
    !offerInformation.name ||
    !offerInformation.email ||
    !offerInformation.phone
  ) {
    hasMissingFields.value = true;
    console.log("test");
    return;
  }
  isSubmitting.value = true;
  await store.dispatch("submitOffer", offerInformation);
};
const reset = () => {
  isSubmitting.value = false;
  store.commit("setHasSubmittedOffer", false);
};
const isSubmitting = ref(false);
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.mainDiv {
  background-color: white;
  color: black;
  .companyName {
    color: #fe9d01;
  }
  .description {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    font-size: 18px;
  }
  .form {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    padding: 50px 50px;
    border-radius: 5px;

    .newRadioButtons {
      color: black;
      display: flex;
      flex-direction: row;
      gap: 20px;
      justify-content: center;
      align-items: center;
    }
    .slidecontainer {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      input {
        accent-color: $orange;
        padding: 10px 0px;

        &::-webkit-slider-thumb {
          padding: 12px;
          cursor: pointer;
        }
      }
      p {
        align-self: center !important;
      }
    }
    .missingField {
      color: red;
      font-style: italic;
    }
    input {
      color: black;
      width: 100%;
      border-radius: 3px;
      padding: 5px;
      border: 1px solid gray;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 100%;
      gap: 20px;
      input {
        color: black;
        width: 100%;
        border-radius: 3px;
        padding: 5px;
      }
      p {
        margin-top: 5px;
        margin-bottom: 5px;
        align-self: flex-start;
      }
    }
    .infoDiv {
      flex-direction: column;
      width: 100%;
      textarea {
        color: black;
        border-radius: 3px;
        padding: 5px;
        border: 1px solid gray;
      }
    }
    button {
      background-color: $orange;
      color: white;
      padding: 10px 30px;
      border-radius: 5px;
      -webkit-transition: background-color 200ms linear;
      -ms-transition: background-color 200ms linear;
      transition: background-color 200ms linear;
      font-weight: 600;
      &:hover {
        background-color: #cf8102;
        color: white;
      }
    }
  }

  .spinner-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
    padding-bottom: 100px;
    .icon {
      font-size: 50px;
    }
  }

  .spinner {
    margin-bottom: 25px;
    border: 5px solid rgba(255, 255, 255, 0.2);
    border-top: 5px solid #fe9d01;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

.success {
  padding-bottom: 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  h1 {
    color: #fe9d01;
  }
  .icon {
    font-size: 80px;
  }

  p {
    font-size: larger;
  }
  .successText {
    p {
      color: black;
    }
    .bounce-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10vh;
    }

    .bounce-box {
      width: 200px;
      height: 70px;
      background-color: white;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-color: $orange;
      border-width: 3px;
      cursor: pointer;
      p {
        animation: bounce 1s ease-in-out infinite;
      }
      &:hover {
        background-color: rgb(248, 248, 248);
      }
    }
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(0px);
  }
}

.failure {
  padding-bottom: 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  h1 {
    color: #fe9d01;
  }
  .icon {
    font-size: 80px;
  }

  p {
    font-size: larger;
  }
  button {
    background-color: #fe9d01;
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    -webkit-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;
    margin-top: 25px;
    font-weight: 600;
    &:hover {
      background-color: #cf8102;
      color: white;
    }
  }
}

@media (max-width: 768px) {
  .mainDiv {
    h1 {
      font-size: $font-size-mobile-h1;
    }
    .form {
      width: 90%;
      padding: 15px;
      .newRadioButtons {
        flex-direction: column;
      }
      div {
        flex-direction: column;
        input {
          width: 100%;
        }
      }
      button {
        padding: 5px 20px;
      }
    }
    .description {
      width: 100%;
      text-align: left;
    }
    button {
      width: 60%;
      font-weight: 600;
    }
  }
  .success {
    h1 {
      font-size: $font-size-mobile-h1;
    }
    .icon {
      font-size: 60px;
    }
    p {
      font-size: large;
    }
  }
  .failure {
    h1 {
      font-size: $font-size-mobile-h1;
    }
    .icon {
      font-size: 60px;
    }
    p {
      font-size: large;
    }
  }
}
</style>
