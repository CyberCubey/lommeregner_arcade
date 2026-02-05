import {useState, useRef } from "react";
import Calculator from "./calculator.jsx";



export default function CalculatorTab() {
  const [size, setSize] = useState({ width: 300,height: 420 });
  const boxRef = useRef(null) ;

const startResize = (e) => {
  const startX = e.clientX;
  const startY = e.clientY;

  const startWidth = size.width;
  const startHeight = size.height;


const onMouseMove = (moveEvent) =>
  { setSize({ width: startWidth + (moveEvent.clientX - startX),
  height: startHeight + (moveEvent.clientY - startY),
  }); };




const onMouseUp = () => {
window.removeEventListener("mousemove", onMouseMove);
window.removeEventListener("mouseup", onMouseUp);
};

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("mouseup", onMouseUp);
};

return ( <div ref={boxRef}
  className="calculator-window"
  style={{ width: size.width, height: size.height }}

  >


<Calculator />
  <div className="resizer" onMouseDown={startResize}>

  </div>
</div>
  );

}

