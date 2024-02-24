import React, { useState } from "react";

function ButtonGroup() {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: activeButton === "button1" ? "red" : "black",
        }}
        onClick={() => handleClick("button1")}
      >
        Button 1
      </button>
      <button
        style={{
          backgroundColor: activeButton === "button2" ? "red" : "black",
        }}
        onClick={() => handleClick("button2")}
      >
        Button 2
      </button>
      <button
        style={{
          backgroundColor: activeButton === "button3" ? "red" : "black",
        }}
        onClick={() => handleClick("button3")}
      >
        Button 3
      </button>
    </div>
  );
}

export default ButtonGroup;
