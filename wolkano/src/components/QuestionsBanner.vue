<template>
  <div class="row thirdRow">
    <h2>BRA TITEL</h2>
    <div class="questionsContainer">
      <p>TEXT SOM HENKE FÅR LÄGGA IN</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.thirdRow {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
  padding-right: 20px;
  background-image: url("../assets/placeholderbild.jpg");
  background-size: cover;
  background-position: center;
  position: relative;

  h2 {
    color: rgb(255, 255, 255, 0);
  }
  p {
    color: rgb(255, 255, 255, 0);
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($background-color, 0.9);
    z-index: 1;
  }
  * {
    position: relative;
    z-index: 2;
  }

  .questionsContainer {
    display: flex;
    flex-direction: row;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }

  h2 {
    width: 100%;
    padding-bottom: 30px;
    text-transform: uppercase;
    font-weight: 700;
  }
  .button {
    font-weight: 600;
    width: fit-content;
  }
}

@media (max-width: 768px) {
  .thirdRow {
    flex-direction: column;
    gap: 30px;
    padding: 20px 30px;
    h2 {
      padding: 0;
      margin: 0;
    }
    .questionsContainer {
      flex-direction: column;
      gap: 30px;
      text-align: left;
      p {
        font-size: 20px;
      }
    }
  }
}
</style>
