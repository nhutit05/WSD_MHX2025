"use client"
import React from 'react'
import { Task } from '../page'
import TodoItem from './TodoItem'

const TodoList = ({tasks, ToggleTask, EditTask, DelTask}:{tasks: Task[], ToggleTask: (id: number) => void,  EditTask: (id: number, title: string) => void, DelTask: (id: number) => void}) => {
  return (
    <ul className='w-full'>
            {
            tasks.map((task) => (
                <TodoItem task = {task} ToggleTask={ToggleTask} EditTask = {EditTask} DelTask={DelTask}/>
            ))
            }
    </ul>
  )
}

export default TodoList