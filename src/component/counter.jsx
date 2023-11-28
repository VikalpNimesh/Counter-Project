import { useState } from "react";
import "./App.css";

function App() {
  let [Numb, setNumb] = useState(0);

  function add() {
    if (Numb == 20) {
      return;
    } else {
      Numb = Numb + 1;
      setNumb(Numb);
    }
  }
  function remove() {
    if (Numb == 0) {
      return;
    }

    Numb = Numb - 1;
    setNumb(Numb);
  }
  function reset(){
   setNumb( Numb=0)

  }

  return (
    <>
      <h1 className="p-5 w-96  shadow rounded font-medium">Counter Button</h1>
      <h2>Counter : {Numb}</h2>
      <hr className="m-5" />
      <button onClick={remove} className="bg-blue ml-7 p-6 font-bold font-serif">Removed</button>
      {/* <hr /> */}
      <button onClick={reset} className="bg-blue ml-7 p-6 font-bold  font-serif">Reset</button>
      {/* <hr /> */}
      <button onClick={add} className="bg-blue ml-7 p-6 font-bold  font-serif">Added</button>
     
      <hr  className="m-5"/>
      
    </>
  );
}

export default App;
