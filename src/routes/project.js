const express =  require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { getProject,addProject, deleteProject, updateProject, statusProject } = require('../controllers/project');
const { checkToken } = require('../middleware/authToken');

router.get('/get-project', getProject)
router.post('/add-project', addProject)
router.delete('/delete-project',deleteProject)
router.put('/update-project',updateProject)
router.post('/chage-status',statusProject)

module.exports = router;