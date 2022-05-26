// import { useState } from 'react'
// import logo from './logo.svg'
import './App.css';
import { useTimeoutHooks } from './hooks/useTimeoutHooks'

function App() {
  const ready = useTimeoutHooks(5000);
  if(ready ==false) {

    return (
      <>
      <h1>Waiting for response</h1>
      </>
    );
  }
  return (
    <div className="App">
      <h1>Ready</h1>
    </div>
  );

}

export default App;