const express =  require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { addTodo, getTodo, deleteTodo, updateTodo, statusTodo } = require('../controllers/todo');

const { checkToken } = require('../middleware/authToken');

router.get('/get-todo', getTodo)
router.post('/add-todo', addTodo)
router.delete('/delete-todo',deleteTodo)
router.put('/update-todo',updateTodo)
router.put('/chage-status',statusTodo)

module.exports = router;