import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData
    }
  };


  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData />
    </div>
  );
};

export default NewExpense;
