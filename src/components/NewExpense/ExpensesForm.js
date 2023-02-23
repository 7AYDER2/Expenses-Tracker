import React, { useState } from "react"
import './ExpensesForm.css'
const ExpenseForm = (props)=>{
    const [enteredTitle,setEnterdTitle]=useState("");
    const [enteredAmount,setEnterdAmount] = useState("")
    const [enterdDate,setEnterdDate]=useState("")
    // const [userInput,setUserInput] = useState({
    //         enteredTitle:'',
    //         enteredAmount:'',
    //         enteredDate:''
    // });

    const titleChangeHandler = (event)=>{
        setEnterdTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value,
        // })
        // setUserInput((prevState)=>{
        //     return {...prevState, enteredTitle : event.target.value}
        // })
    }

    const amountChangeHandler = (event) =>{
        setEnterdAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value,
        // })
    }

    const enterdDateHandler = (event)=>{
        setEnterdDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // })
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enterdDate)
        }
       props.onSaveExpenseData(expenseData);
       setEnterdTitle('');
       setEnterdAmount('')
       setEnterdDate('');
    }

    const clickEditingHandler = ()=>{
        props.editing(false)
    }

return (
    <form onSubmit={submitHandler}>
   <div className="new-expense__controls">
     <div className="new-expense__control">
        <label>Title</label>
        <input 
        type="text" 
        value={enteredTitle}
        onChange={titleChangeHandler}/>
     </div>
     <div className="new-expense__control">
        <label>Amount</label>
        <input
         type="number" 
         min="0.01" 
         step="0.01"
         value={enteredAmount}
         onChange={amountChangeHandler} />
     </div>
     <div className="new-expense__control">
        <label>Date</label>
        <input 
        type="date" 
        min="2019-01-01"
        max="2022-12-31" 
        value={enterdDate}
        onChange={enterdDateHandler}/>
     </div>
   </div>
   <div className="new-expense__actions">
   <button onClick={clickEditingHandler}>cancle</button>
     <button type="submit">Add Expenses</button>
   </div>
 </form>
)
}

export default ExpenseForm
