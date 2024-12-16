<template>
  <div class="offerMe">
    <div class="intro">
      <div class="titel">
        <h1>OfferMe<span></span></h1>
      </div>
      <div class="col">
        <div class="animation">
          <img src="../assets/testProfilePicture.png" />
        </div>
        <p class="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="col">
        <p class="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div class="animation">
          <img src="../assets/testProfilePicture.png" />
        </div>
      </div>
      <div class="col">
        <div class="animation">
          <img src="../assets/testProfilePicture.png" />
        </div>
        <p class="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>

    <CompanyBanner />
  </div>
</template>

<script setup>
import CompanyBanner from "@/components/CompanyBanner.vue";
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.offerMe {
  background: #{$gradient-background};

  .intro {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding-bottom: 100px;
  }
  .titel {
    width: 100%;
    display: flex;
    justify-content: center;
    h1 {
      font-weight: 700;
      width: fit-content;
      border-bottom: 2px solid #fe9d01;
      span {
        color: #fe9d01;
      }
    }
  }

  .col {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p {
      font-size: $font-size-p;
      width: 35%;
      padding: 50px;
    }
    .animation {
      width: 35%;
      padding: 100px;
    }
  }
  .col:nth-of-type(3) {
    background-color: white;
    color: black;
  }
}

@media (max-width: 768px) {
  .offerMe {
    .col {
      flex-direction: column;
      p {
        width: 100%;
      }
      .animation {
        width: 100%;
        padding: 0px;
      }
    }
  }
}
</style>
