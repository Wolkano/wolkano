<template>
  <div class="mainDiv" v-if="!hasSubmitted">
    <div
      v-motion-fade-visible-once
      :duration="500"
      :delay="100"
      v-if="!isSubmitting"
    >
      <h1><span class="companyName">Test</span>-offert</h1>
      <div class="carousel-container">
        <swiper
          :modules="[SwiperNavigation, SwiperPagination]"
          :slides-per-view="1"
          navigation
          pagination
        >
          <swiper-slide v-for="(form, index) in forms" :key="index">
            <component
              :is="form.component"
              @slider-touch="toggleSwipe(false)"
              @slider-release="toggleSwipe(true)"
            />
          </swiper-slide>
        </swiper>
      </div>
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
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation as SwiperNavigation,
  Pagination as SwiperPagination,
} from "swiper/modules";
import FormComponent from "./FormComponent.vue";
const store = useStore();
const success = computed(() => store.state.submittedOfferSuccessfully);
const hasSubmitted = computed(() => store.state.hasSubmittedOffer);

const allowSwipe = ref(true);

const toggleSwipe = (state) => {
  allowSwipe.value = state;
};
const forms = ref([
  { name: "Form One", component: FormComponent },
  { name: "Form Two", component: FormComponent },
  { name: "Form Three", component: FormComponent },
]);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
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
  padding-top: 30px;
  background-color: white;
  color: black;
  .carousel-container {
    width: 100%;
    max-width: 1500px;
    margin: auto;
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
    .carousel-container {
      width: 100%;
      max-width: 400px;
      margin: auto;
    }
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
