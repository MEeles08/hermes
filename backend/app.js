const express = require('express');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 8080;
require('dotenv').config();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch(err => {
    console.log("Cannot connect to the database", err);
    process.exit();
  });

app.get('/', (req, res) => {
    res.json({message: "Welcome"});
});

require("./app/routes/blog")(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})