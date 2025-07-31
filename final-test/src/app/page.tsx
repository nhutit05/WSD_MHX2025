"use client"

import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import TotalAmount from "./components/TotalAmount";

export type List = {
    id: number;
    expenseTitle: string;
    amount: number;
}

export default function Home() {
  const [lists, setList] = useState([
    {id: 1, expenseTitle: 'Ăn uống'}
  ])
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-1/2">
        <h1 className="font-bold text-center text-xl  w-full ">Quản lý chi tiêu</h1>
        <ExpenseForm />
        <ExpenseList />
        {/* <TotalAmount /> */}
      </main>
    </div>
  );
}
