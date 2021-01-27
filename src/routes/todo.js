const express =  require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { addTodo, getTodo, deleteTodo, updateTodo, statusTodo } = require('../controllers/todo');

const { checkToken } = require('../middleware/authToken');

router.get('/get-todo', getTodo)
router.post('/add-todo', addTodo)
router.post('/delete-todo',deleteTodo)
router.post('/update-todo',updateTodo)
router.post('/chage-status',statusTodo)

module.exports = router;