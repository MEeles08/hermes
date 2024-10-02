<template>
    <div v-if="currentBlog" class="edit-form">
      <h4>Blog</h4>
      <form>
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title"
            v-model="currentBlog.title"
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <input type="text" class="form-control" id="description"
            v-model="currentBlog.description"
          />
        </div>
  
        <div class="form-group">
          <label><strong>Status:</strong></label>
          {{ currentBlog.published ? "Published" : "Pending" }}
        </div>
      </form>
  
      <button class="badge badge-primary mr-2"
        v-if="currentBlog.published"
        @click="updatePublished(false)"
      >
        UnPublish
      </button>
      <button v-else class="badge badge-primary mr-2"
        @click="updatePublished(true)"
      >
        Publish
      </button>
  
      <button class="badge badge-danger mr-2"
        @click="deleteBlog"
      >
        Delete
      </button>
  
      <button type="submit" class="badge badge-success"
        @click="updateBlog"
      >
        Update
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Please click on a Blog...</p>
    </div>
  </template>
  
  <script>
  import BlogDataService from "../services/BlogDataService";
  
  export default {
    name: "blog",
    data() {
      return {
        currentBlog: null,
        message: ''
      };
    },
    methods: {
      getBlog(id) {
        BlogDataService.get(id)
          .then(response => {
            this.currentBlog = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      updatePublished(status) {
        var data = {
          id: this.currentBlog.id,
          title: this.currentBlog.title,
          description: this.currentBlog.description,
          published: status
        };
  
        BlogDataService.update(this.currentBlog.id, data)
          .then(response => {
            console.log(response.data);
            this.currentBlog.published = status;
            this.message = 'The status was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      updateBlog() {
        BlogDataService.update(this.currentBlog.id, this.currentBlog)
          .then(response => {
            console.log(response.data);
            this.message = 'The blog was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
      },
  
      deleteBlog() {
        BlogDataService.delete(this.currentBlog.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "blogs" });
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    mounted() {
      this.message = '';
      this.getBlog(this.$route.params.id);
    }
  };
  </script>
  
  <style>
  .edit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>