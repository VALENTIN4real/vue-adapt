<template>
  <footer class="main-footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>Suivez-nous</h5>
          <ul class="list-unstyled">
            <li><a href="#" target="_blank"><i class="bi bi-facebook"></i> Facebook</a></li>
            <li><a href="#" target="_blank"><i class="bi bi-twitter"></i> Twitter</a></li>
            <li><a href="#" target="_blank"><i class="bi bi-linkedin"></i> LinkedIn</a></li>
            <li><a href="#" target="_blank"><i class="bi bi-instagram"></i> Instagram</a></li>
          </ul>
        </div>
        <div class="col-md-8">
          <h5>Qui sommes nous ?</h5>
          <p>
            High New Tech compte plus de 50 collaborateurs et est présent dans 5 pays. Nous sommes spécialisés dans la vente de matériel informatique et électronique.
          </p>
        </div>
      </div>
    </div>
    <div class="footer-divider"></div>
    <div class="copyright text-center">
      © 2024 High New Tech. Tous droits réservés.
    </div>
  </footer>


</template>

<style lang="scss" scoped>
.main-footer {
  padding: 2rem 0;
  position: relative;
  bottom: 0;
  width: 100%;
  text-align: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

@media (max-width: 480px) {
  .main-footer {
    position: relative;
  }
}

.main-footer h5 {
  color: black;
}

.main-footer a {
  text-decoration: none;
  transition: color 0.3s;
}

.main-footer a:hover {
  color: #3498db;
}

.footer-divider {
  height: 1px;
  background-color: gray;
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
<script setup>
</script>