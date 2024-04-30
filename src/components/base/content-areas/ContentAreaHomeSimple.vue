<template>
    <main id="contentArea" class="main-content">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                  <div v-scroll-reveal>
                    <h2>Bienvenue chez High New Tech - Pionniers des Nouvelles Technologies</h2>
                    <p>
                      Découvrez l'avenir avec High New Tech, votre partenaire de confiance dans le domaine des technologies innovantes. Nous sommes passionnés par la création de solutions numériques révolutionnaires qui transforment la manière dont vous travaillez, interagissez et prospérez.
                    </p>
                  </div>

                  <div v-scroll-reveal>
                    <h3>Notre Vision</h3>
                    <p>
                      À High New Tech, nous croyons en un avenir où la technologie définit la norme. Nous aspirons à être à la pointe de l'innovation, à créer des expériences numériques qui transcendent les attentes et à apporter des changements significatifs à chaque secteur.
                    </p>
                  </div>

                  <div v-scroll-reveal>
                    <h3>Pourquoi nous choisir ?</h3>
                    <p>
                      Découvrez comment High New Tech peut propulser votre entreprise dans la nouvelle ère numérique. Contactez-nous dès aujourd'hui pour discuter de vos idées et commencer à bâtir un avenir numérique radieux.
                    </p>
                  </div>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <h3 v-scroll-reveal>Nos Services</h3>
                        <ul v-scroll-reveal>
                            <li>Marketing Digital</li>
                            <li>Data Engineering</li>
                            <li>Intelligence artificielle</li>
                        </ul>
                        <h3 v-scroll-reveal>Dernières Actualités</h3>
                        <ul v-scroll-reveal>
                            <li><a href="#">Comment l'IA a changé le monde</a></li>
                            <li><a href="#">Nouveau produit : un smartphone VRAIMENT intelligent !</a></li>
                            <li><a href="#">L'entreprenariat pour les nuls</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row pt-5">
              <h2 v-scroll-reveal>Nos services</h2>
              <div class="d-md-flex">
                <div class="col-md-4 d-flex justify-content-center align-items-center" v-scroll-reveal>
                  <i class="bi bi-code" style="font-size: 7rem; color: #3498db;"></i>
                </div>
                <div class="col-md-8">
                  <div v-scroll-reveal>
                    <h3>Développement de Logiciels Avancés</h3>
                    <p>
                      De la conception à la mise en œuvre, notre équipe de développeurs talentueux crée des logiciels sur mesure, parfaitement adaptés à vos besoins. Que ce soit pour automatiser vos processus internes, améliorer l'efficacité opérationnelle ou innover dans vos produits et services, nous avons la solution.
                    </p>
                  </div>
                </div>
              </div>

              <div class="d-md-flex">
                <div class="col-md-4 d-flex justify-content-center align-items-center" v-scroll-reveal>
                  <i class="bi bi-bug-fill" style="font-size: 7rem; color: #3498db;"></i>
                </div>
                <div class="col-md-8">
                  <div v-scroll-reveal>
                    <h3>Intelligence Artificielle et Machine Learning</h3>
                    <p>
                      Explorez le pouvoir de l'intelligence artificielle avec nos solutions avancées basées sur le machine learning. Des analyses prédictives aux assistants virtuels, nous intégrons des algorithmes intelligents pour vous aider à prendre des décisions éclairées et à automatiser des tâches complexes.
                    </p>
                  </div>
                </div>
              </div>

              <div class="d-md-flex">
                <div class="col-md-4 d-flex justify-content-center align-items-center" v-scroll-reveal>
                  <i class="bi bi-smartwatch" style="font-size: 7rem; color: #3498db;"></i>
                </div>
                <div class="col-md-8">
                  <div v-scroll-reveal>
                    <h3>IoT (Internet des Objets)</h3>
                    <p>
                      Connectez-vous à l'avenir avec nos solutions IoT. De la surveillance intelligente à la gestion de l'énergie, nous utilisons des dispositifs interconnectés pour créer des environnements plus intelligents et plus efficaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.main-content {
    padding: 2rem 0;
}

.main-content h2 {
    color: #2c3e50;
}

.main-content p {
    color: #34495e;
}

.sidebar {
  background-color: #ecf0f1;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 100%;
}

.sidebar h3 {
    color: #3498db;
}

.sidebar ul {
    list-style: none;
    padding: 0;
}

.sidebar li {
    margin-bottom: 10px;
}

.sidebar a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s;
}

.sidebar a:hover {
    color: #2c3e50;
}
</style>

<script>
</script>