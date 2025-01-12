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
            placeholder="Namn*"
            v-model="userInformation.name"
          />
          <p
            class="missingField"
            v-if="!userInformation.name && hasMissingFields"
          >
            ❌ Fyll i namn
          </p>
        </div>
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Företagsnamn"
          v-model="userInformation.company"
        />
        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Telefonnummer*"
            v-model="userInformation.phone"
          />
          <p
            class="missingField"
            v-if="!userInformation.phone && hasMissingFields"
          >
            ❌ Fyll i telefonnummer
          </p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
            v-model="userInformation.email"
          />
          <p
            class="missingField"
            v-if="!userInformation.email && hasMissingFields"
          >
            ❌ Fyll i email
          </p>
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
  await store.dispatch("submitToNotion", userInformation);
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
  background-color: $background-color;
  padding-bottom: 100px;
  padding-top: 120px;
  color: black;
  h1 {
    color: white;
  }
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    padding: 50px 30px;
    border-radius: 5px;
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
      background-color: #fe9d01;
      color: white;
      padding: 5px 15px;
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
  background-color: $background-color;
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
}
.failure {
  background-color: $background-color;
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
