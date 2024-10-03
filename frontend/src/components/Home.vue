<template>
    <div class="container-fluid mt-5">
        <div class="row">
            <!-- Left Column (20%) -->
            <div class="col-md-2 left-column">
                <!-- Profile Image -->
                <img src="https://picsum.photos/150" alt="Profile Image" class="rounded-circle profile-img">
                
                <!-- Social Links -->
                <div class="social-links">
                <a href="https://www.instagram.com" target="_blank"><i class="bi bi-instagram"></i> Instagram</a>
                <a href="https://www.facebook.com" target="_blank"><i class="bi bi-facebook"></i> Facebook</a>
                <a href="https://www.linkedin.com" target="_blank"><i class="bi bi-linkedin"></i> LinkedIn</a>
                <a href="https://www.github.com" target="_blank"><i class="bi bi-github"></i> GitHub</a>
                </div>
            </div>

            <!-- Right Column (80%) with 3 sections -->
            <div class="col-md-10 right-column d-flex flex-column">
                <div class="top-section section">
                    <h1>Matthew Eeles</h1>
                    <h3>Web Developer</h3>
                    <h5>Currently working <a href="https://firstsight.media">@FirstSightMedia</a></h5>
                    <p>Connect with me for frontend & backend development.</p>

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
                    <div class="box d-flex align-items-start shadow my-1">
                        <!-- Image on the left -->
                        <img src="https://picsum.photos/100" alt="Image">
                        <!-- Text content: title and description -->
                        <div>
                            <div class="title">Your Title Here</div>
                            <div class="description">
                            This is a brief description below the title. It can include more details about the content shown in the image.
                            </div>
                        </div>
                    </div>
                    <div class="box d-flex align-items-start shadow my-1">
                        <!-- Image on the left -->
                        <img src="https://picsum.photos/100" alt="Image">
                        <!-- Text content: title and description -->
                        <div>
                            <div class="title">Your Title Here</div>
                            <div class="description">
                            This is a brief description below the title. It can include more details about the content shown in the image.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
:root {
    --primary-color: #49d32a;
}

h1 { color: var(--primary-color); }
h5 { font-weight: 400;}
h5 a {text-decoration: none; color: #000; font-weight: 400;}
.section {
    padding: 20px;
    /* border: 1px solid #ccc; */
    margin-bottom: 15px;
}
.left-column {
    background-color: #f8f9fa; /* Light background for the left column */
    height: 100vh;
    padding: 20px;
    text-align: center;
}
.right-column {
    height: 100vh;
}
.top-section {
    min-height: 33%;
    background-color: #e9ecef; /* Light gray for top section */
}
.middle-section {
    height: auto;
    background-color: #dee2e6; /* Slightly darker gray for middle section */
}
.bottom-section {
    height: auto;
    background-color: #ced4da; /* Darker gray for bottom section */
}
.profile-img {
    max-width: 150px;
    margin-bottom: 20px;
}
.social-links a {
    display: block;
    margin: 5px 0;
    font-size: 1.2rem;
    color: #000;
    text-decoration: none;
}
.social-links a:hover {
    color: #007bff; /* Change color on hover */
}
#techstack { gap: 1rem;}
#techstack span { border-width: 3px!important; border-color: var(--primary-color)!important; }
.box {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    background-color: #f8f9fa;
}
.box img {
    max-width: 100px;
    height: auto;
    margin-right: 15px;
}
.title {
    font-size: 1.5rem;
    font-weight: bold;
}
.description {
    font-size: 1rem;
    color: #6c757d;
}
</style>

