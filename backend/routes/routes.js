const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const UserModel = require("../model/model");

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  const userReq = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  };
  const user = await UserModel.create(userReq);
  res.json(user);
});

router.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error("An error occurred.");

        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { _id: user._id, username: user.username };
        const token = jwt.sign({ user: body }, "TOP_SECRET");
        console.log("token :", token);
        return res.json({ token });
        // return res.send("Logged In");
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

module.exports = router;
