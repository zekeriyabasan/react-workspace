import './App.css';
import IncreaseCounter from './components/IncreaseCounter';
import DecreaseCounter from './components/DecreaseCounter';
import Counter from './components/Counter';
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter'

function App() {
  return (
    <div>
      <Counter/>
      <IncreaseCounter/>
      <DecreaseCounter/>
      <IncreaseByTwoCounter/>
    </div>
  );
}

export default App;
