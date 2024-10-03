module.exports = app => {
    const blogs = require("../controllers/blog.js");
  
    var router = require("express").Router();

    const { verifyToken } = require("../middleware/auth.js")
  
    // Create a new Blog
    router.post("/", blogs.create);
  
    // Retrieve all Blogs
    router.get("/", blogs.findAll);
  
    // Retrieve all published Blogs
    router.get("/published", blogs.findAllPublished);
  
    // Retrieve a single Blog with id
    router.get("/:id", blogs.findOne);
  
    // Update a Blog with id
    router.put("/:id", blogs.update);
  
    // Delete a Blog with id
    router.delete("/:id", blogs.delete);
  
    // Delete all Blogs
    router.delete("/", blogs.deleteAll);
  
    app.use(verifyToken);
    app.use('/api/blogs', router);
  };