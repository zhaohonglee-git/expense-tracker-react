import React, { useState, useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'

const AddTransation = () => {
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const { dispatch } = useContext(GlobalContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(text, amount)

    const newTransaction = {
      id: Math.random(),
      text: text,
      amount: +amount
    }
    dispatch({ type: 'ADD_TRANSACTION', transaction: newTransaction })
    setText('')
    setAmount(0)
  }

  return (
    <div>
      <h3>添加新交易</h3>
      <form action="" onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="">交易名称</label>
          <input onChange={(e) => { setText(e.target.value) }} type="text" placeholder='输入名称...' value={text} />
        </div>
        <div className='form-control'>
          <label htmlFor="amount">
            金额<br />
            （支出-负数，收入-正数）
          </label>
          <input onChange={(e) => { setAmount(e.target.value) }} type="number" placeholder='输入金额' value={amount} />
        </div>
        <button className='btn'>添加新交易</button>
      </form>
    </div>
  )
}

export default AddTransation
