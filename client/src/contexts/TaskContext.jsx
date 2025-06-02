import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'

const TaskContext = createContext();

const API = import.meta.env.VITE_API_URL;

export const useTaskContext = () => useContext(TaskContext);

export const TaskContextProvider = ({ children }) => {

  const [tasks, setTasks] = useState([])
  const [editTask, setEditTask] = useState(null)

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${API}/tasks/fetch`)
      setTasks(response.data)
    } catch (error) {
      console.log(error.message);
    }
  }

  
  const createTasks = async ( {input} ) => {
    try {
      const response = await axios.post(`${API}/tasks/create`, input);
      console.log("running fetch",response.data);
      await fetchTasks()
  
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  async function taskDelete(id) {
    try {
      const response = await axios.delete(`${API}/tasks/delete/${id}`);
      await fetchTasks()
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function taskEdit({ input }) {
    try {
      const response = await axios.put(`${API}/tasks/edit/${input._id}`, input);
      await fetchTasks()
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  const value = {
    tasks,
    fetchTasks,
    createTasks,
    taskEdit,
    taskDelete,
    editTask,
    setEditTask
  }

  return <TaskContext.Provider value={value}>
    {children}
  </TaskContext.Provider>
}