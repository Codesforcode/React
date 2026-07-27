import { useState } from "react";
import Chai from "./Chai.jsx";

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);
  };
  const subValue = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>corrent Value : {counter}</h1>
      <button onClick={addValue}>add</button>
      <button onClick={subValue}>dec</button>
    </>
  );
}

export default App;
