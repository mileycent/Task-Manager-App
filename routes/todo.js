const router = require('express').Router()
const Todo = require('../models/todo')

// routes
router.post('/add/todo', (req, res) => {
    const {todo} = req.body;
    const newTodo = new Todo({todo})
    newTodo.save()
    .then(() => {
        console.log('Todo list added!')
        res.redirect('/')
    })
    .catch((err) => console.log(err));
        
});

module.exports = router;