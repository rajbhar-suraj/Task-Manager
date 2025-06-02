import { FaCheckCircle } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { useTaskContext } from '../contexts/TaskContext';
import { FaRegCircle } from "react-icons/fa";
import axios from 'axios';


const TaskList = () => {
  const { tasks, fetchTasks, taskDelete, setEditTask } = useTaskContext();


  async function deleteHandler(id) {
    await taskDelete(id);
  }

  async function toggleComplete(id, status) {
    try {
      await axios.put(`http://localhost:5000/tasks/toggle/${id}`, { completed: status });
      console.log(id,status,'check toggle');
      fetchTasks(); // ⬅️ This updates the state with new task data
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className='flex flex-col items-center space-y-1 '>
      {
        tasks.length > 0 ? tasks.map((task) => (

          <div className='flex relative' key={task._id}>
            <span className='text-white text-3xl absolute left-1.5 mt-7 cursor-pointer' 
            onClick={()=>toggleComplete(task._id,!task.completed)}>{task.completed ? <FaCheckCircle /> : <FaRegCircle />}</span>

            <div className='bg-zinc-800 text-white p-3 w-170 text-xl rounded-md'>

              <h1 className='tex-xl font-normal text-gray-200 ml-10'>{task.title}</h1>
              <h2 className="ml-10">{task.description}</h2>

            </div>
            <span className='text-white text-4xl absolute right-0 mt-6 mr-14 cursor-pointer'><CiEdit onClick={() => setEditTask(task)} /></span>
            <span className='text-white text-4xl absolute right-0 mt-6 mr-2 cursor-pointer'><AiOutlineDelete onClick={() => deleteHandler(task._id)} /></span>
          </div>
        )) :
          <p className='p-4 text-center w-170 text-2xl text-white'>Start your day by creating one...</p>

      }
    </div>
  )
}

export default TaskList