<template>
  <div class="banner">
    <p>Köp <span class="website">hemsida</span> från WOLKANO</p>
  </div>
  <svg class="lavaUp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#f7f9fa"
      fill-opacity="1"
      d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,117.3C672,107,768,149,864,149.3C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    ></path>
  </svg>
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
            <router-link to="/kontakta" class="buttonLink"
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
    <div v-motion-slide-visible-once-bottom :duration="500" :delay="300">
      <h2 class="title">Responsiv hemsida</h2>
      <p class="subTitle">Snabbt, Smidigt & Prisvärt</p>
      <p class="info">
        När du väljer att köpa en hemsida från WOLKANO får du en skräddarsydd
        lösning som passar ditt företag perfekt. Våra erfarna webbdesigners
        guidar dig genom hela processen – från idé till färdig, responsiv
        hemsida. Vi levererar prisvärda hemsidor tillsammans med vårt
        användarvänliga och kraftfulla CMS-verktyg, Bliss CMS. Med Bliss CMS kan
        du enkelt uppdatera och hantera din hemsida utan några förkunskaper i
        kod. Du kommer igång direkt och kan anpassa innehållet helt efter dina
        behov.
      </p>
    </div>
    <div v-motion-slide-visible-once-bottom :duration="500" :delay="600">
      <h2 class="title">Fri support</h2>
      <p class="subTitle">Din Personliga Webbyrå</p>
      <p class="info">
        Med WOLKANO vid din sida kan du känna dig trygg. Vår kunniga support
        finns alltid här för dig via telefon och e-post, vardagar mellan
        08:00–16:00. Oavsett om du har frågor eller behöver teknisk hjälp står
        vi redo att stötta dig. Vi vill vara mer än bara en leverantör – vi vill
        vara din digitala partner. Utöver hemsidor erbjuder vi även hjälp med
        effektiva maillösningar och teknisk uppsättning. Hör av dig till oss och
        låt vår expertis bli din styrka!
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
  height: 60vh;
  //padding-top: 100px;
  overflow: hidden;
  z-index: -5;
  p {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($primary, 0.9);
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
      color: $detail;
    }
  }
}
.lavaUp {
  margin-bottom: -1px;
  margin-top: -400px;
  width: 100%;
}
.webbUtv {
  background-color: $secondary;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
  color: black;

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
      border-bottom: $detail solid 3px;
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
        color: $detail;
      }
      .offerMe {
        color: $detail;
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
          background-color: $detail;
          color: white;
          &:hover {
            background-color: $darkDetail;
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
        background-color: $primary;
        border-radius: 10px;
        -webkit-transition: background-color 300ms linear,
          box-shadow 200ms linear;
        -ms-transition: background-color 300ms linear, box-shadow 200ms linear;
        transition: background-color 300ms linear, box-shadow 200ms linear;
        &:hover {
          background-color: $detail !important;
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
      color: $detail;
    }
  }
}

@media (max-width: 768px) {
  .banner {
    height: 50vh;
    padding-top: 100px;

    p {
      display: none;
    }
  }
  .lavaUp {
    margin-top: -100px;
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
