import { useSelector } from "react-redux";


function App() {
  const num = useSelector((state) => state.counter)
  return (
   <>
   <div>
   {num}
   </div>
   <button>{handle}</button>
   </>
  );
}

export default App;
