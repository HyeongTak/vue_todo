var experss = require('express');
var app = experss();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var todos = require('./router/todos');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/todoapp',{ useNewUrlParser: true })
mongoose.Promise = global.Promise; 

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connnected to mongod server");
});

app.use('/api/todos',todos);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
});