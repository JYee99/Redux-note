import React from "react";

const ChildComponentB = ({ inputVal, setInputVal }) => {
  return (
    <div>
      <button onClick={() => setInputVal("B")}>ChildComponentB</button>

      <br />
      {inputVal}
    </div>
  );
};

export default ChildComponentB;
