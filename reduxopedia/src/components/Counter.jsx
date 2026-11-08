import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementMultiple,
  increment,
  incrementMultiple,
} from "../redux/slice/counterSlice";
function counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterStore.count);
  const [value, setValue] = useState(10);
  return (
    <div className="m-4 row border text-center">
      <h1 className="text-warning pt-3">Counter App</h1>
      <hr />
      <span className="col-4 offset-4 badge bg-secondary fs-1 p-3 mb-3">
        {count}
      </span>
      <div className="pb-2 col-6">
        <div className="border p-2">
          <p className="text-success h3">Basic Counter</p>
          <button
            onClick={() => dispatch(decrement())}
            className="btn btn-danger m-2"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="btn btn-success m-2"
          >
            Increment
          </button>
        </div>
      </div>
      <div className="pb-2 col-6">
        <div className="border p-2">
          <p className="text-success h3">Multiple Counter</p>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="multiplier..."
            className="form-control"
          />
          <button
            onClick={() => dispatch(decrementMultiple(value))}
            className="btn btn-danger m-2"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(incrementMultiple(value))}
            className="btn btn-success m-2"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default counter;
