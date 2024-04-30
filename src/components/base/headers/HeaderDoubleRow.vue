<template>
    <header class="main-header">
        <div class="navbar navbar-expand-sm navbar-dark">
            <div class="container-fluid d-flex justify-content-center">
                <a class="navbar-brand" href="#">Votre logo</a>
            </div>
        </div>
        <div class="navbar navbar-expand-sm navbar-dark">
            <div class="container-fluid d-flex justify-content-center">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Accueil</a>
                    <a class="nav-link" href="#">Nos produits</a>
                    <a class="nav-link" href="#">Ils nous font confiance</a>
                    <a class="nav-link" href="#">Contact</a>
                </div>
            </div>
        </div>
    </header>

</template>

<script>
export default {
    name: 'SimpleDarkBlue',
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
