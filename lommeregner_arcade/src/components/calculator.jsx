import { useState } from "react";



export default
function Calculator() {

const [value, setValue] = useState("");

const handleClick = (val) => {


 if (val === "=") {
  try { setValue(eval(value).toString());
  } catch {setValue("Error");


} return; }
if (val === "C") { setValue("");
return;} setValue(value + val);

};


const buttons = [
  "7", "8", "9", "/",
  "4", "5", "6", "*",
  "1", "2", "3", "-",
  "0", ".", "=", "+",
  "C"
];

return ( <div className="calculator">
  <input className="display" value={value} readOnly />

  <div className="buttons">
  {buttons.map((b) => ( <button key={b}
  

className="calc-btn"
onClick={() => handleClick(b)} > {b}
</button>

))}

</div> </div>

  );
}




