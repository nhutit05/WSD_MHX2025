"use client"
import { Expense } from '@/types'
import React, { useState } from 'react'

type Props = {
    expense: Expense,
    onDelete: (id: string) => void,
    onUpdate: (e: Expense) => void
}

const ExpenseItem = ({expense, onDelete, onUpdate}: Props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(expense.title);
    const [amount, setAmount] = useState(expense.amount.toString());
    const [date, setDate] = useState(expense.date);
    const handleUpdate = () => {
        onUpdate({
            ...expense,
            title,
            amount: parseFloat(amount),
            date,
        })
        setIsEditing(false)
    }
  return (
    <div className="border p-2 rounded">
      {isEditing ? (
        <>
          <input className="border mb-1 w-full p-2" value={title} onChange={(e) => setTitle(e.target.value)} />
          <input className="border mb-1 w-full p-2" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <input className="border mb-1 w-full p-2" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <div className="space-x-2">
            <button onClick={handleUpdate} className="text-green-600">Lưu</button>
            <button onClick={() => setIsEditing(false)} className="text-gray-500">Hủy</button>
          </div>
        </>
      ) : (
        <div className="flex justify-between items-center rounded-2xl">
          <div>
            <div className="font-semibold">{expense.title}</div>
            <div>{expense.amount.toLocaleString()} VND</div>
            <div className="text-sm text-gray-600">{expense.date}</div>
          </div>
          <div className="space-x-2">
            <button onClick={() => setIsEditing(true)} className="text-blue-500">Sửa</button>
            <button onClick={() => onDelete(expense.id)} className="text-red-500">Xoá</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExpenseItem