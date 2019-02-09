const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../models/UserModel");

// Post registration
const userController = {
  isAuthenticated(req, res, next) {
    // do any checks you want to in here

    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
    console.log("checking authentication, req.isAuthenticated", req.user ,req.isAuthenticated && req.isAuthenticated())

    if (req.isAuthenticated && req.isAuthenticated() === "true") {
      // if (typeof next === "function") {
        next();
      // }  
      // else {
        // return res.json({user: req.user})
      // }
    }
    else {

    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE, or atleat don't return priviledged data
      res.json({user: null});
    }
  },



  doRegister(req, res) {
    User.register(new User({ username: req.body.username, email: req.body.email, fullname: req.body.fullname, homeLocation: req.body.homeLocation, internLocation: req.body.internLocation }), req.body.password, (err, user) => {
      if (err) {
      // return res.render('register', { user : user });
        return res.json(err)
      }

      passport.authenticate('local')(req, res, () => {
        // res.redirect('/');
        res.json({user: user})
      });
    });
  },

  // Post login
  doLogin (req, res) {
    passport.authenticate('local')(req, res, () => {
    // res.redirect('/');
    res.json({user: req.user})
    });
  },

  // logout
  logout (req, res) {
    req.logout();
    res.json({user: null})
  },
  getCurrentUser (req, res) {
    if (req.isAuthenticated && req.isAuthenticated()) {
    // if (req.user && req.user._id) {
      res.json({user: req.user})
    }
    else {
      res.json({user: null})
    }
  }
}


module.exports = userController;
