var express = require('express');
var router = express.Router();
var Todos = require('../models/todo');

router.get('/', function(req,res){
    Todos.find(function(err, todo){
        res.send(todo);
    });
});

router.post('/', function(req,res){
    var todo = new Todos();
    todo.name = req.body.name;
    todo.save(function(err){
        if(err){
            console.error(err);
            res.send('error');
            return;
        }
        res.send(todo);
        console.log("저장");
    });
});

router.delete('/:id', function(req,res){
    Todos.deleteOne({_id:req.params.id}, function(err, obj){
        if(err) throw err;
        console.log('삭제됨');
    });
})

module.exports = router;