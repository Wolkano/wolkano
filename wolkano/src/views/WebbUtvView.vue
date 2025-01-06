<template>
  <div class="webbUtv">
    <div class="titel">
      <h1>Webbutveckling</h1>
    </div>
    <div class="body">
      <img
        src="../assets/placeholderbild.jpg"
        v-motion-pop-visible-once
        :duration="700"
        :delay="50"
      />
      <div class="info" v-motion-pop-visible-once :duration="700" :delay="100">
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
        <div class="kontakta">
          <p>Behöver du en hemsida? Tveka inte att kontakta oss</p>
          <div class="button">
            <router-link to="/form" class="button">Kontakta oss</router-link>
          </div>
        </div>
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
  background: #{$background-color};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;

  .titel {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 30px;
    h1 {
      font-size: #{$font-size-h1};
      font-weight: 700;
      border-bottom: 2px solid #fe9d01;
    }
  }
  .body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
      width: 35%;
      border-radius: 5px;
    }
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      h2 {
        font-size: #{$font-size-h2};
      }
      p {
        width: 70%;
        font-size: #{$font-size-p};
      }
      .kontakta {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        p {
          border-top: 2px solid white;
          padding-top: 10px;
          margin-top: 10px;
        }
        .button {
          font-weight: 600;
          width: fit-content;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .webbUtv {
    .titel {
      h1 {
        font-size: $font-size-mobile-h1;
      }
    }
    .infoDiv {
      flex-direction: column-reverse;
      justify-content: center;
      gap: 50px;

      img {
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
      }

      .info {
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;

        h2 {
          width: 100%;
          font-size: $font-size-mobile-h3;
          text-align: left;
          font-weight: 600;
        }
        p {
          width: 100%;
          text-align: left;
        }
      }
    }
  }
}
</style>
