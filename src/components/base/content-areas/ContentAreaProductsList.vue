<template>
  <div id="contentArea" class="container">
    <div class="row pt-5">
      <div class="col-md-12 pb-5 d-flex justify-content-center" v-scroll-reveal>
        <h1>Voici nos produits</h1>
      </div>
        <div class="col-md-4" v-for="product in products" :key="product.id" v-scroll-reveal>
          <!-- Créez une card Bootstrap pour chaque produit -->
          <div class="card">
            <img :src="product.image" class="card-img-top" alt="Product image">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
const products = [
  { id: 1, name: 'Drum-Sticks', description: 'Des baguettes connectées', image: 'src/assets/images/products/drumstick.jpg' },
  { id: 2, name: 'Eve HealthCare', description: 'Gourdes connectées', image: 'src/assets/images/products/eve-healthcare.jpg' },
  { id: 3, name: 'NowLight Kit', description: 'Générateur d\'électricité passive', image: 'src/assets/images/products/nowlight-kit.jpg' },
  { id: 4, name: 'Powerbanks', description: 'Batteries professionnelles', image: 'src/assets/images/products/powerbank.jpg' },
  { id: 5, name: 'Smartplugs', description: 'Prises connectées', image: 'src/assets/images/products/smartplug.png' },
  { id: 6, name: 'Smartswitchs', description: 'Interrupteurs tactiles connectés', image: 'src/assets/images/products/smartswitch.jpg' },
  { id: 7, name: 'Répéteur WiFi', description: 'Répéteur longue portée sécurisé', image: 'src/assets/images/products/wifi-repeater.png' },
  { id: 8, name: 'Zoom For Home', description: 'Tablettes professionnelles de conversation virtuelle', image: 'src/assets/images/products/zoom_for_home.jpg' },
  { id: 9, name: 'Supports d\'écrans', description: 'Supports d\'écrans modulaires', image: 'src/assets/images/products/support-screen.jpg' },
];
</script>

<style scoped lang="scss">
.card {
  margin-bottom: 2rem;
  transition: transform 0.3s; // Ajoutez cette ligne pour animer l'effet de zoom

  &:hover {
    transform: scale(1.05); // Ajoutez cette ligne pour agrandir la card lorsqu'elle est survolée
  }
}
.card-img-top {
  min-height: 200px;
  max-height: 200px;
  object-fit: scale-down;
}
</style>