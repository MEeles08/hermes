<template>

  <div class="container-fluid mt-4">
    <div class="row">
      <Navbar />

      <!-- Right Column (80%) with 3 sections -->
      <div class="col-md-10 right-column d-flex flex-column">
        <Header />

        <div class="middle-section section">
          <!-- Blog insert here  -->
          <div class="row">
            <div class="col-md-12 scrollable-container">
              <h4>Recent Blogs</h4>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
  
  <script>
  // import { PortableText } from '@portabletext/vue';
  import Navbar from "./partials/Navbar.vue";
  import Header from "./elements/Header.vue";
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
      Header,
      // PortableText,
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

      getOrdinal(n) {
        const suffixes = ["th", "st", "nd", "rd"];
        const value = n % 100;
        return suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0];
      },

      dateTransform(originalDate) {
        const date = new Date(originalDate);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const year = date.getFullYear();
        return `${day}${this.getOrdinal(day)} of ${month}, ${year}`;
      },

      renderBody(body) {
        return body.map(block => {
          switch (block._type) {
            case 'image': {
              return `<img src="${block.asset.url}" alt="${block.alt || ''}" width='250px' height='auto' />`;
            }
            case 'block': {
              const textContent = block.children.map(child => child.text).join('');
              return `<p>${textContent}</p>`;
            }
            case 'list': {
              return `<ul>${block.listItems.map(item => `<li>${item.children.map(child => child.text).join('')}</li>`).join('')}</ul>`;
            }
            case 'h1': {
              return `<h1>${block.children.map(child => child.text).join('')}</h1>`;
            }
            case 'h2': {
              return `<h2>${block.children.map(child => child.text).join('')}</h2>`;
            }
            case 'h3': {
              return `<h3>${block.children.map(child => child.text).join('')}</h3>`;
            }
            case 'blockquote': {
              return `<blockquote>${block.children.map(child => child.text).join('')}</blockquote>`;
            }
            case 'code': {
              return `<pre><code>${block.code}</code></pre>`;
            }
            default: {
              return '';
            }
          }
        }).join('');
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