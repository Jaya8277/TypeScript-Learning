// import { useState, useCallback } from "react";
import { useState } from "react";

import GetPrime from "./components/GetPrime";
import "./App.css";

export default function App() {
  const [prime, setPrime] = useState(1);
  const [prime2, setPrime2] = useState(1);

  const addBoth = () => {
    setPrime((prev) => prev + 15);
    setPrime2((prev) => prev + 15);
  };

  const next1 = () => setPrime((prev) => prev + 1);
  const next2 = () => setPrime((prev) => prev + 1);
  // const next1 = useCallback(() => setPrime((prev) => prev + 1), []);
  // const next2 = useCallback(() => setPrime((prev) => prev + 1), []);

  return (
    <div className="App">
      <div>
        <button onClick={addBoth}>ADD BOTH BY 15X</button>
      </div>
      <GetPrime label="first" value={prime} next={next1} />
      <GetPrime label="second" value={prime2} next={next2} />
    </div>
  );
}
