<template>
  <div class="footer">
    <div>
      <img
        class="logo"
        src="../assets/wolkano-hq-logo.png"
        alt="Wolkano HQ logga med 'Wolkano' i orange text på vit bakgrund och 'HQ' i vit text på orange bakgrund"
      />
      <p class="information">
        Wolkano erbjuder smarta och effektiva lösningar för automatiserade
        offerter som hjälper företag att spara tid och öka lönsamheten. Med
        fokus på kvalitet, innovation och schyssta värderingar strävar vi efter
        att förenkla din vardag och skapa långsiktigt värde. Vi är din pålitliga
        partner för en smidigare affärsprocess.
      </p>
      <div class="contactInfo">
        <a href="">076-1778821</a>
        <p>|</p>
        <a href="">info@wolkano.se</a>
      </div>
      <div class="subFooter">
        <p>© Wolkano 2024</p>
        <p>Innovativa lösningar för smidigare offertförfrågningar.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.footer {
  padding: 15px 0px;
  width: 100%;
  background-color: $detail;
  //background-color: #3d3b30;
  min-height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    .information {
      font-size: 16px;
      width: 50%;
    }
    .contactInfo {
      display: flex;
      flex-direction: row;
      a {
        color: $secondary;
        font-size: 40px;
      }
      p {
        color: $secondary;
        font-size: 40px;
      }
    }
    .subFooter {
      display: flex;
      flex-direction: row;
      border-top: 2px solid $secondary;
      width: 60%;
      padding-top: 20px;
    }
  }
  .logo {
    padding-top: 50px;
    width: 200px;
  }
}

@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    padding: 20px 20px;
    gap: 20px;
    div {
      h4 {
        font-size: $font-size-mobile-h4;
      }
      .information {
        width: 100%;
      }
      .contactInfo {
        a {
          font-size: 20px;
        }
        p {
          font-size: 20px;
        }
      }
      .subFooter {
        width: 100%;
      }
    }
  }
  .subFooter {
    padding: 10px 0px;
  }
}
</style>
