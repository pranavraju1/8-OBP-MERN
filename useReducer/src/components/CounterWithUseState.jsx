import { useState } from "react";
export default function CounterWithUseState() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const increment = () => {
    setCount(count + step);
  };
  const decrement = () => {
    setCount(count - step);
  };
  const reset = () => {
    setCount(0);
    setStep(1);
  };
  return (
    <div>
      <h2>Count: {count}</h2> <p>Step: {step}</p>
      <button onClick={() => setStep(step + 1)}>Increase Step</button>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
