import React, { useEffect, useState } from 'react';
import { useTaskContext } from '../contexts/TaskContext';

const Input = () => {
  const { createTasks, editTask, setEditTask, taskEdit } = useTaskContext();
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
      setInput({ _id: editTask._id, title: editTask.title, description: editTask.description });
    } else {
      setInput({ title: '', description: '' });
    }
  }, [editTask]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (editTask) {
      await taskEdit({ input });
      setEditTask(null);
    } else {
      await createTasks({ input });
      setEditTask(null);
      setInput({ title: '', description: '' });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 flex flex-col w-full max-w-lg px-4"
    >
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={input.title}
        onChange={inputHandler}
        className="w-full py-3 px-4 rounded-md bg-gray-700 text-white text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-zinc-500"
        required
      />

      <textarea
        name="description"
        placeholder="Task Description"
        value={input.description}
        onChange={inputHandler}
        className="w-full py-3 px-4 rounded-md bg-gray-700 text-white text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-zinc-500 resize-none"
        rows={4}
        required
      />

      <button
        type="submit"
        className="bg-black text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all duration-200"
      >
        {editTask ? "Edit Task" : "Add Task"}
      </button>
    </form>
  );
};

export default Input;
