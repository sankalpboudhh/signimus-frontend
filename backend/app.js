const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

require("./auth/auth");
const routes = require("./routes/routes");
const UserModel = require("./model/model");

const port = process.env.PORT || 1337;

mongoose.connect(process.env.DATABASE_URL);
mongoose.connection.on("error", (error) => console.log(error));
mongoose.Promise = global.Promise;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", routes);

// Handle errors.
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(port, () => {
  console.log("Server started at ", port);
});
