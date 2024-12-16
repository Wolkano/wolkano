<template>
  <div class="mainDiv">
    <h1>Kontakta <span class="companyName">Wolkano</span></h1>
    <h2>Din partner för smidiga offertlösningar</h2>
    <p class="description">
      Har du frågor om våra automatiserade offerttjänster, eller vill du veta
      hur vi kan hjälpa ditt företag att spara tid och öka effektiviteten? Vi
      finns här för att hjälpa dig! Fyll i formuläret nedan, så återkommer vi
      till dig så snart som möjligt.<br />
      Hos Wolkano är vår ambition att göra offertprocessen enkel, snabb och
      skräddarsydd för dina behov. Tveka inte att höra av dig – vi ser fram emot
      att samarbeta med dig!
    </p>
    <form class="form">
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
</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";
const store = useStore();

const userInformation = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  info: "",
  company: "",
});

const submit = () => {
  console.log(userInformation);
  store.dispatch("submitToNotion", userInformation);
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.mainDiv {
  background: rgb(56, 23, 173);
  background: radial-gradient(
    circle,
    rgba(56, 23, 173, 1) 0%,
    rgba(11, 0, 51, 1) 100%
  );
  padding-bottom: 100px;
  .companyName {
    color: #fe9d01;
  }
  .description {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
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
      background-color: #fe9d01;
      padding: 5px 15px;
      border-radius: 5px;
      -webkit-transition: background-color 200ms linear;
      -ms-transition: background-color 200ms linear;
      transition: background-color 200ms linear;
      &:hover {
        background-color: #cf8102;
      }
    }
  }
}
</style>
