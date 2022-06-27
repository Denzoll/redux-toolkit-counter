import { useSelector } from "react-redux";


function App() {
  const num = useSelector((state) => state.counter)
  return (
   <>
   <div>
   {num}
   </div>
   <button>{ha}</button>
   </>
  );
}

export default App;
