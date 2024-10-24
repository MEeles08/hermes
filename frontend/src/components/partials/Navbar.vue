<template>
    <!-- Left Column (Responsive Width) -->
    <div class="col-md-12 col-lg-2 left-column d-flex flex-column align-items-center" id="nav-socials">
        <!-- Profile Image -->
        <router-link to="/">
            <!-- <img src="https://picsum.photos/150" alt="Profile Image" class="rounded-circle profile-img"> -->
            <img src="../../../public/images/headshot.jpg" alt="Profile Image" class="rounded-circle profile-img">
        </router-link>
        
        <!-- Social Links -->
        <div class="social-links text-center mt-3">
            <a href="https://www.instagram.com/thecyclingdev/" target="_blank"><i class="bi bi-instagram"></i> Instagram</a>
            <a href="https://www.linkedin.com/in/matthew-eeles/" target="_blank"><i class="bi bi-linkedin"></i> LinkedIn</a>
            <a href="https://github.com/MEeles08" target="_blank"><i class="bi bi-github"></i> GitHub</a>
            <router-link :to="buttonLink" class="button">{{ buttonLabel }}</router-link>
            <a href="mailto:eelesmatthew01@gmail.com?subject=Website Inquiry" class="">Contact</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    computed: {
        buttonLink() {
            const isBlogPost = this.$route.path.startsWith('/blogs/sanity/');
            return isBlogPost ? '/blogs' : this.$route.path === '/' || this.$route.path === '' ? '/blogs' : '/';
        },

        buttonLabel() {
            const isBlogPost = this.$route.path.startsWith('/blogs/sanity/');
            return isBlogPost ? 'Blog' : this.$route.path === '/' || this.$route.path === '' ? 'Blog' : 'Home';
        }
    }
}
</script>