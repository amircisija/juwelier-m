<template>
  <section class="contact__section padding-top-60" id="kontakt">
    <b-container>
      <b-row>
        <b-col class="text-center mx-auto">
          <h3 class="upper__title" data-aos="fade-up" data-aos-delay="100">
            Wir freuen uns auf Ihren besuch
          </h3>
          <h2 data-aos="fade-up" data-aos-delay="200">Kontakt & Anfahrt</h2>
          <hr class="hr__2" />
        </b-col>
      </b-row>
      <b-row class="padding-top-60">
        <b-col class="gmap--wrapper">
          <iframe
            data-aos="fade-up"
            data-aos-delay="250"
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
          <h3 data-aos="fade-up" data-aos-delay="100">
            Schicken Sie uns eine E-Mail
          </h3>
          <hr class="hr__1" />
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-2"
              label="Ihr Name*"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.name"
                required
                placeholder=""
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-1"
              label="Ihre E-Mail*"
              label-for="input-1"
              description=""
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                required
                placeholder=""
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-4"
              label="Telefon*"
              label-for="input-4"
            >
              <b-form-input
                id="input-4"
                v-model="form.phone"
                required
                placeholder=""
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-3"
              label="Betreff*"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="form.subject"
                required
                placeholder=""
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-5"
              label="Nachricht*"
              label-for="input-5"
            >
              <b-form-textarea
                id="textarea"
                v-model="form.message"
                placeholder=""
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>

            <a class="btn btn__1 filled">Abschicken</a>
          </b-form>
        </b-col>
        <b-col>
          <h3 data-aos="fade-up" data-aos-delay="150">Kontaktieren Sie uns</h3>
          <hr class="hr__1" />
          <p data-aos="fade-up" data-aos-delay="200">
            Wir sind gerne für Ihre Fragen und Wünsche da. Sie erreichen uns
            telefonisch oder über unser Kontaktformular
          </p>
          <b-list-group
            class="contact__info"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <b-list-group-item>
              <b-icon-map></b-icon-map>
              {{ adress }}
            </b-list-group-item>
            <b-list-group-item>
              <b-icon-phone></b-icon-phone>
              {{ phone }}
            </b-list-group-item>
            <b-list-group-item>
              <b-icon-envelope></b-icon-envelope>
              {{ email }}
            </b-list-group-item>
          </b-list-group>
          <h4 class="mt-5">Öffnungszeiten</h4>
          <p><strong>Montag - Freitag</strong> 10:00 - 18:00 Uhr</p>
          <p><strong>Samstag</strong> 10:00 - 17:00 Uhr</p>
          <p><strong>Sonntag</strong> Geschlossen</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        subject: "",
        message: "",
        phone: "",
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true,
      phone: "07761-9384210",
      fax: "07761-9384212",
      email: "info@juwelier-melis.de",
      adress: "Rheinbrückstraße 38, 79713 Bad Säckingen"
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
<style lang="scss">
.padding-top-60 {
  padding-top: 60px;
}
.gmap--wrapper {
  background: #fff;
  padding: 20px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
}
.b-icon.bi {
  color: #c09578;
}
.hr__2 {
  width: 150px;
  height: 1px;
  background: #efe2d9;
  margin: 0 auto;
}
.contact__info {
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
}
</style>
