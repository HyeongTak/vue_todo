var express = require('express');
var router = express.Router();
var Todos = require('../models/todo');

router.get('/todos', function(req,res){
    Todos.find(function(err, todo){
        res.send(todo);
    });
});

router.post('/todos', function(req,res){
    var todo = new Todos();
    todo.name = req.name;
    todo.save(function(err){
        if(err){
            console.error(err);
            return;
        }
        console.log("저장");
    });
});

        
        

module.exports = router;