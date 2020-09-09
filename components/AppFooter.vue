<template>
  <footer class="footer padding-top-60">
    <b-container>
      <b-row>
        <b-col class="text-center border-top border-bottom footer__navigation">
          <b-nav fill>
            <b-nav-item active>Startseite</b-nav-item>
            <b-nav-item>Über Uns</b-nav-item>
            <b-nav-item>Schmuck</b-nav-item>
            <b-nav-item>Goldankauf</b-nav-item>
            <b-nav-item>Reparaturen</b-nav-item>
            <b-nav-item>Kontakt</b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
      <b-row class="py-4">
        <b-col class="text-center">
          <p>
            Copyright ©{{ new Date().getFullYear() }} Juwelier Melis - Alle
            Rechte Vorbehalten
          </p>
          <a href="#" class="footer__links">Impressum</a> |
          <a href="#" class="footer__links">Datenschutz</a>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
<style lang="scss">
.footer {
  padding: 20px 0;
  padding-top: 100px;
}
.footer__navigation {
  .nav-link {
    color: #212121;
    &:hover {
      color: #c09578;
    }
  }
}
.footer__links {
  color: #c09578;
  font-size: 13px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #d6aa8c;
    text-decoration: none;
  }
}
</style>
