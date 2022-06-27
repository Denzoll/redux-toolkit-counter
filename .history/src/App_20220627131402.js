import { useSelector,useDispatch } from "react-redux";
import { minus, plus, zero } from "./feauters/counterReducer";






function App() {
  const num = useSelector((state) => state.counter)
   const dispach = useDispatch()
  const handleInc = () => {
    dispach(plus())
    
  }
  const handleDel =  () => {
    dispach(minus())
  }

  const z = () => {
    dispach(zero())
  }
  return (
   <>
   <div>
   {num}
   </div>
   <button onClick={handleInc} > + </button>
   <button onClick={handleDel}>-</button>
  <button></button>
   </>
  );
}

export default App;
