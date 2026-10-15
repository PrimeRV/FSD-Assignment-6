
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="counter-wrapper">
        <h1>React Counter</h1>

        <div className="counter-box">
          <p className="label">Current Count</p>
          <h2>{count}</h2>

          <div className="buttons">
            <button className="increment" onClick={() => setCount(count + 1)}>
              + Increment
            </button>

            <button className="decrement" onClick={() => setCount(count - 1)}>
              - Decrement
            </button>
          </div>

          <button className="reset" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
