"use client"

import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTask] = useState([
    {id: 1, title: "Learn React 1", completed: false},
    {id: 2, title: "Learn React 2", completed: false},
    {id: 3, title: "Learn React 3", completed: true},
  ]);

  const ToggleTask = (id: number) => {
    setTask(tasks.map(task => 
        task.id === id ? {...task, completed: !task.completed} : task
    ))
  }

  useEffect(() => {
    const saveTasks = localStorage.getItem('tasks')
    if (saveTasks) 
        setTask(JSON.parse(saveTasks))
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const [newTask, setNewTask] = useState("")

  const addTask = () => {
    if (newTask.trim() != '')
      setTask([...tasks, {
      id: Date.now(),
      title: newTask,
      completed: false,
    }])
  }

  const DelTask = (id: number) => {
    setTask(tasks.filter(task => task.id !== id))
  }

  const EditTask = (id: number, newTitle: string) => {
  setTask(tasks.map(task =>
    task.id === id ? { ...task, title: newTitle } : task
  ));
};

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2 className="font-bold text-center w-full text-xl">TODO LIST</h2>
        <div className="flex items-center">
            <input type="text" placeholder="Enter your task here" className="text-black p-2 border border-black" 
            onChange={(e) => setNewTask(e.target.value)} />
            <button className="font-bold p-2 border border-black" onClick={addTask} >Add</button>
        </div>
        <TodoList tasks = {tasks} ToggleTask={ToggleTask} EditTask={EditTask} DelTask={DelTask}/>
      </main>
    </div>
  );
}
