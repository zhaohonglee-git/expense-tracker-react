import './App.css';
import { Balance } from './components/Balance';
import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense'
import TransationList from './components/TransationList'
import AddTransation from './components/AddTransation'
import { GlobalProvider } from './contexts/GlobalState';

function App() {
  return (
    <GlobalProvider className="App">
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <TransationList />
        <AddTransation />
      </div>
    </GlobalProvider>
  );
}

export default App;
