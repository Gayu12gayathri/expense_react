import {useState } from 'react'
const ExpenseForm = (props)=>{
  const{addExpense} = props
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [errors, setErrors] = useState("")


    const handleSubmit = (e) => {
      e.preventDefault()
      let err = {}
      if(title.length < 3 ){
        err.title="Title should atleast 3 chars long"
      }
      if(!amount){
        err.amount = "please fill out amount"
      }
      if (Object.keys(err).length > 0){
        setErrors({...err})
        return
      }
      // console.log(title,amount)
      addExpense(title,amount)
      setTitle('')
      setAmount(0)
    }
    const handleTitleChange = (e)=>{
      setTitle(e.target.value)
      setErrors({...errors,title:''})
    }
    const handleAmountChange=(e)=>{
      setAmount(parseInt(e.target.value))
      setErrors({...errors,amount:''})
  
    }
    

    return (
<form onSubmit={handleSubmit}>
        <div className="input-container"> 
          <label htmlFor="title">Title </label>
          <input type="text" id="title" value={title} onChange={handleTitleChange}/>
          {errors.title && <div className='error'>{errors.title}</div>}
          {/* //conditional rendering */}
        </div>
        <div className="input-container"> 
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" value={amount} onChange={handleAmountChange}/>
          {errors.amount ? <div className='error'>{errors.amount}</div>: null}
        </div>
        <button type="submit"> Add Transaction</button>
      </form>
    )
}
export default ExpenseForm