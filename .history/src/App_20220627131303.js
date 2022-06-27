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

  const null = () => {
    dispach(zero())
  }
  return (
   <>
   <div>
   {num}
   </div>
   <button onClick={handleInc} > + </button>
   <button onClick={handleDel}>-</button>
   <div>сброс</div>
   </>
  );
}

export default App;
