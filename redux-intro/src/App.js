import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import IncreaseCounter from './components/IncreaseCounter';
import DecreaseCounter from './components/DecreaseCounter';
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter';
function App() {
  return (
    <div>
      <Counter>
        <IncreaseCounter/>
        <DecreaseCounter/>
        <IncreaseByTwoCounter/>
      </Counter>
     
    </div>
  );
}

export default App;
