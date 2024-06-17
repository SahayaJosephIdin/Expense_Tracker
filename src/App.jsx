import './App.css'
import Expenses from './component/expenses/expenses';
import ExpenseForm from './component/expense_form/ExpenseForm';
import { useState } from 'react';
import { nanoid } from 'nanoid';
const EXPENSES=[
  {
       id:nanoid(),
       date:"2023-02-05",
       title:"Flight",
       amount:"$770"
      
  },
  {
    id:nanoid(),
       date:"2023-04-07",
       title:"Train",
        amount:"$770"

  },
  {
      id:nanoid(),
       date:"2023-05-12",
       title:"Bus",
       amount:"$770"
  }
]
function App() {
  const [expenseList , setexpenseList]=useState(EXPENSES)
  const AddExpense=(NewExp)=>{
    setexpenseList([NewExp,...expenseList])
  }
  return (
    <>
      <ExpenseForm AddExpense={AddExpense}/>
      <Expenses expenseList={expenseList}/>
      
      
    </>
  )
}

export default App
