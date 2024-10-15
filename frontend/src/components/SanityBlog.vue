<template>

<div class="container-fluid mt-4">
    <div class="row">
      <Navbar />

      <!-- Right Column (80%) with 3 sections -->
      <div class="col-md-10 right-column d-flex flex-column">
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
              <router-link to="/blogs" class="btn btn-dark text-white">Blog</router-link>
              <a href="mailto:eelesmatthew01@gmail.com?subject=Website Inquiry" class="btn btn-dark text-white">Contact</a>
          </div>
        </div>

        <div class="middle-section section">
          <!-- Blog insert here  -->
          <div class="row">
            <div v-if="Post" class="col-md-10 scrollable-container">
              <h4>{{ Post.title }}</h4>
              <div class="blogtext">
                <PortableText :value="Post.body" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
</div>
</template>

<script>
import { PortableText } from '@portabletext/vue';
import SanityDataService from "../services/SanityDataService";
import Navbar from "./partials/Navbar.vue";

export default {
    name: 'SanityBlog',
    components: {
        Navbar,
        PortableText,
    },

    data() {
        return {
            Post: null,
            message: '',
        };
    },

    methods: {

      getPost(id) {
        SanityDataService.get(id)
        .then(response => {
          this.Post = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        })
      },
    },

    mounted() {
      this.getPost(this.$route.params.id);
    }
}

</script>

<style>

.blogtext a {
    color: #49d32a;
}
</style>