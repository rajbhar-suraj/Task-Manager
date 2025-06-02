import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import React from 'react';
import { useTaskContext } from '../contexts/TaskContext';
import axios from 'axios';
const API = import.meta.env.VITE_API_URL;


const TaskList = () => {
  const { tasks, fetchTasks, taskDelete, setEditTask } = useTaskContext();

  async function deleteHandler(id) {
    await taskDelete(id);
  }

  async function toggleComplete(id, status) {
    try {
      await axios.put(`${API}/tasks/toggle/${id}`, { completed: status });
      fetchTasks();
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="flex flex-col items-center space-y-3 px-4 w-full max-w-2xl">
      {
        tasks.length > 0 ? tasks.map((task) => (
          <div
            key={task._id}
            className="bg-zinc-800 text-white p-4 rounded-lg flex items-start w-full shadow-md"
          >
            {/* Toggle Completion Icon */}
            <span
              className="text-2xl md:text-3xl cursor-pointer mt-1 mr-3"
              onClick={() => toggleComplete(task._id, !task.completed)}
            >
              {task.completed ? <FaCheckCircle /> : <FaRegCircle />}
            </span>

            {/* Task Content */}
            <div className="flex-1">
              <h1 className="text-lg md:text-xl font-semibold break-words">{task.title}</h1>
              <p className="text-sm md:text-base text-gray-300 break-words">{task.description}</p>
            </div>

            {/* Action Icons */}
            <div className="flex items-center space-x-2 ml-2">
              <CiEdit
                onClick={() => setEditTask(task)}
                className="text-2xl md:text-3xl cursor-pointer hover:text-blue-400"
              />
              <AiOutlineDelete
                onClick={() => deleteHandler(task._id)}
                className="text-2xl md:text-3xl cursor-pointer hover:text-red-400"
              />
            </div>
          </div>
        )) : (
          <p className="text-center text-white text-lg md:text-2xl mt-4">
            Start your day by creating one...
          </p>
        )
      }
    </div>
  );
};

export default TaskList;
