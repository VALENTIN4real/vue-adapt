<template>
    <header class="main-header">
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">High New Tech</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li></li>
                    </ul>
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="/">Accueil</a>
                        <a class="nav-link" href="/produits">Nos produits</a>
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
    padding: 1rem;
    background-color: #2c3e50;
    color: white;
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
    color: white;
    position: relative;
    transition: color 0.3s;
}

.nav-link:hover {
    color: #3498db;
}

.nav-link:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #3498db;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s;
}

.nav-link:hover:before {
    transform: scaleX(1);
    transform-origin: left;
}
</style>
