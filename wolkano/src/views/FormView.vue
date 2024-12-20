<template>
  <div class="mainDiv" v-if="!success">
    <div v-motion-fade-visible-once :duration="500" :delay="100">
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
            id="fname"
            name="fname"
            placeholder="Förnamn"
            v-model="userInformation.firstName" />
          <input
            type="text"
            id="lname"
            name="lname"
            placeholder="Efternamn"
            v-model="userInformation.lastName" />
        </div>
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Företagsnamn"
          v-model="userInformation.company" />
        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Telefonnummer"
            v-model="userInformation.phone" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            v-model="userInformation.email" />
        </div>
        <div class="infoDiv">
          <textarea
            type="text"
            id="info"
            name="info"
            placeholder="Information"
            v-model="userInformation.info" />
        </div>
        <button @click.prevent="submit">Skicka in</button>
      </form>
    </div>
  </div>
  <div class="success" v-else>
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
</template>

<script setup>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const success = computed(() => store.state.submittedSuccessfully);
const userInformation = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  info: "",
  company: "",
});

const submit = () => {
  store.dispatch("submitToNotion", userInformation);
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.mainDiv {
  background: rgb(56, 23, 173);
  background: radial-gradient(
    circle,
    rgba(56, 23, 173, 1) 0%,
    rgb(24, 23, 26) 100%
  );
  padding-bottom: 100px;
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
    gap: 25px;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    background-color: #fe9d01;
    padding: 50px 30px;
    border-radius: 5px;
    input {
      color: black;
      width: 100%;
      border-radius: 3px;
      padding: 5px;
    }
    div {
      display: flex;
      flex-direction: row;
      gap: 20px;
      justify-content: space-around;
      width: 100%;
      input {
        color: black;
        width: 100%;
        border-radius: 3px;
        padding: 5px;
      }
    }
    .infoDiv {
      flex-direction: column;
      width: 100%;
      textarea {
        color: black;
        border-radius: 3px;
        padding: 5px;
      }
    }
    button {
      background-color: white;
      color: #fe9d01;
      padding: 5px 15px;
      border-radius: 5px;
      -webkit-transition: background-color 200ms linear;
      -ms-transition: background-color 200ms linear;
      transition: background-color 200ms linear;
      &:hover {
        background-color: #cf8102;
        color: white;
      }
    }
  }
}

.success {
  background: rgb(56, 23, 173);
  background: radial-gradient(
    circle,
    rgba(56, 23, 173, 1) 0%,
    rgb(24, 23, 26) 100%
  );
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
}
</style>
