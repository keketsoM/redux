import { useDispatch } from "react-redux";
import { resetReduxOPedia } from "../redux/actions/actions";
function ResetApp() {
  const dispatch = useDispatch();
  function resetCounterAndDestination() {
    dispatch(resetReduxOPedia());
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
