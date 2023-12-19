import logo from './logo.svg';
import './App.css';
import CounterQ from './components/CounterQ';
import Mycomponent from './components/Mycomponent';

function App() {
  return (
    <div className="App">
      
      <Mycomponent name="siva" age={24} company="Indihood"/>
    </div>
  );
}

export default App;
