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
          <router-link to="/test" class="button">Kontakta oss</router-link>
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

<style lang="scss">
.home {
  background-color: #28a2ff;

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

      h1 {
        font-size: 48px;
        font-weight: bold;
      }

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

        .button {
          background-color: white;
          border-radius: 100px;
          color: black;
          padding: 10px 20px;
          transition: background-color 200ms linear;

          &:hover {
            background-color: rgb(231, 231, 231);
          }
        }
      }
    }

    .image .businessManImage {
      width: 800px;
      height: auto;
    }
  }
}
</style>
