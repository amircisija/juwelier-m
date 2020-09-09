<template>
  <section class="about__us--section" id="ueber-uns">
    <b-container fluid>
      <b-row>
        <b-col cols="7" class="padding-80">
          <h3 class="upper__title" data-aos="fade-up" data-aos-delay="100">
            Ihr Fachgeschäft für Goldschmuck und Uhren
          </h3>
          <h2 class="mb-1" data-aos="fade-up" data-aos-delay="150">
            Juwelier Melis in Bad Säckingen
          </h2>
          <hr class="hr__1 mb-5" data-aos="fade-up" data-aos-delay="180" />
          <p data-aos="fade-up" data-aos-delay="200">
            <span class="st-1">Gravuren</span> - Sie können auch Ihre
            Ringe,Anhänger,Armbänder bei uns gravieren lassen.Mit zum Beispiel
            Namen,Zeichen oder auch einem Datum.
          </p>

          <p data-aos="fade-up" data-aos-delay="250">
            <span class="st-1">Trauringe</span> - Als Modell zum anschauen haben
            wir 4000 Stück vor Ort.Dennoch können Sie sich ihren Traumtrauring
            bei uns zusammenstellen lassen egal ob Gold, Silber oder auch
            rhodiniert. Matt oder glänzend Sie können sich alles anschauen und
            sich entscheiden.
          </p>

          <p data-aos="fade-up" data-aos-delay="300">
            <span class="st-1">Uhren</span> - Wir verkaufen Ihnen Uhren und wir
            wechseln Ihnen gerne die Batterie ihrer Uhr und obendrein auch ihr
            Uhrenband was Sie sich hier vor Ort in mehreren Farben&Mustern neu
            aussuchen können.
          </p>

          <p class="mb-5" data-aos="fade-up" data-aos-delay="350">
            <span class="st-1">Anfertigungen</span> - Nach Wünsch können wir
            Anfertigungen aller Art anfertigen lassen.
          </p>

          <nuxt-link
            class="btn btn__1"
            data-aos="fade-up"
            data-aos-delay="400"
            :to="{ path: '/', hash: '#kontakt' }"
            >Kontakt & Anfahrt</nuxt-link
          >
        </b-col>
        <b-col cols="5" class="col__3 col__inner">
          <div class="col__inner--box">
            <img
              src="@/assets/img-3.jpg"
              class="rel__img--1"
              alt
              data-aos="fade-up"
              data-aos-delay="200"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<style lang="scss">
.padding-80 {
  padding: 200px;
}
.col__3 {
  background: url("../assets/img-2.jpg") 50% 50% no-repeat;
  background-size: cover;
  min-height: 300px;
  border-left: 1px solid #eee;
}
.rel__img--1 {
  position: absolute;
  left: -100px;
  bottom: 20px;
  background: #fff;
  padding: 10px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
}

.upper__title {
  font-size: 0.9em;
  color: #c09578;
  font-weight: 400;
}
.hr__1 {
  width: 150px;
  height: 1px;
  background: #efe2d9;
}
.st-1 {
  font-weight: 500;
  color: #c09578;
}
</style>
