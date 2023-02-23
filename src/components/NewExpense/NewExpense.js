import React, { useState } from "react"
import './NewExpense.css'
import ExpenseForm from "./ExpensesForm"
const NewExpense=(props)=>{
 const [isEditing,setIsEditing]=useState(false)   
const saveExpenseDataHandler = (enteredExpenseData)=>{
    const expenseData = {
        ...enteredExpenseData,
        id:Math.random().toString()
    };
    props.onAddExpense(expenseData)
}

const startEditingHandler =()=>{
    setIsEditing(true)
}

const startEditingHandlers=(event)=>{
    setIsEditing(event)
}


return (
    <div className="new-expense">
       {isEditing === false && <button onClick={startEditingHandler}>Add New Expenses</button>}
       {isEditing === true && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} editing ={startEditingHandlers}/>}
    </div>
)
}

export default NewExpense