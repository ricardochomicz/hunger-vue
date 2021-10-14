<template>
    <header>
        <!-- Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-vuefood">
            <div class="container">
                <router-link to="/" class="navbar-brand" >
                    <img
                        src="@/assets/imgs/logo-vuefood.png"
                        alt="VueFood"
                        class="logo"
                    />
                </router-link>
                <div>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item nav-cart active">
                            <router-link to="/cart" class="nav-link">
                                <i class="fas fa-shopping-cart"></i> (2)
                            </router-link>
                        </li>
                        <li class="nav-item text-white  nav-cart  active">
                            <router-link to="/login" class="nav-link">Entrar</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>