<template>
  <div id="contentArea" class="container contact-container">
    <h1 class="text-center my-5" v-scroll-reveal>Contactez-nous</h1>
    <div class="row d-flex justify-content-md-between justify-content-center align-items-center">
      <div class="col-11 col-md-5 contact-item contact-address d-flex flex-column" v-scroll-reveal>
        <i class="fas fa-map-marker-alt contact-icon"></i>
        <h2>Adresse</h2>
        <p>123 Rue de l'entreprise, 75000 Paris, France</p>
      </div>
      <div class="col-11 col-md-5 mt-3 mt-md-0 contact-item contact-phone d-flex flex-column justify-content-center align-items-center" v-scroll-reveal>
        <i class="fas fa-phone contact-icon"></i>
        <h2>Téléphone</h2>
        <p>+33 1 23 45 67 89</p>
      </div>
    </div>

    <div class="row d-flex justify-content-md-between justify-content-center align-items-center pt-3 mb-md-5">
      <div class="col-11 col-md-5 contact-item contact-email d-flex flex-column justify-content-center align-items-center" v-scroll-reveal>
        <i class="fas fa-envelope contact-icon"></i>
        <h2>Email</h2>
        <p><a href="mailto:contact@entreprise.fr">contact@entreprise.fr</a></p>
      </div>
      <div class="col-11 col-md-5 mt-3 mt-md-0 mb-5 mb-md-0 contact-item contact-hours d-flex flex-column justify-content-center align-items-center" v-scroll-reveal>
        <i class="fas fa-clock contact-icon"></i>
        <h2>Horaires</h2>
        <p>Du lundi au vendredi, de 9h à 18h</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-container {
  min-height: 35.8em;
}

.contact-item {
  box-sizing: border-box; // Ajoutez cette ligne
  padding: 2em;
  border-radius: 15px;
  text-align: center;
  height: 100%;
}

.contact-icon {
  font-size: 2em;
  margin-bottom: 1em;
}

h2 {
  font-size: 1.5em;
}

.contact-address {
  background-color: #3498db;
  color: white;
}

.contact-phone {
  background-color: #2c3e50;
  color: white;
}

.contact-email {
  background-color: #7f8c8d;
  color: white;
}

.contact-hours {
  background-color: #bdc3c7;
  color: white;
}
</style>
<script setup>
</script>