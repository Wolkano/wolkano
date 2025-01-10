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
    <div class="kunder">
      <h2>Kolla gärna in någon av våra kunders sidor</h2>
      <div class="kund bp">
        <h3>Byggproffs skåne</h3>
        <a href="https://www.byggproffsskane.se/" target="_blank"
          ><img src="../assets/byggproffs.webp"
        /></a>
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
    margin-top: 50px;
    margin-bottom: 100px;
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
        color: $orange;
      }
      p {
        width: 70%;
      }
      .kontakta {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        p {
          border-top: 2px solid $orange;
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
