<template>
    <!-- Left Column (20%) -->
    <div class="col-md-2 left-column">
        <!-- Profile Image -->
        <router-link to="/">
            <img src="../../../public/images/headshot.jpg" alt="Profile Image" class="rounded-circle profile-img">
        </router-link>
        
        <!-- Social Links -->
        <div class="social-links">
            <a href="https://www.instagram.com" target="_blank"><i class="bi bi-instagram"></i> Instagram</a>
            <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook"></i> Facebook</a>
            <a href="https://www.linkedin.com" target="_blank"><i class="bi bi-linkedin"></i> LinkedIn</a>
            <a href="https://github.com/MEeles08" target="_blank"><i class="bi bi-github"></i> GitHub</a>
            <router-link to="/blogs">Blog</router-link>
        </div>
    </div>
</template>