import { useState } from "react";
import "./App.css";

function App() {
  const [bg, setbg] = useState("white")



  return (

    <body style={{backgroundColor:bg}} className="  m-0 p-0"> 

       
      <div >
      <h1 className="mb-9">Back-Ground Color Changer</h1>
        <button className="m-1 text-black" style={{backgroundColor:'red'}} onClick={()=>setbg("red")}>RED</button>
        <button className="m-1 text-black" style={{backgroundColor:'orange'}} onClick={()=>setbg("orange")}>orange</button>
        <button className="m-1 text-black" style={{backgroundColor:'blue'}} onClick={()=>setbg("blue")}>blue</button>
        <button className="m-1 text-black" style={{backgroundColor:'yellow'}} onClick={()=>setbg("yellow")}>yellow</button>
        <button className="m-1 text-black" style={{backgroundColor:'green'}} onClick={()=>setbg("green")}>green</button>
        <button className="m-1 text-royalblue" style={{backgroundColor:'royalblue'}} onClick={()=>setbg("royalblue")}>ROYALBLUE</button>
        <button className="m-1 text-black" style={{backgroundColor:'grey'}} onClick={()=>setbg("grey")}>grey</button>
      </div> 
    </body>

  );
}

export default App;

       