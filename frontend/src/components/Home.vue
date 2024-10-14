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
                        <!-- <router-link to="/blogs" class="btn btn-dark text-white">Blog</router-link> -->
                        <a href="mailto:eelesmatthew01@gmail.com?subject=Website Inquiry" class="btn btn-dark text-white">Contact</a>
                    </div>
                </div>

                <div class="middle-section section">
                    <p><b>Current Dev Stack</b></p>
                    <div class="d-flex flex-row flex-wrap" id="techstack">
                        <span class="p-2 border rounded">HTML</span>
                        <span class="p-2 border rounded">CSS</span>
                        <span class="p-2 border rounded">JavaScript</span>
                        <span class="p-2 border rounded">NodeJS</span>
                        <span class="p-2 border rounded">PHP</span>
                        <span class="p-2 border rounded">Vue.js</span>
                        <span class="p-2 border rounded">MongoDB</span>
                    </div>                    
                </div>

                <div class="middle-section section">
                    <p><b>Who am I?</b></p>
                    <p>I'm a 23-year-old web developer based in Oxfordshire, UK. Monday to Friday you'll find me either on 
                        site working as a live streaming technician or in the office working away to provide seamless web expirences. 
                        Outside of work, I enjoy cycling and watching the football. 
                    </p>
                </div>
                <div class="bottom-section section">
                    <p><b>Latest Projects</b></p>
                    <Card v-for="project in projects" :key="project.id" :data="project" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './partials/Navbar.vue';
import Card from './elements/Card.vue';
export default {
    name: "Home",
    components: {
        Navbar,
        Card
    },
    data() {
      return {
        projects: [
            {
                title: "Chatty App",
                description: "A little socket.io app. Enter a your room of your choice and start chatting  with fellow Chatty App users with the user of websockets.",
                img: "./images/chatty_app.png",
                url: "https://chatty-app-jea9.onrender.com",
            },
            {
                title: "This website!",
                description: `Welcome to my new site! After two years in the industry, I thought the time was right to build myself my very own platform. 
                I hope to add a blog section section with Sanity IO as a way of showing my latest work alongside tips & tricks. `,
                img: "./images/headshot.jpg",
                url: "/",
            }
        ]
      };
    }
}
</script>

