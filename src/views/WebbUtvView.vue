<template>
  <div class="webbUtv">
    <div class="titel">
      <h1>Webbutveckling</h1>
    </div>
    <div class="infoDiv">
      <img src="../assets/Förnamn.gif" />
      <div class="info">
        <h2>Hemsidor som passar dina behov</h2>
        <p>
          Vi erbjuder professionell webbutveckling och hjälper dig att skapa
          moderna och användarvänliga hemsidor. Oavsett om du behöver en helt ny
          hemsida eller vill redigera och förbättra en befintlig, står vi redo
          att leverera lösningar som anpassas efter dina önskemål. Vårt mål är
          att ge dig en digital närvaro som verkligen representerar dig eller
          ditt företag – snabbt, smidigt och med hög kvalitet. Hör av dig till
          oss för att diskutera dina idéer och hur vi kan hjälpa dig att
          förverkliga dem!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
//import CompanyBanner from "@/components/CompanyBanner.vue";
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.webbUtv {
  background: #{$gradient-background};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  .titel {
    width: 100%;
    padding-bottom: 30px;
    h1 {
      font-size: #{$font-size-h1};
      font-weight: 700;
      margin-left: auto;
      margin-right: auto;
      width: fit-content;
      border-bottom: 2px solid #fe9d01;
    }
  }
  .infoDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
    img {
      width: 30%;
      height: min-content;
      border-style: solid;
      border-width: 5px;
      border-color: #fe9d01;
      border-radius: 20px;
      margin-left: auto;
    }
    .info {
      display: flex;
      flex-direction: column;

      align-items: center;
      width: 50%;
      margin-right: auto;
      h2 {
        font-size: #{$font-size-h2};
      }
      p {
        width: 70%;
        font-size: #{$font-size-p};
      }
    }
  }
}
</style>
