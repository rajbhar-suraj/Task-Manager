const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    completed : {
        type : Boolean
    }
},{timeStamps : true})

const Task = mongoose.model('task',taskSchema)
module.exports = Task