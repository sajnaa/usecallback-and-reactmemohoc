import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";
import Child from "./components/Child";
import Child1 from "./components/Child1";

function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);
  //usecallback function return memerized callback function
  //once create increment function wont create it again
  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []); //if any neccessary to again want to create increment function,we can pass value in []

  return (
    <div className="App">
      usecallback
      <Child count={count} increment={increment} />
      <br></br>
      <Child1 count={count} increment={increment} />
      <button onClick={() => setFlag((flag) => !flag)}>
        recreate increment function
      </button>
    </div>
  );
}

export default App;
