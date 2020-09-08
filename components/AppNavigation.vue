<template>
  <div>
    <div class="top-bar">
      <b-container>
        <b-row>
          <b-col>test</b-col>
        </b-row>
      </b-container>
    </div>
    <b-navbar toggleable="lg" type="light">
      <b-container>
        <b-navbar-brand href="#">
          <img src="@/assets/logo_1.jpg" alt />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">Startseite</b-nav-item>
            <b-nav-item href="#">Über Uns</b-nav-item>
            <b-nav-item href="#">Schmuck</b-nav-item>
            <b-nav-item href="#">Goldankauf</b-nav-item>
            <b-nav-item href="#">Reparaturen</b-nav-item>
            <b-nav-item href="#">Kontakt</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>
