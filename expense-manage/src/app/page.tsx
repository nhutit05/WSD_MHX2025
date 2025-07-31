"use client"

import ExpenseForm from "@/components/ExpenseForm";
import ExpenseList from "@/components/ExpenseList";
import { Expense } from "@/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [expenses, setExpenses] = useState<Expense[]>([])
  useEffect(() => {
    const saved = localStorage.getItem("expenses");
    if (saved) setExpenses(JSON.parse(saved));
  }, []
  )
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses]
)
  const addExpense = (expense: Expense) => setExpenses([expense, ...expenses]);
  const deleteExpense = (id: string) => setExpenses(expenses.filter((e) => e.id != id));
  const updateExpense = (updated: Expense) => setExpenses(expenses.map((e) => (e.id === updated.id) ? updated: e));
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <>
      <main className="bg-blue-50 max-w-xl mx-auto rounded-2xl p-10 mt-5">
          <h1 className="text-2xl font-bold mb-4 text-center text-red-400">📝 Quản lý chi tiêu</h1>
          <ExpenseForm onAdd={addExpense}/>
          <ExpenseList expenses={expenses} onDelete={deleteExpense} onUpdate={updateExpense}/>
          <div className="mt-4 font-semibold text-lg">
              Tổng chi tiêu: {total.toLocaleString()} VND 
          </div>
      </main>
    </>
  );
}


