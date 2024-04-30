<template>
  <div id="contentArea" class="container">
    <div class="d-flex justify-content-center pt-5 pb-3" v-scroll-reveal>
      <h1>Ils nous font confiance</h1>
    </div>

    <div class="row d-flex justify-content-around align-items-center">
      <div class="card border-0 mb-3 col-md-5" v-for="(feedback, index) in feedbacks" :key="index">
        <div class="row g-0" v-scroll-reveal>
          <div class="col-md-4 d-flex align-items-center">
            <img :src="feedback.image" class="img-fluid rounded" alt="Un client">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ feedback.author }}</h5>
              <p class="card-text">{{ feedback.quote }}</p>
              <p class="card-text"><small class="text-muted">{{ feedback.date }}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>

<!--    <div class="d-flex justify-content-center my-5" v-scroll-reveal>-->
<!--      <h1>Convaicu ? Contactez-nous !</h1>-->
<!--    </div>-->

  </div>
</template>

<script setup>

const feedbacks = [
  { quote: 'La qualité de service est une priorité pour High New Tech, en plus de délais de livraison respectés. Merci !',
    author: 'Marie M',
    image: 'src/assets/images/feedbacks/marie.jpeg',
    date: 'Le 07 décembre 2023'
  },
  { quote: 'L\'équipe a su répondre à mon besoin et le prix est abordable. Je les recommande !',
    author: 'Emmanuelle F',
    image: 'src/assets/images/feedbacks/emmanuelle.jpeg',
    date: 'Le 14 octobre 2023'
  },
  { quote: 'Très professionnels. Merci.',
    author: 'Adrien K',
    image: 'src/assets/images/feedbacks/adrien.jpeg',
    date: 'Le 18 septembre 2023',
  },
  { quote: 'Je recherchais du matériel pour mes conférences et j\'ai reçu de très bons conseils. Je ferai de nouveau appel à vous !',
    author: 'André B',
    image: 'src/assets/images/feedbacks/andre.jpeg',
    date: 'Le 07 septembre 2023'
  },
  { quote: 'Rien à dire, service impeccable et conforme à mes attentes.',
    author: 'Franck Y',
    image: 'src/assets/images/feedbacks/franck.jpeg',
    date: 'Le 08 août 2023'
  },
];

</script>

<style scoped lang="scss">
.card {
  margin-bottom: 2rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
}
</style>