// ComponentC.jsx
import { useContext } from "react";
import { AppContext } from "../context/AppContext";


function ComponentC() {
  const { count, setCount } = useContext(AppContext);

  console.log("Component C rendered");

  return (
    <div>
      <h2>Component C</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default ComponentC;