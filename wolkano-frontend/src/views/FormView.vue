<template>
  <div class="mainDiv1">
    <div class="popupDiv">
      <div
        v-if="copied"
        class="popup"
        v-motion-pop-visible-once
        :duration="700"
        :delay="50"
      >
        E-post kopierad!
      </div>
    </div>
    <div class="kontaktaH">
      <h1>Kontakta wolkano</h1>
      <p class="description">
        Har du frågor om våra automatiserade offerttjänster, eller vill du veta
        hur vi kan hjälpa ditt företag att spara tid och öka effektiviteten? Vi
        finns här för att hjälpa dig! Fyll i formuläret nedan, så återkommer vi
        till dig så snart som möjligt.
      </p>
      <p class="mail">
        Kontakta oss på: <a href="mailto:info@wolkano.se">info@wolkano.se</a>
        <br />
        <button
          class="email"
          id="email"
          @click="copyToClipboard"
          style="display: none"
        >
          Kopiera E-post
        </button>
      </p>
    </div>
  </div>
  <div class="ourTeamContainer" style="display: none">
    <OurTeam />
  </div>
  <!--
  <div class="mainDiv" style="display: none" v-if="!hasSubmitted">
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
  -->

  <!-- <div class="success" style="display: none" v-if="hasSubmitted && success">
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

  <div class="failure" style="display: none" v-if="hasSubmitted && !success">
    <div v-motion-pop-visible-once :duration="1500" :delay="100" class="icon">
      ❌
    </div>
    <div v-motion-fade-visible-once :duration="1000" :delay="100">
      <h1>Något gick fel!</h1>
      <p>Vänligen försök igen senare</p>
      <button @click.prevent="reset">Försök igen</button>
    </div>
  </div> -->
</template>

<script setup>
import { ref } from "vue";
// import { useStore } from "vuex";
import OurTeam from "@/components/OurTeam.vue";
// const store = useStore();
// const success = computed(() => store.state.submittedSuccessfully);
// const hasSubmitted = computed(() => store.state.hasSubmitted);
// const userInformation = reactive({
//   firstName: "",
//   email: "",
//   phone: "",
//   info: "",
//   company: "",
// });
// const hasMissingFields = ref(false);

// const submit = async () => {
//   if (
//     !userInformation.name ||
//     !userInformation.email ||
//     !userInformation.phone
//   ) {
//     hasMissingFields.value = true;
//     console.log("test");
//     return;
//   }
//   isSubmitting.value = true;
//   await store.dispatch("submitToNotion", userInformation);
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };
// const reset = () => {
//   isSubmitting.value = false;
//   store.commit("setHasSubmitted", false);
// };
// const isSubmitting = ref(false);
const email = ref("info@wolkano.se");
const copied = ref(false);

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(email.value);
    copied.value = true;

    // Återställ knappen efter 2 sekunder
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error("Fel vid kopiering:", err);
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.mainDiv1 {
  background-color: $primary;
  padding-top: 150px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;
  .popup {
    background-color: $secondary;
    width: 100%;
    border-radius: 5px;
    margin: 10px;
    z-index: 10;
  }
  .popupDiv {
    height: 5vh;
  }

  .kontaktaH {
    background-color: $secondary;
    border-radius: 5px;
    width: 40%;
    padding-top: 20px;
    padding-bottom: 20px;
    h1 {
      color: $detail;
    }
    .description {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
      font-size: 18px;
      padding-bottom: 20px;
    }
    .mail {
      a {
        color: $detail;
        text-decoration: underline;
        &:hover {
          color: $darkDetail;
        }
      }
      .email {
        margin-top: 10px;
        background-color: $detail;
        color: $secondary;
        border-radius: 5px;
        font-weight: 600;
        padding: 5px;

        &:hover {
          background-color: $darkDetail;
        }
      }
    }
  }
}
.ourTeamContainer {
  padding-top: 50px;
  background-color: $secondary;
}

@media (max-width: 768px) {
  .mainDiv1 {
    h1 {
      font-size: $font-size-mobile-h1;
    }
    .kontaktaH {
      width: 90%;
    }

    /*.form {
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
  }*/
  }
}
</style>
