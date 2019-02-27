var express = require('express');

var path = require('path');

var logger = require('morgan');


var bodyParser = require('body-parser'); 
var cookieParser = require('cookie-parser'); 
var port = 3000; 
var routes = require('./routes/index');
var user = require('./routes/user'); 
var app = express(); 
app.use(logger('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use('/', routes);
app.use('/user', user);


app.listen(port, function() {
  console.log('Listening in on port: ' + port);
  console.log('http://localhost:' + port + "/");
});

module.exports = app; 
