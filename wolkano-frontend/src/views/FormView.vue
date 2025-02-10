<template>
  <div class="mainDiv" v-if="!hasSubmitted">
    <div
      v-motion-fade-visible-once
      :duration="500"
      :delay="100"
      v-if="!isSubmitting"
    >
      <h1>Kontakta <span class="companyName">Wolkano</span></h1>
      <form name="contact" class="form" netlify>
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
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email*"
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
        <button type="submit">Skicka in</button>
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
</template>

<script setup>
//@submit="handleSubmit"
import { reactive, computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const hasSubmitted = computed(() => store.state.hasSubmitted);
const userInformation = reactive({
  firstName: "",
  email: "",
  phone: "",
  info: "",
  company: "",
});
const isSubmitting = ref(false);

const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  console.log(myForm);
  const formData = new FormData(myForm);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      console.log("Form successfully submitted");
    })
    .catch((error) => alert(error));
};
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", handleSubmit);
});
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
    background-color: $offWhite;
    padding: 50px 30px;
    border-radius: 5px;
    color: black;
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
      padding: 5px 15px;
      border-radius: 5px;
      -webkit-transition: background-color 200ms linear;
      -ms-transition: background-color 200ms linear;
      transition: background-color 200ms linear;
      font-weight: 600;
      &:hover {
        background-color: white;
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
}
</style>
