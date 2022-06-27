import { useSelector, useDispatch } from "react-redux";
import { minus, plus, zero } from "./feauters/counterReducer";
import './App.css'

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
    <div className="cont">
      <div className="count">{num}</div>
      <div></div>
      <button onClick={handleInc}> Дбавить </button>
      <button onClick={handleDel}>Отнять</button>
      <button onClick={z}> Сброс </button>
      </div>
    </>
  );
}

export default App;
