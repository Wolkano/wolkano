<template>
  <div class="home">
    <div class="mainDiv">
      <div class="intro">
        <h1>Förenkla din offertförfrågan med vårt automatiserade system</h1>
        <br />
        <p>
          Välkommen till <span class="company_name">Wolkano Solutions</span>,
          din smarta lösning för snabba och enkla offertförfrågningar! Vårt
          automatiserade system gör det möjligt för företag att hantera
          kundförfrågningar effektivt och smidigt. Genom vårt användarvänliga
          formulär kan dina kunder snabbt fylla i sina behov och få en anpassad
          offert – helt utan krångel. Med vårt system sparar du tid, ökar din
          effektivitet och ger dina kunder en förstklassig upplevelse.
        </p>
      </div>
      <div class="steps">
        <h2>Så här fungerar det:</h2>
        <br />
        <ol>
          <li>Kunder fyller i offertformuläret online.</li>
          <br />
          <li>
            Vårt system samlar all information och skickar en anpassad offert
            automatiskt.
          </li>
          <br />
          <li>
            Du får alla detaljer och kan fokusera på att leverera bästa möjliga
            tjänst!
          </li>
        </ol>
        <p>
          Testa vårt system idag och upplev hur enkelt det kan vara att hantera
          förfrågningar!
        </p>
        <br />

        <router-link to="/form">
          <button class="button-56" role="button">
            Begär en offert nu
          </button></router-link
        >
      </div>
    </div>
    <div class="info">
      <div>
        <img />
        <h1>Testar</h1>
        <p>
          Ett CRM-system ger dig en central databas för att lagra och hantera
          detaljerad kundinformation på ett strukturerat sätt. Med ett
          CRM-system blir det enkelt att hålla reda på alla dina
          kontaktuppgifter, kommunikationshistoriken och dina kunders
          preferenser.
        </p>
      </div>
      <div>
        <img />
        <h1>Testar</h1>
        <p>
          Ett CRM-system ger dig en central databas för att lagra och hantera
          detaljerad kundinformation på ett strukturerat sätt. Med ett
          CRM-system blir det enkelt att hålla reda på alla dina
          kontaktuppgifter, kommunikationshistoriken och dina kunders
          preferenser.
        </p>
      </div>
      <div>
        <img />
        <h1>Testar</h1>
        <p>
          Ett CRM-system ger dig en central databas för att lagra och hantera
          detaljerad kundinformation på ett strukturerat sätt. Med ett
          CRM-system blir det enkelt att hålla reda på alla dina
          kontaktuppgifter, kommunikationshistoriken och dina kunders
          preferenser.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss" scoped>
.logo {
  width: 350px;
}

.mainDiv {
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: larger;
  color: black;
}
.intro {
  width: 45%;
  h1 {
  }
  .company_name {
    color: rgb(254, 157, 1);
    font-weight: 900;
  }
}
.steps {
  width: 45%;
}
.info {
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: center;
  gap: 50px;
  h1 {
    color: rgb(254, 157, 1);
  }
}
</style>
