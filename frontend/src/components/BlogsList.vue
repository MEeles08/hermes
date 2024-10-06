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
      <!-- <div class="col-md-8">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search by title"
            v-model="title"/>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"
              @click="searchTitle"
            >
              Search
            </button>
          </div>
        </div>
      </div> -->
      <div class="col-md-6 scrollable-container">
        <h4>Recent Blogs</h4>
        <!-- <ul class="list-group">
          <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(blog, index) in blogs"
            :key="index"
            @click="setActiveBlog(blog, index)"
          >
            {{ blog.title }}
          </li>
        </ul> -->

        <BlogCard v-for="(blog, index) in blogs" 
          :key="index" 
          :currentIndex="this.currentIndex" 
          :index="index" 
          :data="blog" 
          @setActiveBlog="setActiveBlog"
        />

        <SanityCard v-for="(blog, index) in posts" 
          :key="index" 
          :currentIndex="this.currentIndex" 
          :index="index" 
          :data="blog" 
          @setActivePost="setActivePost"
        />

        <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllBlogs">
          Remove All
        </button> -->

      </div>
      <div class="col-md-6">
        <div v-if="currentPost">
          <h4>Blog</h4>
          <div>
            <label><strong>Title:</strong></label> {{ currentPost.title }}
          </div>
          <div>
            <label><strong>Description:</strong></label> {{ currentPost.description }}
            <PortableText 
              :value="currentPost.body" 
            />
          </div> 

          <div>
            <div v-for="block in currentPost.body" :key="block._key">
              <div v-if="block._type === 'block'">
                <p :class="block.style">{{ block.children[0].text }}</p>
              </div>
              <div v-else-if="block._type === 'image'">
                <img :src="block.asset.url" :alt="block.alt || 'Image'" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <br />
          <p>Please click on a Blog...</p>
        </div>
        <!-- <div v-if="currentBlog">
          <h4>Blog</h4>
          <div>
            <label><strong>Title:</strong></label> {{ currentBlog.title }}
          </div>
          <div>
            <label><strong>Description:</strong></label> {{ currentBlog.description }}
          </div>
          <div>
            <label><strong>Status:</strong></label> {{ currentBlog.published ? "Published" : "Pending" }}
          </div>
  
          <router-link :to="'/blogs/' + currentBlog._id" class="btn btn-primary">Edit</router-link>
        </div>
        <div v-else>
          <br />
          <p>Please click on a Blog...</p>
        </div> -->
      </div>
    </div>
                 
      </div>

    </div>
  </div>
</div>

  </template>
  
  <script>
  import { PortableText } from '@portabletext/vue';
  import Navbar from "./partials/Navbar.vue";
  import BlogCard from "./elements/BlogCard.vue";
  import SanityCard from "./elements/SanityCard.vue";
  import BlogDataService from "../services/BlogDataService";
  import SanityDataService from "../services/SanityDataService";
  
  export default {
    name: "blogs-list",
    components: {
      Navbar,
      BlogCard,
      SanityCard,
      PortableText,
    },
    data() {
      return {
        blogs: [],
        posts: [],
        currentBlog: null,
        currentPost: null,
        currentIndex: -1,
        title: "",
      };
    },
    methods: {

      retrievePosts() {
        SanityDataService.getAll()
          .then(response => {
            console.log(response.data)
            this.posts = response.data;
            this.currentPost = this.posts[0];
          })
          .catch(e => {
            console.log(e)
          })
      },

      retrieveBlogs() {
        BlogDataService.getAll()
          .then(response => {
            this.blogs = response.data;
            console.log(response.data);
            this.currentBlog = this.blogs[0]
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      refreshList() {
        this.retrieveBlogs();
        this.currentBlog = null;
        this.currentIndex = -1;
      },
  
      setActiveBlog(blog, index) {
        this.currentBlog = blog;
        this.currentIndex = blog ? index : -1;
      },

      setActivePost(blog, index) {
        this.currentPost = blog;
        this.currentIndex = blog ? index : -1;
      },
  
      removeAllBlogs() {
        BlogDataService.deleteAll()
          .then(response => {
            console.log(response.data);
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      searchTitle() {
        BlogDataService.findByTitle(this.title)
          .then(response => {
            this.blogs = response.data;
            this.setActiveBlog(null);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
    },
    mounted() {
      // this.retrieveBlogs();
      this.retrievePosts();

    }
  };
  </script>
  
  <style>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
  </style>