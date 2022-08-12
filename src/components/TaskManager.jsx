import React from 'react'
import TaskItem from './TaskItem'


function TaskManager() {
  return (
    <div className='bg-blue-600 h-screen justify-center items-center flex '>
     <div className='max-w-xl bg-white rounded-xl px-5 py-10 ' >

      <form className='space-x-5 flex w-[30rem] mb-10'>

        <input type="text" className='border-2 border-blue-400 p-2 rounded-md outline-none w-10/12 ' />
        <button type="submit" className='bg-blue-700 px-5 py-2 text-white text-lg rounded-md'>Add</button>
       </form>
         <div className='space-y-2'>
         <TaskItem/>
         <TaskItem/>
         <TaskItem/>
         <TaskItem/>
         </div>
       
     </div>

    </div>
  )
}

export default TaskManager