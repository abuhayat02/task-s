const express = require('express');
const {taskGet , addTask, updateTasks} = require('../controllers/taskController');
const router = express.Router()


router.post('/add-task' , addTask);
router.post('/update-task' , updateTasks);
router.get('/all/:email' , taskGet)

module.exports = router

