<template>
  <section id="into__section">
    <b-container fluid>
      <b-row>
        <b-col class="col__1 col__inner">
          <div class="col__inner--box" data-aos="fade-up" data-aos-delay="100">
            <h3>Goldankauf & -verkauf</h3>
            <hr class="hr__1 mb-3" />
            <p>
              Sie können Ihr Altgolden, Zahngold, Goldbarren und weiteres, dass
              sie nichtmehr benötigen an uns verkaufen zu fairen Preisen.
            </p>
          </div>
        </b-col>
        <b-col class="col__2 col__inner" id="reparaturen">
          <div class="col__inner--box" data-aos="fade-up" data-aos-delay="200">
            <h3>Reparaturen</h3>
            <hr class="hr__1 mb-3" />
            <p>
              Wir verkleinern & vergrößern auch ihre Ringe, löten ihre Ketten
              und ziehen auch ihre Perlenketten neu auf.Anderweitige Reparaturen
              reparieren wir ihnen selbstverständlich auch.
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<style lang="scss">
.col__1 {
  background: url("../assets/col_1.jpg") 50% 50% no-repeat;
  background-size: cover;
  min-height: 300px;
  border-right: 1px solid #eeeeee;
}
.col__2 {
  background: url("../assets/col_2.jpg") 50% 50% no-repeat;
  background-size: cover;
  min-height: 300px;
}
.col__inner {
  padding: 60px;
  &:hover {
    webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
  }
}
.col__inner--box {
  max-width: 400px;
}
p {
  font-size: 15px;
}
#into__section {
  border-bottom: 1px solid #eeeeee;
}
</style>
