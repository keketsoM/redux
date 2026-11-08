import { useDispatch } from "react-redux";
import { resetCount } from "../redux/slice/counterSlice";
import { resetDestination } from "../redux/slice/destinationSlice";
function ResetApp() {
  const dispatch = useDispatch();
  function head() {
    dispatch(resetCount());
    dispatch(resetDestination());
  }
  return (
    <div className="text-center pt-4">
      <button onClick={() => head()} className="btn btn-warning">
        Reset app
      </button>
    </div>
  );
}

export default ResetApp;
