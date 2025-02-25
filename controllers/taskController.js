const mongoose = require('mongoose');
const Task = require('../Models/taskModel');

let addTask = async (req, res) => {
    try {
        let { user, title, email, description, category } = req.body;

        let newTask = new Task({
            user,
            title,
            email,
            description,
            category
        })
        await newTask.save();
        res.status(201).send({
            success: true,
            data: {
                user,
                title,
                email,
                description,
                category
            }
        })

    } catch (error) {
        res.status(401).send({
            success: false,
            message: error.message
        })
    }
}


let taskGet = async (req, res) => {
    try {
        let UserEmail = req.params.email;
        let info = await Task.find({
            email: UserEmail
        })
        res.status(201).send({
            success: true,
            data: info,
        })


    } catch (error) {
        res.status(401).send({
            success: false,
            message: error.message
        })
    }



}

let updateTasks = async (req, res) => {
    try {
        let { user, title, email, description, category } = req.body;
        

    } catch (error) {
        res.status(401).send({
            success: false,
            message: error.message
        })
    }
}


module.exports = { taskGet, addTask };

