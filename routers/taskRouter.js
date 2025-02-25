const express = require('express');
const {taskGet , addTask, updateTasks, deleteTask} = require('../controllers/taskController');
const router = express.Router()


router.post('/add-task' , addTask);
router.put('/update-task' , updateTasks);
router.delete('/delete-task/:id' , deleteTask);
router.get('/all/:email' , taskGet)

module.exports = router

