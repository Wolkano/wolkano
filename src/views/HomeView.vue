<template>
  <div class="home">
    <div class="mainDiv flex flex-row items-center mt-10 space-y-16 gap-10">
      <div class="intro text-center md:text-left max-w-3xl">
        <h1 class="text-3xl font-bold text-gray-800">
          Förenkla din offertförfrågan med vårt automatiserade system
        </h1>
        <br />
        <p class="text-lg text-gray-700">
          Välkommen till
          <span class="company_name text-orange-500 font-extrabold">
            Wolkano Solutions</span
          >, din smarta lösning för snabba och enkla offertförfrågningar! Vårt
          automatiserade system gör det möjligt för företag att hantera
          kundförfrågningar effektivt och smidigt. Genom vårt användarvänliga
          formulär kan dina kunder snabbt fylla i sina behov och få en anpassad
          offert – helt utan krångel. Med vårt system sparar du tid, ökar din
          effektivitet och ger dina kunder en förstklassig upplevelse.
        </p>
      </div>

      <div class="steps max-w-2xl text-center md:text-center">
        <h2 class="text-2xl font-semibold text-gray-800">
          Så här fungerar det:
        </h2>
        <br />
        <ol class="list-decimal list-inside text-lg text-gray-700 space-y-2">
          <li>Kunder fyller i offertformuläret online.</li>
          <li>
            Vårt system samlar all information och skickar en anpassad offert
            automatiskt.
          </li>
          <li>
            Du får alla detaljer och kan fokusera på att leverera bästa möjliga
            tjänst!
          </li>
        </ol>
        <p class="mt-4 text-lg text-gray-700">
          Testa vårt system idag och upplev hur enkelt det kan vara att hantera
          förfrågningar!
        </p>
        <br />
        <router-link to="/form">
          <button
            class="button-56 bg-orange-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-orange-600 focus:outline-none">
            Begär en offert nu
          </button>
        </router-link>
      </div>
    </div>
    <PricePlans />
    <div class="info flex flex-col md:flex-row justify-center gap-12 mt-10 p-4">
      <div class="text-center max-w-xs">
        <img />
        <h1 class="text-xl font-semibold text-orange-500">Testar</h1>
        <p class="text-gray-700 mt-2">
          Ett CRM-system ger dig en central databas för att lagra och hantera
          detaljerad kundinformation på ett strukturerat sätt. Med ett
          CRM-system blir det enkelt att hålla reda på alla dina
          kontaktuppgifter, kommunikationshistoriken och dina kunders
          preferenser.
        </p>
      </div>
      <div class="text-center max-w-xs">
        <img />
        <h1 class="text-xl font-semibold text-orange-500">Testar</h1>
        <p class="text-gray-700 mt-2">
          Ett CRM-system ger dig en central databas för att lagra och hantera
          detaljerad kundinformation på ett strukturerat sätt. Med ett
          CRM-system blir det enkelt att hålla reda på alla dina
          kontaktuppgifter, kommunikationshistoriken och dina kunders
          preferenser.
        </p>
      </div>
      <div class="text-center max-w-xs">
        <img />
        <h1 class="text-xl font-semibold text-orange-500">Testar</h1>
        <p class="text-gray-700 mt-2">
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

<script setup>
import PricePlans from "@/components/PricePlans.vue";
</script>
