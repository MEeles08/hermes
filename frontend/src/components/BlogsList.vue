<template>

<div class="container-fluid mt-4">
  <div class="row">
    <Navbar />

    <!-- Right Column (80%) with 3 sections -->
    <div class="col-md-10 right-column d-flex flex-column">
      <div class="top-section section">
        <h3 class="mt-0 pt-0">Blog</h3>
        <p>Checkout my recent blogs</p>
      </div>
      <div class="middle-section section">
        <!-- Blog insert here  -->
        <div class="row">
      <div class="col-md-8">
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
      </div>
      <div class="col-md-6">
        <h4>Blogs List</h4>
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

        <button class="m-3 btn btn-sm btn-danger" @click="removeAllBlogs">
          Remove All
        </button>

        


      </div>
      <div class="col-md-6">
        <div v-if="currentBlog">
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
        </div>
      </div>
    </div>
                 
      </div>
      <div class="middle-section section">

      </div>
    </div>
  </div>
</div>

  </template>
  
  <script>
  import Navbar from "./partials/Navbar.vue";
  import BlogCard from "./elements/BlogCard.vue";
  import BlogDataService from "../services/BlogDataService";
  import SanityDataService from "../services/SanityDataService";
  
  export default {
    name: "blogs-list",
    components: {
      Navbar,
      BlogCard,
    },
    data() {
      return {
        blogs: [],
        posts: [],
        currentBlog: null,
        currentPost: null,
        currentIndex: -1,
        title: ""
      };
    },
    methods: {

      retrievePosts() {
        SanityDataService.getAll()
          .then(response => {
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