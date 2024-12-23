import React from "react";
import ChildComponentB from "./ChildComponentB";

const ChildComponentA = ({ inputVal, setInputVal }) => {
  return (
    <div>
      ChildComponentA
      <br />
      {inputVal}
      <ChildComponentB inputVal={inputVal} setInputVal={setInputVal} />
    </div>
  );
};

export default ChildComponentA;
