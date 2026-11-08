import { useDispatch } from "react-redux";
import { resetDestination } from "../redux/slice/destinationSlice";
function ResetApp() {
  const dispatch = useDispatch();
  function resetCounterAndDestination() {

    dispatch(resetDestination());
  }
  return (
    <div className="text-center pt-4">
      <button
        onClick={() => resetCounterAndDestination()}
        className="btn btn-warning"
      >
        Reset app
      </button>
    </div>
  );
}

export default ResetApp;
