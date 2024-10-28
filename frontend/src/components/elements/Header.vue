<template>
    <div class="top-section section">
        <h1 class="mb-0 pb-0">Matthew Eeles</h1>
        <h3 class="mt-0 pt-0">Web Developer</h3>
        <h5>Currently working <a href="https://firstsight.media">@FirstSightMedia</a></h5>
        <p>Connect with me for more frontend & backend development.</p>

        <div class="d-flex justify-content-start gap-md-4" id="socialIcons">
            <a href="https://www.instagram.com/thecyclingdev/" target="_blank" class="text-dark">
                <i class="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/matthew-eeles/" target="_blank" class="text-dark">
                <i class="fab fa-linkedin fa-2x"></i>
            </a>      
            <a href="https://github.com/MEeles08" target="_blank" class="text-dark">
                <i class="fab fa-github fa-2x"></i>
            </a>                                          
        </div>

        <!-- Buttons for Blog and Contact -->
        <div class="d-flex gap-2 mt-4" id="hero-btns">
            <!-- <router-link to="/blogs" class="btn btn-dark text-white">Blog</router-link> -->
            <router-link :to="buttonLink" class="btn btn-dark text-white">{{ buttonLabel }}</router-link>
            <a href="mailto:eelesmatthew01@gmail.com?subject=Website Inquiry" class="btn btn-dark text-white">Contact</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
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