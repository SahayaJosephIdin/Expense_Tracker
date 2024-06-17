import { useState } from 'react'
import './ExpenseForm.css' 
import { nanoid } from 'nanoid'
const ExpenseForm=(props)=>
{  
  const {AddExpense}=props
  const [title,setTitle]=useState('')    
  const TitleChange=(event)=>{
     setTitle(event.target.value)
  }
  const [amount,setAmount]=useState('')    
  const AmountChange=(event)=>{
     setAmount(event.target.value)
  }
  const [date,setDate]=useState('')    
  const DateChange=(event)=>{
     setDate(event.target.value)
  }
  const handleSubmit=(event)=>{
     event.preventDefault();
     const object={
      id:nanoid(),
      date:date,
      title:title,
      amount:amount
      
     }
     AddExpense(object);
  }
  return(
    <>
        <div className='new-expense'>
        <form onSubmit={handleSubmit}>
          <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label htmlFor="">Title</label>
            <input type="text" onChange={TitleChange}/>
          </div>
          <div className='new-expense__control'>
            <label htmlFor="">Amount</label>
            <input type="text" onChange={AmountChange} />
          </div>
          <div className='new-expense__control'>
            <label htmlFor="">Date</label>
            <input type="date" onChange={DateChange}/>
          </div>
          </div>
          <div className='new-expense__actions'>
            <button type='button'>Cancel</button>
            <button type='submit'>Add Expense</button>
          </div>
          
        </form>
        
        </div>
        </>
  )
}
export default ExpenseForm;