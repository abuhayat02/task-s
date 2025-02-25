const mongoose = require('mongoose')


let taskControlling = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, rer: 'User' },
    title: { type: String, required: true, maxlength: 50 },
    email: { type: String, required: true },
    description: { type: String, required: true, maxlength: 200 },
    category: { type: String, require: true }
}, { timestamps: true })

let Task = mongoose.model('Task', taskControlling)

module.exports = Task;

