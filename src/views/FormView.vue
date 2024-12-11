<template>
  <div class="mainDiv">
    <h1 class="title">
      Kontakta <span class="companyName">Wolkano Solutions</span><br />
      Din partner för smidiga offertlösningar
    </h1>
    <p class="description">
      Har du frågor om våra automatiserade offerttjänster, eller vill du veta
      hur vi kan hjälpa ditt företag att spara tid och öka effektiviteten? Vi
      finns här för att hjälpa dig! Fyll i formuläret nedan, så återkommer vi
      till dig så snart som möjligt. Hos Wolkano Solutions är vår ambition att
      göra offertprocessen enkel, snabb och skräddarsydd för dina behov. Tveka
      inte att höra av dig – vi ser fram emot att samarbeta med dig!
    </p>
    <form class="form">
      <div>
        <input type="text" id="fname" name="fname" placeholder="Förnamn" />
        <input type="text" id="lname" name="lname" placeholder="Efternamn" />
      </div>
      <input
        type="text"
        id="companyName"
        name="companyName"
        placeholder="Företagsnamn" />
      <div>
        <input type="tel" id="phone" name="phone" placeholder="Telefonnummer" />
        <input type="email" id="email" name="email" placeholder="Email" />
      </div>
      <div class="infoDiv">
        <textarea type="text" id="info" name="info" placeholder="Information" />
      </div>
      <button>Skicka in</button>
    </form>
  </div>
</template>

<script setup></script>
<style lang="scss" scoped>
.mainDiv {
  background-color: #0b0033;
  padding-bottom: 100px;
  .title {
    font-size: 32px;
    margin-bottom: 20px;
    font-weight: 600;
    .companyName {
      color: #fe9d01;
    }
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
    gap: 20px;
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
