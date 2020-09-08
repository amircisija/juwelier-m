<template>
  <section class="contact__section padding-top-60">
    <b-container>
      <b-row>
        <b-col class="text-center mx-auto">
          <h3 class="upper__title">Wir freuen uns auf Ihren besuch</h3>
          <h2>Kontakt & Anfahrt</h2>
        </b-col>
      </b-row>
      <b-row class="padding-top-60">
        <b-col class="gmap--wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10771.300969561984!2d7.9491098!3d47.5517299!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2476b01fa678705!2sJuwelier%20Melis!5e0!3m2!1sen!2sba!4v1599567464078!5m2!1sen!2sba"
            width="100%"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </b-col>
      </b-row>
      <b-row class="padding-top-60">
        <b-col>
          <h3>Schicken Sie uns eine E-Mail</h3>
        </b-col>
        <b-col>
          <h3>Kontaktieren Sie uns</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo qui itaque mollitia corrupti rerum sapiente maxime vel perspiciatis. Quas voluptatem deserunt cum repellendus pariatur non ratione sed libero rerum mollitia?</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<style lang="scss">
.padding-top-60 {
  padding-top: 60px;
}
.gmap--wrapper {
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
}
</style>
