<template>
  <div class="mainDiv" v-if="!hasSubmitted">
    <div
      v-motion-fade-visible-once
      :duration="500"
      :delay="100"
      v-if="!isSubmitting"
    >
      <h1>Kontakta <span class="companyName">Wolkano</span></h1>
      <form class="form">
        <p class="description">
          Har du frågor om våra automatiserade offerttjänster, eller vill du
          veta hur vi kan hjälpa ditt företag att spara tid och öka
          effektiviteten? Vi finns här för att hjälpa dig! Fyll i formuläret
          nedan, så återkommer vi till dig så snart som möjligt.
        </p>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            :placeholder="
              !userInformation.name && hasMissingFields
                ? '❌ Fyll i namn'
                : 'Ditt namn *'
            "
            v-model="userInformation.name"
          />
        </div>
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Företag"
          v-model="userInformation.company"
        />
        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            :placeholder="
              !userInformation.phone && hasMissingFields
                ? '❌ Fyll i ditt telefonnummer'
                : 'Telefonnummer *'
            "
            v-model="userInformation.phone"
          />
          <input
            type="email"
            id="email"
            name="email"
            :placeholder="
              !userInformation.email && hasMissingFields
                ? '❌ Fyll i din email'
                : 'Email *'
            "
            v-model="userInformation.email"
          />
        </div>
        <div class="infoDiv">
          <textarea
            type="text"
            id="info"
            name="info"
            placeholder="Information"
            v-model="userInformation.info"
          />
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
    <div v-motion-fade-visible-once :duration="1000" :delay="100">
      <h1>Tack för din inskickade information!</h1>
      <p>
        Vi har mottagit ditt formulär och behandlar det så snart som möjligt.
        <br />
        Du kommer att få en bekräftelse eller svar inom kort.
      </p>
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
const store = useStore();
const success = computed(() => store.state.submittedSuccessfully);
const hasSubmitted = computed(() => store.state.hasSubmitted);
const userInformation = reactive({
  firstName: "",
  email: "",
  phone: "",
  info: "",
  company: "",
});
const hasMissingFields = ref(false);

const submit = async () => {
  if (
    !userInformation.name ||
    !userInformation.email ||
    !userInformation.phone
  ) {
    hasMissingFields.value = true;
    console.log("test");
    return;
  }
  isSubmitting.value = true;
  await store.dispatch("sendEmail", userInformation);
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const reset = () => {
  isSubmitting.value = false;
  store.commit("setHasSubmitted", false);
};
const isSubmitting = ref(false);
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.mainDiv {
  background-color: $secondary;
  padding-bottom: 100px;
  padding-top: 120px;
  color: black;
  h1 {
    color: black;
  }
  .companyName {
    color: $detail;
    font-size: 4rem;
  }
  .description {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    font-size: 18px;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding: 50px 30px;
    border-radius: 5px;
    color: black;
    font-weight: 600;
    .missingField {
      color: red;
      font-style: italic;
    }
    input {
      color: black;
      background-color: white;
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
        padding: 10px;
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
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
        border: 1px solid white;
        &:focus {
          outline: none;
          border: 1px solid $detail;
        }
      }
    }
    button {
      background-color: $detail;
      color: white;
      padding: 10px 50px;

      -webkit-transition: background-color 200ms linear;
      -ms-transition: background-color 200ms linear;
      transition: background-color 200ms linear;
      font-weight: 600;
      &:hover {
        background-color: $lightDetail;
        color: $detail;
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
    border-top: 5px solid $detail;
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
  background-color: $secondary;
  padding-bottom: 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  h1 {
    color: $detail;
  }
  .icon {
    font-size: 80px;
  }

  p {
    font-size: larger;
    color: black;
  }
}
.failure {
  background-color: $secondary;
  padding-bottom: 100px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  h1 {
    color: $detail;
  }
  .icon {
    font-size: 80px;
  }

  p {
    font-size: larger;
    color: black;
  }
  button {
    background-color: $detail;
    color: white;
    padding: 5px 15px;

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
      div {
        flex-direction: column;
        input {
          width: 100%;
        }
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
