import React,{useState,useEffect} from 'react';
import TaskItem from './TaskItem';
// import background from '../assets/background.jpg'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import {list} from "postcss"

const getTasksFromLocalStorage=()=>{
  //get the savedtasks from the loacal storage
  const savedTasks = localStorage.getItem("tasks");
  if(!savedTasks)return[];
  return JSON.parse(savedTasks);
};

function TaskManager() {
  const[tasks,setTasks]= useState(getTasksFromLocalStorage)
  const[input,setInput]=useState("");


  const handleSubmit=(e)=>{
    e.preventDefault() ;
    // if (input==="")return;

    setTasks([input,...tasks],()=>{});
    setInput("")
    localStorage.setItem("tasks",JSON.stringify(tasks)); 
    };
   
    useEffect( ()=>{
      localStorage.setItem("tasks",JSON.stringify(tasks));
    
  },[tasks]);
  
  const handleDelete=idx=>{
    const newTasks=tasks.filter(task=>task!==idx)
    setTasks(newTasks)
  }
  return (
    <div className='relative h-screen w-full bg-slate-800/90'>
      {/* <img src={background}alt=""
      className='h-screen w-full'
      /> */}
    
    <div className='bg-blue-600 h-full justify-center items-center flex px-5 py-10'>
     <div className='max-w-xl bg-white rounded-xl px-5 py-10 max-h-[500px]' >

      <form 
      className='w-full space-x-5 flex justify-between mb-10'
      onSubmit={handleSubmit} 
      >

        <input type="text" 
        className='border-2 border-blue-400 p-2 rounded-md outline-none w-10/12 ' 
        onChange={(e)=>setInput(e.target.value)} 
        value={input}/>
        <button type="submit"
         className='bg-blue-700 px-7 py-2 text-white text-lg rounded-md'
        disabled={input===""}
        >
          Add
        </button>
       </form>
         <div className='space-y-2 overflow-y-auto h-56'>
         {/* <TaskItem/>
         <TaskItem/>
         <TaskItem/>
         <TaskItem/> */}
          {tasks.map((task)=>(
          <TaskItem task ={task} handleDelete={handleDelete}/>
          ))}
         </div>
       
     </div>

    </div>
    </div>
  )
}

export default TaskManager;