import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'
import Transaction from './Transaction'


const TransationList = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <div>
      <h3>历史记录</h3>
      <ul className='list'>
        {transactions.map(item => {
          return (
            <Transaction transaction={item} key={item.id} />
          )
        })}
        <button className='delete-btn'>x</button>
      </ul>
    </div>
  )
}

export default TransationList
