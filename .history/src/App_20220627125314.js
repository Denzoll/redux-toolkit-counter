import { useSelector } from "react-redux";





function App() {
  const num = useSelector((state) => state.counter)
   const dispach = 
  const handleInc = () => {
    
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
