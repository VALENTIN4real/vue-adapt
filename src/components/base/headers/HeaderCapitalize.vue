<template>
    <header class="main-header bg-light">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">High New Tech</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li></li>
                    </ul>
                    <div class="navbar-nav text-uppercase">
                        <a class="nav-link" aria-current="page" href="/">Accueil</a>
                        <a class="nav-link" href="/produits#contentArea">Nos produits</a>
                        <a class="nav-link" href="/avis">Ils nous font confiance</a>
                        <a class="nav-link" href="/contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    </header>

</template>

<script>
export default {
    name: 'HeaderSimple',
};
</script>

<style lang="scss" scoped>

.main-header {
  position: sticky;
  top: 0;
  padding: 1rem;
  transition: box-shadow 0.3s ease-in-out;
  z-index: 1000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.logo {
    display: flex;
    align-items: center;
}

.logo img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

.logo h1 {
    font-size: 1.5rem;
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
