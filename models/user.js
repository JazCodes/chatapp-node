var db = require('../db/config/config');

module.exports = {
  // Return a new promise for finding a single user
  findOne: function (user) {
    console.log(user);
    return new Promise ((resolve, reject) => {
      const queryString = 'SELECT * FROM User WHERE username=?';
      db.query(queryString, [user.usrnm, user.psw], (err, res) => {
        console.log('made it!');
        if (err) {
          // send back an error
          reject(err);
        } else {
          if (res.length) {
            // found a user with username that was passed in
            console.log('Found a user!', res);
            resolve(res[0]);
          } else {
            // did not find a user with username
            console.log('Could not find a user!');
            resolve(false);
          }
        }
      });
    });
  },
  create: function (user) {
    console.log(user)
    return new Promise ((resolve, reject) => {
      const queryString = 'INSERT INTO user(username,password) VALUES(?,?)';
      console.log(queryString)
      db.query(queryString, [user.usrnm, user.psw], (err, res) => {
        console.log('created!');
        if (err) {
          // send back an error
          reject(err);
        } else {
            // 

                resolve(user);
          
        }
      });
    });
  },