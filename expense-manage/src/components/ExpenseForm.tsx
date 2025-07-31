"use client";
import { Expense } from "@/types";
import React, { useState } from "react";

type Props = {
  onAdd: (expense: Expense) => void;
};

const ExpenseForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) {
        alert("Vui lòng nhập cả tên khoản chi và số tiền");
        return;
    }
    onAdd({
      id: Date.now().toString(),
      title,
      amount: parseFloat(amount),
      date,
    });
    setTitle("");
    setAmount("");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-6 w-full">
      <input
        type="text"
        className="border p-2 w-full rounded-2xl m-1"
        placeholder="Tên khoản chi"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        className="border p-2 w-full rounded-2xl m-1"
        placeholder="Số tiền"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        className="border p-2 w-full rounded-2xl m-1" 
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-2xl block mx-auto m-1"
      >
        Thêm khoản chi
      </button>
    </form>
  );
};

export default ExpenseForm;
