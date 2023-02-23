import React,{useState} from "react"

import ExpensesFilter from "./Expensefilter"
import ExpenseList from "./ExpenseList"
import Card from "../UI/Card"
import ExpenseChart from "./ExpenseChart"
import './Expensies.css'
const Expensies = (props)=>{
 const [filteredYear,setFilteredYear] = useState('2020')

    const fiterChangeHandler = selectedYear =>{
        setFilteredYear(selectedYear)
    }
     
    const filteredExpenses = props.item.filter((expense)=>{
        return expense.date.getFullYear().toString() === filteredYear
    })

  
 return (
    <>   
        <Card className = "expenses">
                <ExpensesFilter 
                onChangeFilter = {fiterChangeHandler} 
                selected = {filteredYear}
                />
                
                <ExpenseChart expenses={filteredExpenses}/>
             
                <ExpenseList items = {filteredExpenses} />
        </Card>
    </>
  )
}
export default Expensies


        //     {/* {filteredExpenses.length === 0 && <p>No Expenses Found.</p>}
        //     {filteredExpenses.length > 0 && 
        //      filteredExpenses.map(expens=><ExpenseItem 
        //         key={expens.id}
        //         title = {expens.title}
        //         amount = {expens.amount} 
        //         date = {expens.date}/>
        //     )} */}
        //     {/* {filteredExpenses.length === 0 ? <p>No Expenses Found.</p>:
        //        filteredExpenses.map(expens=><ExpenseItem 
        //         key={expens.id}
        //         title = {expens.title}
        //         amount = {expens.amount} 
        //         date = {expens.date}/>
        //     )
        //    } */}