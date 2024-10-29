<template>
    <div class="container-fluid mt-4">
        <div class="row">
            <Navbar />

            <!-- Right Column (80%) with 3 sections -->
            <div class="col-md-10 right-column d-flex flex-column">
                <Header />

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
                        site working as a live streaming technician or in the office working away to provide seamless web experiences. 
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
import Header from './elements/Header.vue';

export default {
    name: "Home",
    components: {
        Navbar,
        Card,
        Header
    },
    data() {
      return {
        projects: [
            {
                title: "Chatty App",
                description: "A little socket.io app. Enter a your room of your choice and start chatting with fellow Chatty App users making the most of websockets.",
                img: "./images/chatty_app.png",
                url: "https://chatty-app.mattheweeles.co.uk/",
            },
            {
                title: "This website!",
                description: `Welcome to my new site! After two years in the industry, I thought the time was right to build myself my very own platform. 
                I hope to add a blog section section with Sanity IO as a way of showing my latest work alongside tips & tricks. `,
                img: "./images/headshot.jpg",
                url: "/blogs/sanity/my-first-personal-website",
            }
        ]
      };
    }
}
</script>

