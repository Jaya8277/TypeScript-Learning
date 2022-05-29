
import './App.css'
import { PinOtp } from './Components/PinOtp'

function App() {
  const handleChange = (otp: string) => {
    console.log("Received", otp);
  };
  
  return (
    <div className="App">
      <PinOtp totalInputs={5} onChange={handleChange} />
    </div>
  );
}

export default App;
