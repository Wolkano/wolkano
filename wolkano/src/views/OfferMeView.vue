<template>
  <div class="offerMe">
    <div class="intro">
      <div class="titel">
        <h1>OfferMe<span></span></h1>
      </div>
      <div class="col">
        <div class="animation">
          <img src="../assets/Unknown.jpg" />
        </div>
        <div class="section">
          <h2>Offerter</h2>
          <p class="infoText">
            OfferMe är tjänsten som revolutionerar hur offerter skapas. Med vår smarta och användarvänliga plattform kan kunder snabbt och enkelt få en skräddarsydd offert direkt efter att de har fyllt i alla nödvändiga uppgifter.
          </p>
        </div>
      </div>
      <div class="col">
        <div class="section">
          <h2>Heading 2</h2>
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
        <div class="animation">
          <img src="../assets/Förnamn.gif" />
        </div>
      </div>
      <div class="col">
        <div class="animation">
          <img src="../assets/testProfilePicture.png" />
        </div>
        <div class="section">
          <h2>Heading 2</h2>
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


    .animation {
      width: 35%;
      margin: 30px;
      padding: 30px;

      img{
      border-style: solid;
      border-width: 5px;
      border-color: #fe9d01;
      border-radius: 20px;
      }

    }
    .section{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 35%;

      p {
      font-size: $font-size-p;
      width: 70%;
    }
    h2{
      font-size: $font-size-h2;
      color: #fe9d01;
      font-weight: 700;
    }
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
      .section {
        p {
          width: 100%;
          padding: 20px;
        }
      }
      .animation {
        width: 100%;
        padding: 0px;
      }
    }
  }
}
</style>
