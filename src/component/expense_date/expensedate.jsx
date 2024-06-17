    import './expensedate.css'
    const Expensedate=(props)=>{
    const{data}=props;
    const dataobj=new Date(data);
    //console.log(dataobj);
    const year=dataobj.getFullYear();
    const day=dataobj.getDate();
    const month=dataobj.toLocaleString('en-us',{month:'long'})
    return(
    
    <div className='expense-date'>
            <div className='expense-date__month '>{month}</div>
            <div className='expense-date__day '>{day}</div>
            <div className='expense-date__year '>{year}</div>
    </div>
    )
    }
export default Expensedate