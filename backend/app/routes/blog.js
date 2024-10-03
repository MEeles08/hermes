module.exports = app => {
    const blogs = require("../controllers/blog.js");
    var router = require("express").Router();
    const { verifyToken } = require("../middleware/auth.js")
  
    // Create a new Blog
    router.post("/", verifyToken, blogs.create);
  
    // Retrieve all Blogs
    router.get("/", verifyToken, blogs.findAll);
  
    // Retrieve all published Blogs
    router.get("/published", verifyToken, blogs.findAllPublished);
  
    // Retrieve a single Blog with id
    router.get("/:id",verifyToken, blogs.findOne);
  
    // Update a Blog with id
    router.put("/:id", verifyToken, blogs.update);
  
    // Delete a Blog with id
    router.delete("/:id", verifyToken, blogs.delete);
  
    // Delete all Blogs
    router.delete("/", verifyToken, blogs.deleteAll);
  
    app.use('/api/blogs', router);
  };