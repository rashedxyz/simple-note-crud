const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const noteRoutes = require("./routes/noteRoutes");

// express app
const app = express();

// connect to mongodb and listen for requests

const dbURI = "mongodb://localhost:27017/note-app";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
};

mongoose
  .connect(dbURI, options)
  .then((result) => {
    app.listen(3000);
    console.log("connected");
  })
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");

// middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// routes
app.use("/", noteRoutes);
