<template>
  <div id="app">
    <!-- <nav class="navbar navbar-expand navbar-dark bg-dark px-1">
      <router-link to="/" class="navbar-brand">Matt Eeles</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/blogs" class="nav-link">Blogs</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
      </div>
    </nav> -->

    <div class="container mt-3">
      <router-view />
    </div>
  </div>



  
</template>

<script>
export default {
  name: "app"
};
</script>