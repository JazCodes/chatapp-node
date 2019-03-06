const express = require('express');
const router = express.Router();
const User = require('../models/User');


user.get('/', function(req, res, next) {
  res.render('user');
});

user.get('/login', function(req, res, next) {
  res.render('login');
});

user.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/chats', function(req, res, next) {
  res.render('chats'); 
});


router.post('/login', function (req, res, next) {
  //expect username password
  console.log('This is what we received from the client:', req.body)
  User.findOne(req.body)
  .then((user) => {
    if (user) {
      if (req.body.psw === user.password) {
        // res.send(200, user);
        res.redirect("/user/chats")
      } else {
        res.send(400, {err: 'Incorrect password'});
      }
    } else {
      console.log(user);
      res.send(400, {err: 'No User'});
    }
  })
  .catch((err) => {
    console.log(err);
    res.send(500, err);
  });
});


router.post('/register', function (req, res, next) {
  console.log("43:", req.body)
  User.findOne(req.body)
  .then((user) => {
    if (user) {
      res.sendStatus(400, {err: 'Username already exists'});
    } else {
      return User.create(req.body);
    }
  })
  .then((user) => {
    console.log('created a user');
    // res.send(201, {success: 'Created new user'});
    res.redirect("/user/chats");
  })
  .catch((err) => {
    res.send(500, err);
    console.log('testing')
  });
});
module.exports = user;