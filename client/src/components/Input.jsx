import React, { useEffect, useState } from 'react'
import { useTaskContext } from '../contexts/TaskContext';

const Input = () => {
  const { createTasks, editTask, setEditTask, taskEdit } = useTaskContext()
  const [input, setInput] = useState({
    title: '',
    description: ''
  });

  function inputHandler(e) {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    if (editTask) {
      setInput({ _id: editTask._id, title: editTask.title, description: editTask.description })

    } else {
      setInput({ title: '', description: '' })
    }
  }, [editTask])


  async function handleSubmit(e) {
    e.preventDefault();
    if (editTask) {

      await taskEdit({ input })
      setEditTask(null)

    } else {

      await createTasks({input})
      setEditTask(null)
      setInput({ title: '', description: '' });  // Reset form on add

    }
  }


  return (
    <form onSubmit={handleSubmit} className="space-y-4 flex flex-col">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={input.title}
        onChange={inputHandler}
        className="w-120 py-3 px-4 rounded-md bg-gray-700 text-white text-xl focus:outline-none focus:ring-3 focus:ring-zinc-500"
      />

      <textarea
        type="text-area"
        name="description"
        placeholder="Task Description"
        value={input.description}
        onChange={inputHandler}
        className="w-120 py-3 px-4 rounded-md bg-gray-700 text-white text-xl focus:outline-none focus:ring-3 focus:ring-zinc-500"
      />

      <button
        className="bg-black text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        {editTask ? "Edit Task" : "Add Task"}
      </button>
    </form>
  );
};

export default Input