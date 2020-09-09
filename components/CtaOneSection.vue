<template>
  <section class="cta__section--1" id="goldankauf">
    <b-container class="h-100">
      <b-row class="h-100">
        <b-col class="text-center mx-auto my-auto">
          <h2 data-aos="fade-up" data-aos-delay="100">
            Goldankauf und -verkauf
          </h2>
          <p data-aos="fade-up" data-aos-delay="150">
            Sie können Ihr Altgolden, Zahngold, Goldbarren und weiteres, dass
            sie nichtmehr benötigen an uns verkaufen zu fairen Preisen.
          </p>
          <h3 data-aos="fade-up" data-aos-delay="180">
            Rufen Sie uns an unter
          </h3>
          <a
            href="#"
            class="d-block phone__number"
            data-aos="fade-up"
            data-aos-delay="200"
            >{{ phone }}</a
          >

          <nuxt-link
            class="btn btn__2 filled"
            data-aos="fade-up"
            data-aos-delay="250"
            :to="{ path: '/', hash: '#kontakt' }"
            >Kontakt & Anfahrt</nuxt-link
          >
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      phone: "07761-9384210",
      fax: "07761-9384212",
      email: "info@juwelier-melis.de",
      adress: "Rheinbrückstraße 38, 79713 Bad Säckingen"
    };
  }
};
</script>
<style lang="scss">
.cta__section--1 {
  background: url("../assets/img-4.jpg") 50% 50% no-repeat;
  background-size: cover;
  padding: 100px 0;
  h2,
  p,
  h3 {
    color: #fff;
  }
}
.phone__number {
  color: #fff;
  font-size: 3em;
  margin-bottom: 40px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #efe2d9;
    text-decoration: none;
  }
}
.btn__2.filled {
  border: 2px solid #e7b899;
  border-radius: 0;
  text-transform: uppercase;
  padding: 10px 50px;
  font-size: 0.9em;
  color: #c09578;
  color: #fff;
  background: rgba(192, 149, 120, 0.91);
  &:hover {
    background: rgba(218, 169, 137, 0.91);
  }
}
</style>
