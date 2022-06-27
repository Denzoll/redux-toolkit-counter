import { useSelector } from "react-redux";





function App() {
  const num = useSelector((state) => state.counter)
   const dispach = useDispatch()
  const handleInc = () => {
    dispach({})
    
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
