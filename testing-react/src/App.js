// import logo from './logo.svg';
import { Counter } from "./Components/Counter";
import { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <h1>Counter:{count}</h1>  
    <Counter onClick={() => {
      setCount(count + 5);
    }} >Add</Counter>

    <Counter onClick={() => {
      setCount(count -5);
    }}>
      Reduce
    </Counter>
    </div>
  );
};

export default App;
