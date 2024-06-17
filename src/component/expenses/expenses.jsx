import ExpenseItem from "../expense_item/expenseItem";
import './expenses.css'
const Expenses=(props) =>{
    const {expenseList}=props;
 
  return (
    <>
    <div className="expenses">
    { expenseList.map((item)=>
     {
        return <ExpenseItem key={item.id} dat={item.date} title={item.title} amount={item.amount}/>
     })}
    </div>
    </>
  )
}
export default Expenses