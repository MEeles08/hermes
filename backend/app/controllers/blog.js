const multer = require('multer');
const Cloudinary = require('../utils/cloudinary');
const db = require("../models");
const Blog = db.blogs;

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });


// Create and Save a new Blog
exports.create = async (req, res) => {
  let imageUrl = 'No image received';
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Check for image file in request
  if (req.file) {
    const result = await Cloudinary.uploader.upload(req.file.path);
    imageUrl = result.secure_url; // Get the URL from the result
  }
  
  // Create a Blog
  const blog = new Blog({
    title: req.body.title,
    artisect: req.body.artisect,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
    imageUrl: imageUrl
  });

  // Save Blog in the database
  blog
    .save(blog)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Blog."
      });
    });
};

// Retrieve all Blogs from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    Blog.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Blogs."
        });
      });
};

// Find a single Blog with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Blog with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Blog with id=" + id });
      });
};

// Update a Blog by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const id = req.params.id;
    
      Blog.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Blog with id=${id}. Maybe Blog was not found!`
            });
          } else res.send({ message: "Blog was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Blog with id=" + id
          });
        });
};

// Delete a Blogwith the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Blog with id=${id}. Maybe Blog was not found!`
          });
        } else {
          res.send({
            message: "Blog was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Blog with id=" + id
        });
      });
};

// Delete all Blogs from the database.
exports.deleteAll = (req, res) => {
    Blog.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Blogs were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Blogs."
      });
    });
};

// Find all published Blogs
exports.findAllPublished = (req, res) => {
    Blog.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Blogs."
      });
    });
};