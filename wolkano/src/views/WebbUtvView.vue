<template>
  <div class="banner">
    <p>Köp <span class="website">hemsida</span> från WOLKANO</p>
  </div>
  <div class="webbUtv">
    <div class="titel">
      <h1>Skräddarsydda Hemsidor</h1>
      <p>Designade för dina unika behov</p>
    </div>
    <div class="body">
      <div class="info" v-motion-pop-visible-once :duration="700" :delay="100">
        <p>
          Vi erbjuder professionell webbutveckling och hjälper dig att skapa
          moderna och användarvänliga hemsidor. Oavsett om du behöver en helt ny
          hemsida eller vill redigera och förbättra en befintlig, står vi redo
          att leverera lösningar som anpassas efter dina önskemål. Vårt mål är
          att ge dig en digital närvaro som verkligen representerar dig eller
          ditt företag – snabbt, smidigt och med hög kvalitet. <br />
          <br />För en ännu smidigare start erbjuder vi
          <a href="#/OfferMe" class="offerMe">OfferMe</a>, vår automatiserade
          offertförfrågningstjänst, som gör det enkelt för dig att snabbt få en
          skräddarsydd offert baserad på dina behov. Hör av dig till oss för att
          diskutera dina idéer och hur vi kan hjälpa dig att förverkliga dem!
        </p>
        <div class="kontakta">
          <p>Behöver du en hemsida? Tveka inte att kontakta oss</p>
          <div class="button">
            <router-link to="/form" class="buttonLink"
              >Kontakta oss</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <!--
    <div class="kunder">
      <h2>Kolla gärna in någon av våra kunders sidor</h2>
      <div class="kund bp">
        <h3>Byggproffs skåne</h3>
        <a href="https://www.byggproffsskane.se/" target="_blank"
          ><img src="../assets/byggproffs.webp"
        /></a>
      </div>
    </div>
    -->
  </div>
  <div class="infoBanner">
    <div>
      <h2 class="title">Responsiv hemsida</h2>
      <p class="subTitle">Snabbt, Enkelt & Prisvärt</p>
      <p class="info">
        När du bestämt dig för att köpa en hemsida till ditt företag så hjälper
        en av våra erfarna webbdesigners dig under hela uppbyggnaden av en
        responsiv hemsida, från start till mål. Vi levererar en prisvärd hemsida
        och tillgång till vårt enkla men kraftfulla CMS-verktyg, Bliss CMS.
        Verktyget är användarvänligt och kräver inga som helst kunskaper i kod.
        Du kommer igång direkt och kan göra ändringar av innehållet, lekande
        lätt och helt utan förkunskaper.
      </p>
    </div>
    <div>
      <h2 class="title">Fri support</h2>
      <p class="subTitle">Experter att rådfråga</p>
      <p class="info">
        Hos oss kan du känna dig trygg! Skulle du ha frågor eller behöva hjälp
        efter att du köpt en hemsida av oss så finns alltid vår duktiga support
        tillgänglig på telefon och mail. Vi är tillgängliga vardagar 08:00 -
        16:00 för att svara på dina frågor. Låt oss bli ditt bollplank och din
        personliga webbyrå. Vår erfarenhet blir till din styrka. Vi erbjuder
        även uppsättning och konvertering till effektiva maillösningar. Läs mer
        här!
      </p>
    </div>
  </div>
</template>

<script>
//import CompanyBanner from "@/components/CompanyBanner.vue";
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.banner {
  position: relative;
  background-image: url("../assets/placeholderbild.jpg");
  background-size: cover;
  background-position: center;
  height: 75vh;
  padding-top: 300px;
  overflow: hidden;
  z-index: -5;

  // Dark overlay
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
    color: white;
  }
  p {
    text-transform: uppercase;
    font-weight: 700;
    font-size: x-large;
    .website {
      color: $orange;
    }
  }
}

.webbUtv {
  background-color: #f7f9fa;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  color: black;
  padding-top: 50px;

  .titel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding-bottom: 30px;
    h1 {
      font-weight: 600;
      text-transform: uppercase;
    }
    p {
      font-weight: 600;
      text-transform: uppercase;
      border-bottom: $orange solid 3px;
      width: fit-content;
      margin: auto;
    }
  }
  .body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 100px;
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      h2 {
        color: $orange;
      }
      .offerMe {
        color: $orange;
        font-weight: 600;
      }
      p {
        width: 100%;
      }
      .kontakta {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        p {
          padding-top: 10px;
          margin-top: 10px;
        }
        .button {
          font-weight: 600;
          width: fit-content;
          background-color: $orange;
          color: white;
          &:hover {
            background-color: $darkOrange;
          }
        }
      }
    }
  }
  .kunder {
    background-color: white;
    width: 100%;
    margin-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    h2 {
      width: 100%;
      color: black;
    }
    .kund {
      img {
        padding: 10px;
        background-color: $background-color;
        border-radius: 10px;
        -webkit-transition: background-color 300ms linear,
          box-shadow 200ms linear;
        -ms-transition: background-color 300ms linear, box-shadow 200ms linear;
        transition: background-color 300ms linear, box-shadow 200ms linear;
        &:hover {
          background-color: $orange !important;
          box-shadow: 0px 3px 3px 1px rgb(0, 0, 0, 0.2);
        }
      }
    }
  }
}

.infoBanner {
  background-color: #333333;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 75px 0px;
  gap: 50px;
  div {
    width: 30%;
    text-align: left;
    .title {
      text-transform: uppercase;
      font-weight: 700;
    }
    .subTitle {
      text-transform: uppercase;
      font-weight: 700;
      color: $orange;
    }
  }
}

@media (max-width: 768px) {
  .banner {
    height: 50vh;
    padding-top: 250px;
  }
  .webbUtv {
    .titel {
      h1 {
        font-size: $font-size-mobile-h1;
      }
    }
    .body {
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
  .infoBanner {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      width: 90%;
    }
  }
}
</style>
