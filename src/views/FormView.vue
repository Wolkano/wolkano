<template>
  <div class="mt-10 lg:ml-[20%] mr-[20%]">
    <h1 class="text-2xl">Få en offert för anpassade CRM-lösningar</h1>
    <p class="mb-10">
      Är du redo att ta kundrelationerna till nästa nivå? Fyll i formuläret
      nedan så återkommer vi med en skräddarsydd offert baserad på dina behov
      och mål. Vår CRM-tjänst är anpassningsbar och flexibel för att stödja
      företag av alla storlekar och inom alla branscher. Vi ser fram emot att
      höra hur vi kan hjälpa dig förbättra dina affärsprocesser och
      kundupplevelser.
    </p>
    <h2 class="text-xl">Formulärbeskrivning och instruktioner</h2>
    <p class="mb-10">
      För att kunna ge dig en exakt offert, behöver vi veta lite mer om ditt
      företag och dina specifika behov. Vänligen fyll i så många detaljer som
      möjligt i formuläret nedan. Ju mer information vi har, desto bättre kan vi
      anpassa våra tjänster för att passa just ditt företag.
    </p>
    <div>
      <div class="flex justify-center gap-5">
        <div>
          <p>Förnamn</p>
          <input
            class="bg-white px-4 py-3 outline-none w-[280px] text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#f5bf69] border-[#FE9D01]"
            v-model="firstName"
            placeholder="Jane" />
          <p>Efternamn</p>
          <input
            class="bg-white px-4 py-3 outline-none w-[280px] text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#f5bf69] border-[#FE9D01]"
            v-model="lastName"
            placeholder="Doe" />
        </div>
        <div>
          <p>E-mail</p>
          <input
            class="bg-white px-4 py-3 outline-none w-[280px] text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#f5bf69] border-[#FE9D01]"
            v-model="email"
            placeholder="test@test.se" />
          <p>Telefonnummer</p>
          <input
            class="bg-white px-4 py-3 outline-none w-[280px] text-black rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#f5bf69] border-[#FE9D01]"
            v-model="phone"
            placeholder="+46xxxxxxx" />
        </div>
      </div>
      <h3 class="text-xl">Val av tjänst</h3>
      <div class="flex gap-10 justify-center items-center flex-column">
        <input type="radio" id="one" value="1" v-model="radioButtonChoice" />
        <label for="one">Hobby</label>
        <input type="radio" id="two" value="2" v-model="radioButtonChoice" />
        <label for="two">Företag</label>
        {{ priceChoice }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const priceChoice = computed(() => store.state.priceChoice);

const radioButtonChoice = ref(priceChoice.value ?? 0);
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");
</script>

<style scoped lang="scss">
.radio-input {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.radio-input * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.radio-input label {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0px 20px;
  width: 220px;
  cursor: pointer;
  height: 50px;
  position: relative;
}

.radio-input label::before {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 220px;
  height: 45px;
  z-index: -1;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  border-radius: 10px;
  border: 2px solid transparent;
}
.radio-input label:hover::before {
  transition: all 0.2s ease;
  background-color: #2a2e3c;
}

.radio-input .label:has(input:checked)::before {
  background-color: #2d3750;
  border-color: #435dd8;
  height: 50px;
}
.radio-input .label .text {
  color: red;
}

.radio-input .label input[type="radio"] {
  background-color: #202030;
  appearance: none;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.radio-input .label input[type="radio"]:checked {
  background-color: #435dd8;
  -webkit-animation: puls 0.7s forwards;
  animation: pulse 0.7s forwards;
}

.radio-input .label input[type="radio"]:before {
  content: "";
  width: 6px;
  height: 6px;
  border-radius: 50%;
  transition: all 0.1s cubic-bezier(0.165, 0.84, 0.44, 1);
  background-color: #fff;
  transform: scale(0);
}

.radio-input .label input[type="radio"]:checked::before {
  transform: scale(1);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
}
</style>

<script setup></script>
