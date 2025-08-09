import { useState } from "react";

function App() {
  const [color, setColor] = useState("gray");

  return (
    <div
      className="h-screen w-full duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg outline-none" 
          
          onClick={() => setColor("red")}>Red
          
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-lg outline-none" 
          
          onClick={() => setColor("black")}>Black
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg outline-none" onClick={() => setColor("green")}>Green
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg outline-none" 
          
          onClick={() => setColor("yellow")}>Yellow
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg outline-none" 
          
          onClick={() => setColor("orange")}>Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
