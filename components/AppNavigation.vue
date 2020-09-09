<template>
  <div>
    <div class="top__bar" id="topbar">
      <b-container>
        <b-row>
          <b-col>
            <p class="d-inline-block pr-4">
              <b-icon-phone></b-icon-phone>Rufen Sie uns noch heute an unter
              <a href="#" class="top__bar--link">
                <strong>{{ phone }}</strong>
              </a>
            </p>
          </b-col>
          <b-col class="text-right">
            <p class="d-inline-block pr-4">
              <b-icon-map></b-icon-map>
              {{ adress }}
            </p>
            <p class="d-inline-block">
              <b-icon-envelope></b-icon-envelope>
              {{ email }}
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <b-navbar toggleable="lg" type="light" fixed="top" id="nav">
      <b-container>
        <b-navbar-brand href="#">
          <img src="@/assets/logo_1.jpg" alt />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <nuxt-link class="nav-link" :to="{ path: '/', hash: '' }"
              >Startseite</nuxt-link
            >
            <nuxt-link
              class="nav-link "
              :to="{ path: '/', hash: '#reparaturen' }"
              >Reparaturen</nuxt-link
            >
            <nuxt-link class="nav-link" :to="{ path: '/', hash: '#ueber-uns' }"
              >Über Uns</nuxt-link
            >
            <nuxt-link class="nav-link" :to="{ path: '/', hash: '#goldankauf' }"
              >Goldankauf</nuxt-link
            >

            <nuxt-link class="nav-link" :to="{ path: '/', hash: '#kontakt' }"
              >Kontakt</nuxt-link
            >
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
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
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", function() {
        var navbar = document.getElementById("nav");
        var topbar = document.getElementById("topbar");
        var nav_classes = navbar.classList;
        var topbar_classes = topbar.classList;

        if (document.documentElement.scrollTop >= 20) {
          if (nav_classes.contains("shrink") === false) {
            nav_classes.toggle("shrink");
            topbar_classes.toggle("shrink");
          }
        } else {
          if (nav_classes.contains("shrink") === true) {
            nav_classes.toggle("shrink");
            topbar_classes.toggle("shrink");
          }
        }
      });
    });
  }
};
</script>
<style lang="scss">
#nav {
  transition: all 0.1s;
}
nav.shrink {
  padding: 0.3rem;
  background: rgb(255, 255, 255);
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
  top: 0;
  border-bottom: 1px solid rgb(233, 233, 233);
}
.navbar {
  padding: 30px 0;
}
.top__bar.shrink {
  top: -50px;
  transition: all 0.1s ease-in-out;
}

.top__bar {
  top: 0;
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  transition: all 0.1s ease-in-out;
  background: #efc6aa;
  background: #e0a276;
  border-bottom: 1px solid rgb(224, 224, 224);
  p {
    padding: 5px 0;
    margin-bottom: 0;
    font-size: 13px;
    line-height: 24px;
    color: #fff;
  }
  a {
    color: #fff;
    padding-bottom: 0;
  }
  .b-icon.bi {
    color: #fdf5ef;
  }
}
.nav-link {
  display: block;
  padding: 0.5rem 1.4rem !important;
  transition: all 0.3s ease-in-out;
  font-family: "Playfair Display", serif;
  font-weight: 500;
  font-size: 0.9em;
  border-bottom: 1px solid rgba(192, 149, 120, 0);
  &:hover {
    border-bottom: 1px solid #cfc9c4;
  }
}
.navbar-light .navbar-nav .active > .nav-link {
  color: #c09578;
  border-bottom: 1px solid #cfc9c4;
}
.top__bar--link:hover {
  text-decoration: none;
}
.navbar-light {
  background: #fff;
  top: 35px;
}
</style>
