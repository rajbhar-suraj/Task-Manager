import React, { useState } from 'react'
import Input from './components/Input'
import TaskList from './components/TaskList'
import {TaskContextProvider} from './contexts/TaskContext';

const App = () => {

  return (
    <TaskContextProvider>
      <div className='bg-zinc-950 min-h-screen flex flex-col justify-center items-center'>
        
      <h1 className='text-2xl text-white font-extrabold'>Task Manager</h1>

      <div className='bg-zinc-800 h-90 w-170 rounded-md flex flex-col space-y-3 justify-center items-center'>
        <Input />
      </div>

      <div className='rounded-md mt-4 flex '>
        <TaskList />
      </div>

    </div>
    </TaskContextProvider>

  )
}

export default App