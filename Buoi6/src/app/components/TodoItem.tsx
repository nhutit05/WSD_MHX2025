"use client"
import { useState } from 'react'
import { Task } from '../page'



const TodoItem = ({task, ToggleTask, EditTask, DelTask}:{task: Task, ToggleTask: (id: number) => void, EditTask: (id: number, title: string) => void, DelTask: (id: number) => void}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    if (isEditing) {
      EditTask(task.id, editedTitle);
    }
    setIsEditing(!isEditing);
  };
    return (
    <li className='flex justify-between w-full items-center gap-3'>
       {isEditing ? (
        <input
          type="text"
          className="border p-1 rounded w-full"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          autoFocus
        />
      ) : (
        <span className={`truncate w-full ${task.completed ? "line-through text-gray-400" : ""}`}>
          {task.title}
        </span>
      )}
        <input type="checkbox" checked = {task.completed} onChange={() => ToggleTask(task.id)} className='w-4 h-4'/>
        <button onClick={handleEdit}><img src="./edit.svg" className='w-7 h-5'/></button>
        <button onClick={()=>DelTask(task.id)}> <img src="./del (1).svg" className='w-8 h-5'/> </button>
    </li>
  )
}

export default TodoItem