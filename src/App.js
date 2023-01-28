import './App.css';
import {Header} from "./components/Header"
import {Balance} from "./components/Balance"
import {IncomeExpenseMarkup} from "./components/IncomeExpenseMarkup";
import {TransactionList} from "./components/TransactionList";
import {AddTransaction} from "./components/AddTransaction";
import {GlobalProvider} from "./context/GlobalContext";
function App() {
  return (
    <div>
      <GlobalProvider>
       <Header/>
       <div className='container'>
        <Balance/>
        <IncomeExpenseMarkup/>
        <TransactionList/>
        <AddTransaction/>
    </div>
    </GlobalProvider>


    </div>
  );
}

export default App;
