const Task = require('../models/TaskModel')

const createTask = async (req, res) => {
    // const { title, description, completed } = req.body
    try {
        const newTask = await Task.create(req.body)

        if (!newTask) res.status(400).json({ message: 'task not created' })
        res.status(201).json(newTask)
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: 'something went wrong white creating' })
    }
}

const getTask = async (req,res) => {
    try {
        const fetchTask = await Task.find()
        res.json(fetchTask)
    } catch (error) {
        console.log(error);
        res.status(400).json({message:"something went wrong while fetching"})
    }
}

const editTask = async (req,res) => {
    try {
        const edit = await Task.findByIdAndUpdate(req.params.id,{title:req.body.title,description:req.body.description},{new:true})
        console.log(edit);
        if(!edit) res.status(400).json({message : 'task not found'})
        res.status(201).json(edit)
    } catch (error) {
        res.status(400).json({message : 'something went wrong while editing'})
        console.log(error);
    }
}

const deleteTask = async (req,res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        res.json({message : 'task deleted successfully'})
        if(!task) res.status(400).json({message : 'task not found...'})
        

    } catch (error) {
        res.status(400).json({message : 'something went wrong while deleting'})   
        console.log(error);
    }
}

const toggleComplete = async (req,res) => {
    try {
        const {completed} = req.body
        const isCompleted = await Task.findByIdAndUpdate(req.params.id,{completed},{new:true})

        if(!isCompleted) res.status(400).json({message : 'Task not found...'})
        res.status(200).json(isCompleted)
    } catch (error) {
        res.status(400).json({message:'something went wrong',error : error})
    }
}

module.exports = {getTask,createTask,editTask,deleteTask,toggleComplete}