import React from 'react';
import Input from './components/Input';
import TaskList from './components/TaskList';
import { TaskContextProvider } from './contexts/TaskContext';

const App = () => {
  return (
    <TaskContextProvider>
      <div className="bg-zinc-950 min-h-screen p-4 flex flex-col items-center">
        <h1 className="text-xl md:text-3xl text-white font-extrabold mb-6 text-center">
          Task Manager
        </h1>

        {/* Input Container */}
        <div className="bg-zinc-800 w-full max-w-xl rounded-md p-4 md:p-6 flex flex-col space-y-3 items-center shadow-md">
          <Input />
        </div>

        {/* Task List Container */}
        <div className="w-full max-w-xl mt-6">
          <TaskList />
        </div>
      </div>
    </TaskContextProvider>
  );
};

export default App;
