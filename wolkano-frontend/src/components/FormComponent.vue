<template>
  <form class="form">
    <p class="description">
      Har du frågor om våra automatiserade offerttjänster, eller vill du veta
      hur vi kan hjälpa ditt företag att spara tid och öka effektiviteten? Vi
      finns här för att hjälpa dig! Fyll i formuläret nedan, så återkommer vi
      till dig så snart som möjligt.
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
        @mousedown="$emit('slider-touch')"
        @mouseup="$emit('slider-release')"
        @touchstart="$emit('slider-touch')"
        @touchend="$emit('slider-release')"
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
      <p class="missingField" v-if="!offerInformation.name && hasMissingFields">
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
</template>

<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import FormRadioButton from "./FormRadioButton.vue";

const store = useStore();
const offerInformation = reactive({
  name: "",
  email: "",
  phone: "",
  activePlan: "",
  sliderValue: 5,
});
const hasMissingFields = ref(false);

const submit = async () => {
  if (
    !offerInformation.name ||
    !offerInformation.email ||
    !offerInformation.phone
  ) {
    hasMissingFields.value = true;
    return;
  }
  isSubmitting.value = true;
  await store.dispatch("submitOffer", offerInformation);
};
const isSubmitting = ref(false);
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.form {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  background-color: $offWhite;
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
  input {
    color: black;
    background-color: $secondary;
    width: 100%;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid white;
    &:focus {
      outline: none;
      border: 1px solid $detail;
    }
  }
  .slidecontainer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    input {
      accent-color: $detail;
      padding: 10px 0px;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0); // bara för att tabort box-shadow
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
    background-color: $detail;
    color: white;
    padding: 10px 30px;
    border-radius: 5px;
    -webkit-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;
    font-weight: 600;
    &:hover {
      background-color: $darkDetail;
      color: white;
    }
  }
}

@media (max-width: 768px) {
  .mainDiv {
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
