"use client";
import { Expense } from "@/types";
import React from "react";
import ExpenseItem from "./ExpenseItem";

type Props = {
  expenses: Expense[];
  onDelete: (id: string) => void;
  onUpdate: (e: Expense) => void;
};

const ExpenseList = ({ expenses, onDelete, onUpdate }: Props) => {
  return (
    <div className="space-y-2">
      {expenses.map((e) => (
        <ExpenseItem
          key={e.id}
          expense={e}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
