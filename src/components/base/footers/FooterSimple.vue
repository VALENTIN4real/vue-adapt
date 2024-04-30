<template>
  <footer class="main-footer"
  :style="
  'background-color: ' + primaryColor + ';' +
  'color: ' + textColor + ';'">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>Liens Utiles</h5>
          <ul class="list-unstyled">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Produits</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>Ressources</h5>
          <ul class="list-unstyled">
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5>Suivez-nous</h5>
          <ul class="list-unstyled">
            <li><a href="#" target="_blank"><i class="bi bi-facebook"></i> Facebook</a></li>
            <li><a href="#" target="_blank"><i class="bi bi-twitter"></i> Twitter</a></li>
            <li><a href="#" target="_blank"><i class="bi bi-linkedin"></i> LinkedIn</a></li>
            <li><a href="#" target="_blank"><i class="bi bi-instagram"></i> Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-divider"></div>
    <div class="copyright text-center">
      © 2024 High New Tech. Tous droits réservés.
    </div>
  </footer>


</template>

<script>
export default {
  name: 'FooterSimple',
  props: {
    primaryColor: {
      type: String,
      default: 'black',
    },
    textColor: {
      type: String,
      default: 'white',
    },
  },
};
</script>

<style lang="scss" scoped>
.main-footer {
  color: white;
  padding: 2rem 0;
  position: relative;
  bottom: 0;
  width: 100%;
  text-align: center;
}

@media (max-width: 480px) {
  .main-footer {
    position: relative;
  }
}

.main-footer h5 {
  color: #3498db;
}

.main-footer a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.main-footer a:hover {
  color: #3498db;
}

.footer-divider {
  height: 1px;
  background-color: #3498db;
  margin: 1rem 0;
}

.copyright {
  margin-top: 1rem;
  font-size: 14px;
  opacity: 0.8;
}

/* Ajoutez des animations si nécessaire */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.footer-divider,
.copyright {
  animation: fadeIn 0.5s ease-out;
}
</style>