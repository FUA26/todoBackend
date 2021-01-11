const express =  require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { addTodo, getTodo, deleteTodo } = require('../controllers/todo');

const { checkToken } = require('../middleware/authToken');

router.get('/get-todo', getTodo)
router.post('/add-todo', addTodo)
router.delete('/delete-todo',deleteTodo)
// router.put('/update-project',updateProject)
// router.put('/chage-status',statusProject)

module.exports = router;