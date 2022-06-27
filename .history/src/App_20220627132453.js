import { useSelector, useDispatch } from "react-redux";
import { minus, plus, zero } from "./feauters/counterReducer";
import './app/'

function App() {
  const num = useSelector((state) => state.counter);
  const dispach = useDispatch();
  const handleInc = () => {
    dispach(plus());
  };
  const handleDel = () => {
    dispach(minus());
  };

  const z = () => {
    dispach(zero());
  };
  return (
    <>
      <div>{num}</div>
      <button onClick={handleInc}> + </button>
      <button onClick={handleDel}>-</button>
      <button onClick={z}> сброс </button>
    </>
  );
}

export default App;
