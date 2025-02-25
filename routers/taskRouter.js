const express = require('express');
const {taskGet , addTask} = require('../controllers/taskController');
const router = express.Router()


router.post('/add-task' , addTask);
router.get('/all' , taskGet)

module.exports = router

