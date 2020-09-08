<template>
  <section class="about__us--section">
    <b-container fluid>
      <b-row>
        <b-col cols="7" class="padding-80">
          <h3 class="upper__title">Ihr Fachgeschäft für Goldschmuck und Uhren</h3>
          <h1>Juwelier Melis in Bad Säckingen</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit repellat neque veritatis eos ducimus optio fuga aperiam quibusdam ullam iste commodi ipsa distinctio quia iure unde, beatae maiores nam quidem.</p>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus cupiditate, expedita in illum nostrum praesentium eos ipsam voluptatum? Laboriosam esse nostrum quis vitae odio suscipit tempora ex, sunt consequatur libero! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, harum maxime molestias modi quam consequuntur cum, quis deleniti nisi dolorum labore et animi dolores consectetur at, voluptatem est perferendis? Unde!</p>

          <a href="#" class="btn btn-success">Kontakt</a>
        </b-col>
        <b-col cols="5" class="col__3 col__inner">
          <div class="col__inner--box">
            <img src="@/assets/img-1.jpg" class="rel__img--1" alt />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<style lang="scss">
.padding-80 {
  padding: 140px;
}
.col__3 {
  background: url("../assets/col_3.jpg") 50% 50% no-repeat;
  background-size: cover;
  min-height: 300px;
}
.rel__img--1 {
  position: absolute;
  left: -50px;
  bottom: 40px;
  background: #fff;
  padding: 10px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
}

.upper__title {
  font-size: 0.9em;
}
</style>
