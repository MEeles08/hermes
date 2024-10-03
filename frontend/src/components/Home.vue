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
                </div>
                <div class="middle-section section">
                    <p><b>Current Dev Stack</b></p>
                    <div class="d-flex flex-row flex-wrap" id="techstack">
                        <span class="p-2 border rounded">HTML</span>
                        <span class="p-2 border rounded">CSS</span>
                        <span class="p-2 border rounded">JavaScript</span>
                        <span class="p-2 border rounded">NodeJS</span>
                        <span class="p-2 border rounded">Vue</span>
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
                    <div v-for="(project, index) in projects" :key="index" to>
                        <router-link :to="project.url">
                            <div class="box d-flex align-items-start my-2 shadow my-1">
                                <!-- Image on the left -->
                                <img :src="project.img" :alt="project.title">
                                <!-- Text content: title and description -->
                                <div>
                                    <div class="title">{{ project.title }}</div>
                                    <div class="description">
                                        {{ project.description }}
                                    </div>
                                </div>
                            </div>   
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from './partials/Navbar.vue';
export default {
    name: "Home",
    components: {
        Navbar,
    },
    data() {
      return {
        projects: [
            {
                title: "Project One",
                description: "A description about the project will go here. Makie it short but snappy, ensuring I list some key words about the project.",
                img: "https://picsum.photos/100",
                url: "/blogs",
            },
            {
                title: "Project Two",
                description: "A description about the project will go here. Makie it short but snappy, ensuring I list some key words about the project.",
                img: "https://picsum.photos/100",
                url: "/blogs",
            }
        ]
      };
    }
}
</script>

