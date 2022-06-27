import { useSelector,useDispatch } from "react-redux";
import { plus } from "./feauters/counterReducer";






function App() {
  const num = useSelector((state) => state.counter)
   const dispach = useDispatch()
  const handleInc = () => {
    dispach(plus())
    
  }
  const handleDel = 
  return (
   <>
   <div>
   {num}
   </div>
   <button onClick={handleInc} > + </button>
   </>
  );
}

export default App;
