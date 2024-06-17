import { useState } from 'react';
import Expensedate from '../expense_date/expensedate';
import './expenseitem.css'

const ExpenseItem=(props) =>{
    console.log(props)
    const {dat,title,amount}=props;
/*const update=()=>{
document.getElementById('idin').innerHTML="Updated";
}
-----------------------------------------
let title_=title;
const update=()=>{
    title_'Updated';
    console.log(title_);
}*/
const [currentTitle, setCustomTitle]=useState(title);
const update=()=>{
    setCustomTitle('Updated');
}

    return(
        <div className="expense-item">
            <Expensedate data={dat}/>
            <div className="expense-item__description">
                {/* <h2 id='idin'>{title}</h2>
                --------------------------
                <h2>{title_}</h2> */}
                <h2>{currentTitle}</h2>
            </div>
            <div className="expense-item__price" >{amount}</div>
            <button onClick={update}>Update</button>
        </div>
        
    )
};
export default ExpenseItem;