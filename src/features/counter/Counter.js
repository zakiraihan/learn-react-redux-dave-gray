import {
  decrement,
  increment,
  incrementByAmount,
  reset
} from "./counterSlice";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }
  
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      
      <input
        type="number"
        value={incrementAmount}
        onChangeCapture={(e) => setIncrementAmount(e.target.value)}
      />

      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
        <button onClick={() => dispatch(resetAll)}>Reset</button>
      </div>

    </section>
  )
}

export default Counter