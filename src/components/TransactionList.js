import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Transaction from './Transaction';

export const TransactionList = () => {
  const {transactions}=useContext(GlobalContext);
  console.log('current context',transactions);
  return (
    <>
    <h3>History</h3>
    <ul id="list" className="list" >
      {transactions.map(transaction=>(
          <Transaction transaction={transaction} key={transaction.id}/>
      )
      )}
    
    </ul>
    </>
  )
}
