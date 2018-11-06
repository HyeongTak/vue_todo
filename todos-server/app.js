var experss = require('express');
var app = experss();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var index = require('./router/index');
var todos = require('./router/todos');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/todoapp',{ useNewUrlParser: true })
mongoose.Promise = global.Promise; 

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/', index);
app.use('/api/todos', todos);

module.exports = app;