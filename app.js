const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRouter = require("./src/routes/Product");
const linkRouter = require("./src/routes/Link");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://omigusty:Omistyfani29@playground.zjrnzsz.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((error) => {
    console.error("Mongodb failde to connect", error);
  });

app.get("/", (req, res) => {
  res.json({
    message: "Hello, world!",
  });
});

app.use(productRouter);
app.use(linkRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
