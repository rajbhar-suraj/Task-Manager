const express = require('express');
const { createTask, getTask, editTask, deleteTask, toggleComplete } = require('../controllers/TaskController');
const router = express.Router();

router.post('/create',createTask);
router.get('/fetch',getTask);
router.put('/edit/:id',editTask);
router.put('/toggle/:id',toggleComplete);
router.delete('/delete/:id',deleteTask)

module.exports = router