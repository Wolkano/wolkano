<template>
  <div class="footer">
    <div>
      <img class="logo" src="../assets/newLogoWhite.png" />
      <p>
        Trygghet i varje offertförfrågan.<br />
        En partner du kan lita på.
      </p>
    </div>
    <p>© Wolkano 2024</p>
    <p>Innovativa lösningar för smidigare offertförfrågningar.</p>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.footer {
  padding: 15px 0px;
  width: 100%;
  background-color: #3d3b30;
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
    p {
      font-size: 20px;
    }
  }
  .logo {
    width: 200px;
    margin-bottom: 50px;
    margin-top: 30px;
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
    }
  }
  .subFooter {
    padding: 10px 0px;
  }
}
</style>
