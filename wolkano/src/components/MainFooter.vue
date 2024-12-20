<template>
  <div class="footer">
    <div>
      <h4>Wolkano</h4>
      <p>
        Trygghet i varje offertförfrågan.<br />
        En partner du kan lita på.
      </p>
    </div>
    <div>
      <h4>Tjänster</h4>
      <p>Lite text om företaget</p>
      <p>Testar igen</p>
    </div>
    <div>
      <h4>Kontakt</h4>
      <p>
        Har du frågor eller vill veta mer om våra tjänster? Hör av dig till oss!
        <ul>
          <li> E-post: <u><a href="mailto:info@wolkano.se">info@wolkano.se</a></u></li>
          <li>Telefon: <u><a href="tel:0761778821">+46 (0)123-456 789</a></u></li>
          <li>Adress: <u><a href="https://maps.app.goo.gl/6d3BPb9pY1EBcEy6A" target="_blank">Wolkano AB
            Företagsgatan 12 123 45 Stockholm, Sverige</a></u></li>
        </ul>
      </p>
    </div>
  </div>
  <div class="subFooter">
    <p>
      © Wolkano 2024
    </p>
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
  justify-content: space-around;
  align-items: flex-start;
  div {
    text-align: left;
    h4 {
      border-width: 0px 0px 1px 0px;
      border-style: solid;
      border-color: white;
      padding-bottom: 5px;
      font-weight: 600;
    }
  }
}
.subFooter {
  padding: 15px 0px;
  background-color: #3d3b30;
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
