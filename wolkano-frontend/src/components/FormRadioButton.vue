<template>
  <div
    class="plan-card"
    :class="{
      'plan-card--active': activePlan === title,
    }"
    tabindex="0"
    @click="updateActivePlan"
    @keydown.space="updateActivePlan"
  >
    <div class="plan-card-header">
      <h1 class="plan-card-title">
        {{ title }}
      </h1>
      <div v-if="activePlan === title">
        <svg
          class="checkmark-icon"
          width="200px"
          height="200px"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="checkmark-outline" fill-rule="nonzero">
              <path
                d="M31.1442786,171.840796 C5.2779518,146.858262 -5.09578082,109.862896 4.01023318,75.0738981 C13.1162472,40.2848999 40.2848999,13.1162472 75.0738981,4.01023318 C109.862896,-5.09578082 146.858262,5.2779518 171.840796,31.1442786 C209.549474,70.1869539 209.010186,132.247241 170.628714,170.628714 C132.247241,209.010186 70.1869539,209.549474 31.1442786,171.840796 Z"
                id="Shape"
                fill="#fe9d01"
              ></path>
              <polygon
                id="Path"
                fill="white"
                points="66.6666667 89.4527363 89.5522388 112.437811 132.338308 69.6517413 146.268657 83.7810945 89.5522388 140.298507 52.7363184 103.482587 66.6666667 89.3532338"
              ></polygon>
            </g>
          </g>
        </svg>
      </div>
    </div>

    <div class="plan-card-body">
      <span class="plan-gigs">{{ description }}</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  title: String,
  description: String,
  planDollars: Number,
  activePlan: String,
});

const emit = defineEmits(["update:activePlan"]);

const updateActivePlan = () => {
  emit("update:activePlan", props.title); // Emits the event to update the activePlan
};
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";
.plan-card {
  width: 12rem;
  background-color: $secondary;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: background-color 0.3s, box-shadow 0.3s;
  text-align: left;

  &--active {
    background-color: $lightDetail;
    box-shadow: 0 0 0 2px $detail;
  }

  &:hover,
  &:focus {
    background-color: $lightDetail;
    box-shadow: 0 0 0 2px $detail;
  }

  &:focus {
    outline: none;
  }
}

.plan-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.plan-card-title {
  text-transform: uppercase;
  font-size: 1rem;
  letter-spacing: 0.05em;
  color: #2c3e50;
  margin: 0.5rem 0;
  font-weight: 600;
  color: #2c3e50;
}

.checkmark-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.plan-card-body {
  margin-bottom: 0.25rem;
  color: #2c3e50;
}

.plan-gigs {
  font-size: 1rem;
  text-align: left;
}

@media (max-width: 768px) {
  .plan-card {
    padding: 1rem;
    margin-bottom: 0.5rem;
    .plan-card-header {
      margin-bottom: 0;
    }

    .plan-card-title {
      margin: 0;
    }
  }
}
</style>
