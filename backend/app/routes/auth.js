module.exports = app => {
    const auth = require("../controllers/auth.js");
  
    const router = require("express").Router();
  
    // Generate a JWT token
    router.get("/generate-token", auth.generate);
  
    app.use('/api', router);
  };