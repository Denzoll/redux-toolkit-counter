import { useSelector } from "react-redux";
import { plus } from "./feauters/counterReducer";
import {useDispatch}





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
   <button>{handleInc}</button>
   </>
  );
}

export default App;
