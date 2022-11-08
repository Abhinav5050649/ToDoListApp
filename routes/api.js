const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.get('/Todos', (req, res, next) => {
    Todo.find({}, 'action')
        .then((data) => res.json(data))
        .catch(next);
})

router.post('/Todos', (req, res, next) => {
    
    if (req.body.action)   
    {    
        Todo.create(req.body)
            .then((data) => res.json(data))
            .catch(next);    
    }
    else{
        res.json({
            error: `The text field is empty`
        });
    }
});

router.delete('/Todos/:id', (req, res, next) => {
    Todo.findOneAndDelete( {_id: req.params.id} )
        .then((data) => res.json(data))
        .catch(next);
});

module.exports = router;