import { useSelector,useDispatch } from "react-redux";
import { plus } from "./feauters/counterReducer";






function App() {
  const num = useSelector((state) => state.counter)
   const dispach = useDispatch()
  const handleInc = () => {
    dispach(plus())
    
  }
  return (
   <>
   <div>
   {num}
   </div>
   <button  > + </button>
   </>
  );
}

export default App;
