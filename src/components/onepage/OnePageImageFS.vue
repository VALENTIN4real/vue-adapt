<template>
  <div id="home"></div>
  <header id="header" :class="'main-header ' + [ scrolled ? 'header-scrolled' : '']">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/public">High New Tech</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li></li>
          </ul>
          <div class="navbar-nav text-uppercase">
            <a class="nav-link" aria-current="page" href="/#home">Accueil</a>
            <a class="nav-link" href="/#produits">Nos produits</a>
            <a class="nav-link" href="/#avis">Ils nous font confiance</a>
            <a class="nav-link" href="/#contact">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <section class="image_header d-flex align-items-center">
    <div class="container-fluid text-white">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="content d-flex flex-column align-items-center text-center">
            <h1>Boostez votre communication avec Pixel Perfect</h1>
            <h2>Spécialistes du montage vidéo</h2>
          </div>
        </div>
        <div id="illustration" class="col-lg-6"></div>
      </div>
      <div class="row">
        <div class="col-12 d-flex justify-content-center">
          <a class="btn btn-dark" href="/#produits">
            Voir nos produits
            <i class="fas fa-arrow-down ms-2"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <content-area-products-list id="produits" style="padding: 60px 0"></content-area-products-list>
  <content-area-feedbacks id="avis" style="padding: 60px 0"></content-area-feedbacks>
  <content-area-contact id="contact" style="padding: 60px 0"></content-area-contact>

  <footer-simple primaryColor="black" textColor="green"></footer-simple>

</template>

<script>
import ContentAreaProductsList from '@/components/base/content-areas/ContentAreaProductsList.vue';
import ContentAreaFeedbacks from "@/components/base/content-areas/ContentAreaFeedbacks.vue";
import ContentAreaContact from "@/components/base/content-areas/ContentAreaContact.vue";
import FooterSimple from "@/components/base/footers/FooterSimple.vue";
export default {
  name: 'HeaderBigImage',
  data() {
    return {
      scrolled: false,
    };
  },
  components: {
    ContentAreaContact,
    ContentAreaFeedbacks,
    ContentAreaProductsList,
    FooterSimple,
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrolled = window.scrollY > 20;
    },
  },
};
</script>

<style lang="scss" scoped>

.main-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 1rem;
  z-index: 1000;
  transition: 0.3s ease-in-out;

  &.header-scrolled {
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
}

.image_header {
  background: url('/src/assets/images/backgrounds/line.jpg') top center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: relative;

  @media (max-width: 992px) {
    padding-top: 20vh;
    text-align: center;
  }
}

#illustration {
  background: url('/src/assets/images/illustrations/computing.png') top center no-repeat;
  background-size: contain;
  position: relative;
  height: 45vh;
}

.nav-links {
  display: flex;
}

.nav-link {
  margin-right: 20px;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
}

.nav-link:hover {
  color: black;
}
</style>
