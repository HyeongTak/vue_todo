var express = require('express');
var router = express.Router();
var Todos = require('../models/todo');

router.get('/', function(req,res){
    Todos.find(function(err, todo){
        res.send(todo);
        console.log('1');
    });
});

router.post('/', function(req,res){
    var todo = new Todos();
    todo.name = req.body.name;
    todo.save(function(err){
        if(err){
            console.error(err);
            res.send('오류');
            return;
        }
        res.send(todo);
        console.log("저장");
    });
});

module.exports = router;