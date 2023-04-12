import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const handleClick = (event) => {
    setText(text + event.target.innerText);
  };

  const answer = () => {
    try {
      let ans = eval(text);
      setText(ans);
    } catch (error) {
      setText("Invalid input");
    }
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <>
      <input type="text" className=" calculator-input" value={text} readOnly />
      <div className="buttons-container">
        <button onClick={handleClear}>C</button>
        <button onClick={handleClick}>/</button>
        <button onClick={handleClick}>*</button>
        <button onClick={handleClick}>-</button>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={answer}>=</button>
        <button onClick={handleClick}>0</button>
        <button onClick={handleClick}>.</button>
      </div>
    </>
  );
};

export default App;
