import { useState, useEffect } from "react";
function App() {
  const [color, setColor] = useState(
    localStorage.getItem("bgColor") || "white"
  );
 useEffect(() => {
  localStorage.setItem("bgColor", color);
}, [color]);
const changeColor = (newColor) => {
  if (color === newColor) {
    setColor("white");
  } else {
    setColor(newColor);
  }
};
 

  return (
  <>
  <div className="w-full h-screen duration-200" style={{backgroundColor : color}}></div>
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2 ">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3  py-2 rounded-3xl">
      <button onClick={() => changeColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"red"}}> red</button>
        <button onClick={() => changeColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"orange"}}> orange</button>
        <button onClick={() => changeColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"blue"}}> blue</button>
        <button onClick={() => changeColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"green"}}> green</button>
        <button onClick={() => changeColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"pink"}}> pink</button>
        <button onClick={() => changeColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"black"}}> black</button>
        <button onClick={() => changeColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor:"yellow"}}> yellow</button>

    </div>
  </div>

  </>
  )
}

export default App
