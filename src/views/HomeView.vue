<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const copy = computed(() => store.state.copy.home);
</script>

<template>
  <div class="home">
    <div class="mainDiv">
      <div class="intro">
        <h1>{{ copy.title }}</h1>
        <p>
          {{ copy.description1 }}
          <span class="company_name">{{ copy.companyName }}</span
          >, {{ copy.description2 }}
        </p>
        <div class="buttons">
          <router-link to="/about" class="button">Om oss</router-link>
          <router-link to="/form" class="button">Kontakta oss</router-link>
        </div>
      </div>

      <div class="image">
        <img
          class="businessManImage"
          src="../assets/—Pngtree—happy corporate business professional one_13504468.png" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.home {
  background: #{$gradient-background};

  .mainDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    flex-wrap: wrap;

    .intro {
      text-align: left;
      max-width: 48rem;
      width: 30%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      p {
        font-size: 24px;

        .company_name {
          color: #fe9d01;
          font-weight: 800;
        }
      }

      .buttons {
        display: flex;
        gap: 50px;
      }
    }

    .image .businessManImage {
      width: 800px;
      height: auto;
    }
  }
}
</style>
