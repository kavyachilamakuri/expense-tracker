import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";
//initial state ,a basic idea on how your data that you intend to pass looks like
const initialState={
    transactions:[
      { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }]
}
//Create global context 
export const GlobalContext=createContext(initialState);
//Now this created context should be available for the children in App ,so create a provider
export const GlobalProvider=({children})=>{
    const[state,dispatch]=useReducer(AppReducer,initialState);
    //actions
    function deleteTransaction(id){
      dispatch({
        type:'DELETE_TRANSACTION',
        payload:id
      })

    }
    function addTransaction(transactionItem){
      console.log('transaction to add',transactionItem);
      dispatch({
        type:'ADD_TRANSACTION',
        payload:transactionItem
      })
    }
    return <GlobalContext.Provider value={{transactions:state.transactions,
      deleteTransaction,addTransaction}}>{children}</GlobalContext.Provider>

}