<template>
  <div class="footer">
    <svg
      id="wave"
      style="transform: rotate(0deg); transition: 0.3s"
      viewBox="0 0 1440 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class="lavaUp"
    >
      <defs>
        <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
          <stop stop-color="rgba(255, 85, 0, 1)" offset="0%"></stop>
          <stop stop-color="#f38e5b" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        style="transform: translate(0, 0px); opacity: 1"
        fill="url(#sw-gradient-1)"
        d="M0,70L26.7,66.7C53.3,63,107,57,160,46.7C213.3,37,267,23,320,16.7C373.3,10,427,10,480,23.3C533.3,37,587,63,640,68.3C693.3,73,747,57,800,51.7C853.3,47,907,53,960,56.7C1013.3,60,1067,60,1120,50C1173.3,40,1227,20,1280,15C1333.3,10,1387,20,1440,30C1493.3,40,1547,50,1600,48.3C1653.3,47,1707,33,1760,36.7C1813.3,40,1867,60,1920,56.7C1973.3,53,2027,27,2080,13.3C2133.3,0,2187,0,2240,8.3C2293.3,17,2347,33,2400,35C2453.3,37,2507,23,2560,16.7C2613.3,10,2667,10,2720,16.7C2773.3,23,2827,37,2880,43.3C2933.3,50,2987,50,3040,45C3093.3,40,3147,30,3200,28.3C3253.3,27,3307,33,3360,33.3C3413.3,33,3467,27,3520,31.7C3573.3,37,3627,53,3680,60C3733.3,67,3787,63,3813,61.7L3840,60L3840,100L3813.3,100C3786.7,100,3733,100,3680,100C3626.7,100,3573,100,3520,100C3466.7,100,3413,100,3360,100C3306.7,100,3253,100,3200,100C3146.7,100,3093,100,3040,100C2986.7,100,2933,100,2880,100C2826.7,100,2773,100,2720,100C2666.7,100,2613,100,2560,100C2506.7,100,2453,100,2400,100C2346.7,100,2293,100,2240,100C2186.7,100,2133,100,2080,100C2026.7,100,1973,100,1920,100C1866.7,100,1813,100,1760,100C1706.7,100,1653,100,1600,100C1546.7,100,1493,100,1440,100C1386.7,100,1333,100,1280,100C1226.7,100,1173,100,1120,100C1066.7,100,1013,100,960,100C906.7,100,853,100,800,100C746.7,100,693,100,640,100C586.7,100,533,100,480,100C426.7,100,373,100,320,100C266.7,100,213,100,160,100C106.7,100,53,100,27,100L0,100Z"
      ></path>
    </svg>
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
        <a href="tel:+46709435527">070-943 55 27</a>
        <p>|</p>
        <a href="mailto:info@wolkano.se">info@wolkano.se</a>
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
  .lavaUp {
    background-color: $secondary;
    margin-top: -20px;
    path {
      filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
    }
  }
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
    .lavaUp {
      background-color: $secondary;
      width: 100vw;
      stroke: transparent;
      overflow: hidden;
    }
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
        flex-direction: column-reverse;
        width: 100%;
      }
    }
  }
  .subFooter {
    padding: 10px 0px;
  }
}
</style>
