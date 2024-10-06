module.exports = app => {
    const sanity = require("../controllers/sanity.js");
    var router = require("express").Router();
    const { verifyToken } = require("../middleware/auth.js")
  
    // Retrieve all Posts
    router.get("/", verifyToken, sanity.findAll);
  
    // Retrieve a single Post using slug
    router.get("/:id", verifyToken, sanity.findOne);
  
    app.use('/api/sanity', router);
  };