<template>
  <section class="hero__section">
    <b-jumbotron class="mb-0">
      <b-container class="h-100">
        <b-row class="h-100">
          <b-col cols="12" class="text-center my-auto mx-auto">
            <span data-aos="fade-up" data-aos-delay="300"
              >Goldankauf Schmuckverkauf Reparaturen</span
            >
            <h1 data-aos="fade-up" data-aos-delay="200">{{ pageTitle }}</h1>
            <h4 data-aos="fade-up" data-aos-delay="400">
              Ihr Juwelier in Bad Säckingen
            </h4>

            <nuxt-link
              class="btn btn__1 filled"
              data-aos="fade-up"
              data-aos-delay="500"
              :to="{ path: '/', hash: '#ueber-uns' }"
              >Mehr erfahren</nuxt-link
            >
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>
  </section>
</template>
<script>
export default {
  data() {
    return {
      pageTitle: "Juwelier Melis"
    };
  }
};
</script>
<style lang="scss">
.jumbotron {
  height: 96vh;
  padding-top: 160px;
  background: url("../assets/hero_img_2.jpg") 50% 50% no-repeat;
  background-size: cover;
  border-bottom: 5px solid #e4d4b7;
  h1 {
    font-size: 5.6em;
    color: #fff;
  }
  h4 {
    margin-bottom: 40px;
    color: #fff;
    font-family: "Roboto", sans-serif;
  }
  span {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: #ffc69e;
    text-transform: uppercase;
    letter-spacing: 5px;
  }
}
.btn__1 {
  border: 2px solid #c09578;
  border-radius: 0;
  text-transform: uppercase;
  padding: 10px 50px;
  font-size: 0.9em;
  color: #c09578;
  transition: all 0.3s ease-in-out;
}
.btn__1.filled {
  border: 2px solid #e7b899;
  border-radius: 0;
  text-transform: uppercase;
  padding: 10px 50px;
  font-size: 0.9em;
  color: #c09578;
  color: #fff;
  background: rgba(192, 149, 120, 0.91);
  transition: all 0.3s ease-in-out;
  &:hover {
    background: rgba(218, 169, 137, 0.91);
  }
}
.btn__2 {
  border: 2px solid #fff3d9;
  border-radius: 0;
  text-transform: uppercase;
  padding: 10px 50px;
  font-size: 0.9em;
  color: #fff3d9;
  transition: all 0.3s ease-in-out;
}
</style>
