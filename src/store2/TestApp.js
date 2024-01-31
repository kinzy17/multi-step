import { useState } from "react";
import Landing from "../Landing/Landing";
import { actions } from "./store/firstConfigureStore";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [numberToAdd, setNumberToAdd] = useState()
  const counter = useSelector((state) => state.counter)


  const increment = () => {
    dispatch(actions.increment())
    // dispatch({ type: 'INC' });
  }
  const decrement = () => {
    dispatch(actions.decrement())
    // dispatch({ type: 'DEC' });
  };
  const addBy = () => {
    dispatch(actions.addBy(numberToAdd))
    // dispatch({ type: 'ADDBY', payload: numberToA dd });
  }


  return (
    <div className="App">
      {/* <Landing /> */}
      <h1>Counter  app</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <input
        type="number"
        value={numberToAdd}
        onChange={(e) => setNumberToAdd(e.target.value)}
      />
      <button onClick={addBy}>Add BY</button>
    </div>
  );
}

export default App;
